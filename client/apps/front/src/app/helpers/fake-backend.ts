import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators'

import { User } from '@core/models/auth.model'

type MyRequestBody = {
  // Define the structure of your request body
  username: string
  name: string
  password: string
  email: string
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDcmVhdGV4IiwiaWF0IjoxNTg3MzU2NjQ5LCJleHAiOjE5MDI4ODk0NDksImF1ZCI6Imh0dHBzOi8vY3JlYXRleC5zdHVkaW8vIiwic3ViIjoiY29udGFjdEBjcmVhdGV4LnN0dWRpbyIsImxhc3ROYW1lIjoiQ3JlYXRleCIsIkVtYWlsIjoiY29udGFjdEBjcmVhdGV4LnN0dWRpbyIsIlJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IlNpbGljb24ifQ.u-fC2GWfGOAfjdw1NhDBr3AD59xaEYKs3gR43vKCQJ4'

/**
 * @returns registered user list
 */
function getUsers(): User[] {
  let users: User[] = JSON.parse(sessionStorage.getItem('users')!) || [
    {
      id: 1,
      username: 'user',
      email: 'user@email.com',
      password: 'password',
      firstName: 'User',
      lastName: 'Theme',
      token: token,
    },
  ]
  return users
}

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<MyRequestBody>,
    next: HttpHandler
  ): Observable<HttpEvent<Event>> {
    const authHeader = request.headers.get('Authorization')
    const isLoggedIn =
      authHeader && authHeader.startsWith('Bearer fake-jwt-token')
    let users: User[] = getUsers()
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(
        mergeMap(() => {
          let temp: User[] = []
          // authenticate - public
          if (request.url.endsWith('/api/login') && request.method === 'POST') {
            const user = users.find(
              (x) =>
                x.email === request.body?.email &&
                x.password === request.body?.password
            )
            if (!user) {
              return error('Email or password is incorrect')
            }
            return ok({
              ...user,
            })
          }

          // store new user - public
          if (
            request.url.endsWith('/api/signup') &&
            request.method === 'POST'
          ) {
            const user = users.find(
              (x) =>
                x.email === request.body?.email &&
                x.password === request.body?.password
            )
            if (user) {
              return error('User Already Exists')
            } else {
              let [firstName, lastName] = request.body?.name.split(' ')!
              const newUser: User = {
                id: users.length + 1,
                username: firstName,
                email: request.body?.email,
                password: request.body?.password,
                firstName: firstName,
                lastName: lastName,
                token: token,
              }
              temp = [...users]
              temp.push(newUser)
              sessionStorage.setItem('users', JSON.stringify(temp))
              return ok()
            }
          }

          // pass through any requests not handled above
          return next.handle(request)
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize())

    // private helper functions
    function ok(body?: User) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } })
    }

    function error(message: string) {
      return throwError({ status: 400, error: { message } })
    }
  }
}

export let FakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
}
