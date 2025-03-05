import {HttpsError} from "firebase-functions/v1/https";

export class NotFoundError extends HttpsError {
  constructor(message: string) {
    super('not-found', message);
  }
}
export class InternalServerError extends HttpsError {
  constructor(message: string) {
    super('internal', message);
  }
}

export class FailedPreconditionError extends HttpsError {
  constructor(message: string) {
    super('failed-precondition', message);
  }
}

export class UnauthenticatedError extends HttpsError{
  constructor(message: string) {
    super('unauthenticated', message);
  }
}
