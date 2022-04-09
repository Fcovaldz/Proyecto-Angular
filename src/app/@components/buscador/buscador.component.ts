import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtiquetaService } from 'src/app/services/etiqueta.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  
  etiquetas: any[] = [];
  texto!: string;

  constructor(private etiquetaService: EtiquetaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params['texto'];
      this.etiquetas= this.etiquetaService.buscarEtiqueta(this.texto);
    });
  }

}
