import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {


  private etiquetas = [
    {
      nombre: "head",
      descripcion: "Este elemento actúa como un contenedor de todo aquello que quieres incluir en la página HTML que no es contenido visible por los visitantes de la página. Incluye cosas como palabras clave (keywords), una descripción de la página que quieres que aparezca en resultados de búsquedas, código CSS para dar estilo al contenido, declaraciones del juego de caracteres, etc.",
      img: "../../assets/img/head.png",
      funcion: "Provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos.",
      uso: "El elemento HTML <head>es un contenedor para los siguientes elementos: <title>, <style>, <meta>, <link>, <script>y <base>."
    },
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
    {
      nombre: "head",
      descripcion: "El <head>elemento es un contenedor de metadatos (datos sobre datos) y se coloca entre la <html>etiqueta y la <body>etiqueta. Los metadatos HTML son datos sobre el documento HTML. Los metadatos no se muestran. Los metadatos suelen definir el título del documento, el conjunto de caracteres, los estilos, los scripts y otra metainformación.",
      img: "../../assets/img/head.png",
      funcion: "Provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos.",
      uso: "El elemento HTML <head>es un contenedor para los siguientes elementos: <title>, <style>, <meta>, <link>, <script>y <base>."
    },
    {
      nombre: "header",
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro animi exercitationem esse provident modi voluptatem labore iusto magnam, dolor quia laborum laboriosam voluptas ea quod ullam voluptatum itaque. Architecto, esse?",
      img: "../../assets/img/descarga3.jpg",
      funcion: "Encabezado de pagina",
      uso: "Encabezados"
    },
    {
      nombre: "<!DOCTYPE html>",
      descripcion: "el tipo de documento. Es un preámbulo requerido. Anteriormente, cuando HTML era joven (cerca de 1991/2), los tipos de documento actuaban como vínculos a un conjunto de reglas que el código HTML de la página debía seguir para ser considerado bueno, lo que podía significar la verificación automática de errores y algunas otras cosas de utilidad. Sin embargo, hoy día es simplemente un artefacto antiguo que a nadie le importa, pero que debe ser incluido para que todo funcione correctamente. Por ahora, eso es todo lo que necesitas saber.",
      img: "../../assets/img/doctype.png",
      funcion: "Etiqueta para definir el tipo de documento",
      uso: "Tipo de documento"
    }
    
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
