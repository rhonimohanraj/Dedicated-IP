import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  openControlPanel(domain: string, username: string, password: string): void {
    // create hidden form and submit then delete it
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = domain + '/login';
    form.target = '_blank';
    const usernameField = document.createElement('input');
    usernameField.type = 'text';
    usernameField.name = 'username';
    usernameField.value = username;
    form.appendChild(usernameField);
    const passwordField = document.createElement('input');
    passwordField.type = 'password';
    passwordField.name = 'password';
    passwordField.value = password;
    form.appendChild(passwordField);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
}
