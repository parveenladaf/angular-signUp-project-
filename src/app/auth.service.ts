import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { MatSnackBar } from '@angular/material';
import { MatSnackBar } from '@angular/material';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  USER_BASE_URL_DEV = environment.USER_BASE_URL_DEV;

  constructor(private httpClient: HttpClient, public matSnackBar: MatSnackBar) { }


  userRegister(body) {
      const registerUrl = `${this.USER_BASE_URL_DEV}/register`;
      return this.httpClient.post(registerUrl, body);

    }
    openToast(message, action, duration?: number) {
      message = message.match(/.{1,65}/g).join(' ');
      this.matSnackBar.open(message, action, {
        panelClass: ['blue-snackbar']
      });
    }
}