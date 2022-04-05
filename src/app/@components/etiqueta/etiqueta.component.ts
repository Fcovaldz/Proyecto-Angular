import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtiquetaService } from '../../services/etiqueta.service';

@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {

  etiqueta: any;

  constructor(private activatedRoute: ActivatedRoute, private etiquetaService: EtiquetaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.etiqueta = this.etiquetaService.getEtiqueta(params['id']);
    })
  }

}
