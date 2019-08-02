export class PersonaModel {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _nombre: string;
  // tslint:disable-next-line:variable-name
  private _apellido: string;
  // tslint:disable-next-line:variable-name
  private _telefono: string;
  // tslint:disable-next-line:variable-name
  private _clave: string;
  // tslint:disable-next-line:variable-name
  private _estado: boolean;


  constructor(id: number, nombre: string, apellido: string, telefono: string, clave: string, estado: boolean) {
    this._id = id;
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
    this._clave = clave;
    this._estado = estado;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get apellido(): string {
    return this._apellido;
  }

  set apellido(value: string) {
    this._apellido = value;
  }

  get telefono(): string {
    return this._telefono;
  }

  set telefono(value: string) {
    this._telefono = value;
  }

  get clave(): string {
    return this._clave;
  }

  set clave(value: string) {
    this._clave = value;
  }

  get estado(): boolean {
    return this._estado;
  }

  set estado(value: boolean) {
    this._estado = value;
  }
}
