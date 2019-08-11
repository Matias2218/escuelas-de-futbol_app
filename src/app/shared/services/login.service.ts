import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdministradorModel} from '../models/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // tslint:disable-next-line:variable-name
  private _persona: any;
  // tslint:disable-next-line:variable-name
  private _token: string;
  urlAdmin = 'http://localhost:8000/api/auth/login/admin';
  urlApod = 'http://localhost:8000/api/auth/login/apod';
  urlProf = 'http://localhost:8000/api/auth/login/prof';

  constructor(private httpClient: HttpClient) {
  }

  public get persona() {
    if (this._persona != null) {
      return this._persona;
    } else if (this._persona == null && sessionStorage.getItem('usuario') != null) {
      this._persona = JSON.parse(sessionStorage.getItem('usuario'));
      return this.persona;
    }
    return null;
  }
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('usuario');
      return this._token;
    }
    return null;
  }
  loginAdmin(rut: string, password: string) {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('clave', password);
    return this.httpClient.post(this.urlAdmin, formData);
  }

  loginProf(rut: string, password: string) {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('clave', password);
    return this.httpClient.post(this.urlProf, formData);
  }

  loginApod(rut: string, password: string) {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('clave', password);
    return this.httpClient.post(this.urlApod, formData);
  }


  guardarAdmin(value: any) {

    this._persona = new AdministradorModel(value.user.Pk_Id, value.user.C_Nombre, value.user.C_Apellido ,
      value.user.C_Telefono , value.user.C_Estado, value.user.C_Correo, value.user.C_Estado, value.user.C_Tipo);
    sessionStorage.setItem('usuario', JSON.stringify(this._persona));

  }

  guardarToken(value: any) {
    this._token = value.access_token;
    sessionStorage.setItem('token', this._token);
  }
  estaAutenticado(): boolean {
    return this.token != null && this.token.length > 0;
  }
  logout(): void {
    this._token = null;
    this._persona = null;
    sessionStorage.clear();
  }
}
