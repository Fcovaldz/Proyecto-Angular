import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private datos = [
    {
      img: "assets/img/descarga.jpg"
    },
    {
      img: "assets/img/descarga1.png"
    }
  ]

  constructor() { }

  getDatos(){
    return this.datos;
  }
}
