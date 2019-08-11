import {PersonaModel} from './persona.model';
import {AlumnoModel} from "./alumno.model";
import {Observable} from "rxjs";

export class AdministradorModel  extends PersonaModel {
  // tslint:disable-next-line:variable-name
  private _correo: string;
  // tslint:disable-next-line:variable-name
  private _escuelaId: number;
  // tslint:disable-next-line:variable-name
  private _tipoAdmin: boolean;


  constructor(id?: number, nombre?: string, apellido?: string, telefono?: string,
              estado?: boolean, correo?: string, escuelaId?: number, tipoAdmin?: boolean) {
    super(id, nombre, apellido, telefono, estado);
    this._correo = correo;
    this._escuelaId = escuelaId;
    this._tipoAdmin = tipoAdmin;
  }


  get correo(): string {
    return this._correo;
  }

  set correo(value: string) {
    this._correo = value;
  }

  get escuelaId(): number {
    return this._escuelaId;
  }

  set escuelaId(value: number) {
    this._escuelaId = value;
  }

  get tipoAdmin(): boolean {
    return this._tipoAdmin;
  }

  set tipoAdmin(value: boolean) {
    this._tipoAdmin = value;
  }
}
