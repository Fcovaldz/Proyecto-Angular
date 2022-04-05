import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {


  private etiquetas = [
    {
      nombre: "header",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Encabezado de pagina",
      uso: "Encabezados"
    },
    {
      nombre: "body",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Cuerpo de pagina",
      uso: "Cuerpo de html"
    },
    {
      nombre: "footer",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Pie de pagina, contacto y enlace a mas contenido",
      uso: "Pie de Pagina"
    },
    {
      nombre: "head",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Espacio para enlazar recursos externos como estilos y para definir codificacion",
      uso: "enlazar recursos externos"
    },
    {
      nombre: "main",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Seccion de produccion",
      uso: "Produccion"
    },
    {
      nombre: "section",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Seccion de produccion",
      uso: "Produccion"
    },
    {
      nombre: "article",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Seccion de produccion",
      uso: "Produccion"
    },
    
  ];

  constructor() { }
  getEtiquetas() {
    return this.etiquetas;
  }

  getEtiqueta(id: number) {
    return this.etiquetas[id];
  }

  buscarEtiqueta(texto: string) {
    let etiquetasArr: any[] = [];

    for (let etiqueta of this.etiquetas) {
      if (etiqueta.nombre.toLowerCase().includes(texto.toLowerCase()))
        etiquetasArr.push(etiqueta);
    }

    return etiquetasArr;
  }
}
