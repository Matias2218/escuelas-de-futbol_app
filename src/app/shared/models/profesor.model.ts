import {PersonaModel} from './persona.model';

export class ProfesorModel extends PersonaModel{

  // tslint:disable-next-line:variable-name
  private _correo: string;

  constructor(id: number, nombre: string, apellido: string, telefono: string, clave: string, estado: boolean, correo: string) {
    super(id, nombre, apellido, telefono, clave, estado);
    this._correo = correo;
  }


  get correo(): string {
    return this._correo;
  }

  set correo(value: string) {
    this._correo = value;
  }
}
