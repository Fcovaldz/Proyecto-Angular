import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos: any[] = [];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos();
  }

}
