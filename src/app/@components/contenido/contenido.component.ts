import { Component, Input, OnInit } from '@angular/core';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  etiquetas: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private etiquetaService: EtiquetaService) { }

  ngOnInit(): void {
    this.etiquetas = this.etiquetaService.getEtiquetas();
    
    
  }
  


  

}
