import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlAdmin = 'http://localhost:8000/api/auth/login/admin';

  constructor(private httpClient: HttpClient) {
  }

  loginAdmin(rut: string, password: string) {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('clave', password);
    return this.httpClient.post(this.urlAdmin, formData);
  }
}
