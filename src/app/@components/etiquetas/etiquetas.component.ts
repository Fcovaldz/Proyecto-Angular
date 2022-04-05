import { Component, OnInit } from '@angular/core';
import { EtiquetaService } from '../../services/etiqueta.service';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {

  etiquetas: any[] = [];
  constructor(private etiquetaService: EtiquetaService) { }

  ngOnInit(): void {
    this.etiquetas = this.etiquetaService.getEtiquetas();
    
  }

}
