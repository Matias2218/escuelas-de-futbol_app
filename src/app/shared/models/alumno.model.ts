import {PersonaModel} from './persona.model';

export class AlumnoModel extends PersonaModel {
  // tslint:disable-next-line:variable-name
  private _apoderadoId: number;
  // tslint:disable-next-line:variable-name
  private _divisionId: number;


  constructor(id: number, nombre: string, apellido: string, telefono: string,
              estado: boolean, apoderadoId: number, divisionId: number) {
    super(id, nombre, apellido, telefono, estado);
    this._apoderadoId = apoderadoId;
    this._divisionId = divisionId;
  }

  get apoderadoId(): number {
    return this._apoderadoId;
  }

  set apoderadoId(value: number) {
    this._apoderadoId = value;
  }

  get divisionId(): number {
    return this._divisionId;
  }

  set divisionId(value: number) {
    this._divisionId = value;
  }
}
