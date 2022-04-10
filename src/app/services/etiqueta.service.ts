import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {


  private etiquetas = [
    {
      nombre: "head",
      descripcion: "Este elemento actúa como un contenedor de todo aquello que quieres incluir en la página HTML que no es contenido visible por los visitantes de la página. Incluye cosas como palabras clave (keywords), una descripción de la página que quieres que aparezca en resultados de búsquedas, código CSS para dar estilo al contenido, declaraciones del juego de caracteres, etc.",
      img: "assets/img/head.jpeg",
      funcion: "Provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos.",
      uso: "El elemento HTML <head>es un contenedor para los siguientes elementos: <title>, <style>, <meta>, <link>, <script>y <base>."
    },
    {
      nombre: "header",
      descripcion: "Un elemento <header> suele contener uno o más elementos de encabezamiento (<h1> - <h6>)un logotipo o icono información de autoría. Puede tener varios elementos <header> en un documento HTML. Es intransferible por que <header> no puede colocarse dentro de un <footer>, <address> u otro elemento <header>.",
      img: "assets/img/header.jpeg",
      funcion: "Representa un contenedor de contenido introductorio o un conjunto de enlaces de navegación.",
      uso: "El elemento <header> representa un contenedor de contenido introductorio o un conjunto de enlaces de navegación"
    },
    {
      nombre: "body",
      descripcion: "El elemento <body> contiene todo el contenido de un documento HTML, como títulos, párrafos, imágenes, hipervínculos, tablas, listas, etc. Sólo puede haber un elemento <body> en un documento HTML.",
      img: "assets/img/body.jpeg",
      funcion: "Define el cuerpo del documento",
      uso: "La etiqueta <body> define el cuerpo del documento."
    },
    {
      nombre: "footer",
      descripcion: "El elemento de pie de pagina puede contener información sobre: la autoría, el copyright, información de contacto, mapa del sitio, enlaces de vuelta al principio, documentos relacionados y puede tener varios elementos <footer> en un mismo documento.",
      img: "assets/img/footer.png",
      funcion: "Pie de pagina, contacto y enlace a mas contenido",
      uso: "La etiqueta <footer> define un pie de página para un documento o sección."
    },
    {
      nombre: "main",
      descripcion: "En el elemento <main> debe ser único para el documento. No debe contener ningún contenido que se repita en todos los documentos, como barras laterales, enlaces de navegación, información de derechos de autor, logotipos del sitio y formularios de búsqueda.",
      img: "assets/img/main.png",
      funcion: "La etiqueta <main> especifica el contenido principal de un documento.",
      uso: "La etiqueta <main> especifica el contenido principal de un documento."
    },
    {
      nombre: "section",
      descripcion: "La etiqueta <section> define una sección en un documento",
      img: "assets/img/section.png",
      funcion: "Seccion de produccion",
      uso: "Produccion"
    },
    {
      nombre: "article",
      descripcion: "Un artículo debe tener sentido por sí mismo y debe ser posible distribuirlo independientemente del resto del sitio. Fuentes potenciales para el elemento <article> son: Los mensaje del foro, entrada de blog, artículo de noticias",
      img: "assets/img/article.png",
      funcion: "El elemento <article> no se muestra como algo especial en un navegador.",
      uso: "La etiqueta <article> nos dan un contenido independiente y autónomo de informacion"
    },
    {
      nombre: "HTML Headings",
      descripcion: "Los títulos HTML se definen con las etiquetas <h1> a <h6>. <h1> define el encabezamiento más importante. <h6> define el encabezamiento menos importante.",
      img: "assets/img/headings.jpeg",
      funcion: "Facilitar al usuario para hojear una página por sus encabezados.",
      uso: "Los encabezados HTML son títulos o subtítulos que se quieren mostrar en una página web. SEs importante utilizar los encabezamientos para mostrar la estructura del documento."
    },
    {
      nombre: "<!DOCTYPE html>",
      descripcion: "el tipo de documento. Es un preámbulo requerido. Anteriormente, cuando HTML era joven (cerca de 1991/2), los tipos de documento actuaban como vínculos a un conjunto de reglas que el código HTML de la página debía seguir para ser considerado bueno, lo que podía significar la verificación automática de errores y algunas otras cosas de utilidad. Sin embargo, hoy día es simplemente un artefacto antiguo que a nadie le importa, pero que debe ser incluido para que todo funcione correctamente. Por ahora, eso es todo lo que necesitas saber.",
      img: "assets/img/doctype.png",
      funcion: "Etiqueta para definir el tipo de documento",
      uso: "Tipo de documento"
    },
    {
      nombre: "img",
      descripcion: "  El elemento img representa a una imagen, lo cual es un recurso externo que puede ser incrustado en el cuerpo de un documento.",
      img: "assets/img/etiquetaimg.PNG",
      funcion: "El elemento de imagen/Image configura gráficos en una página web.",
      uso: "Nunca uses valores imprecisos de width y height en tu imagen. Estos valores deben ser siempre exactos, o harás que el navegador muestre imágenes distorsionadas en la pantalla."
    },
    {
      nombre: "hr<h1>, <h2>, <h3>, <h4>, <h5> y <h6> ",
      descripcion: "  <hr> elemento se muestra con mayor frecuencia como una regla horizontal que se utiliza para separar el contenido (o definir un cambio) en una página",
      img: "assets/img/etiquetahr.PNG",
      funcion: "La <hr> etiqueta define un salto temático en una página HTML (por ejemplo, un cambio de tema).",
      uso: "Admite los atributos de evento"
    },
    {
      nombre: "title",
      descripcion: " El tag title (título) es un tag de código HTML que le permite darle un título a una página web. ",
      img: "assets/img/etiquetatitle.PNG",
      funcion: "establece el título de tu página, que es el título que aparece en la pestaña o en la barra de título del navegador cuando la página es cargada, y se usa para describir la página cuando es añadida a los marcadores o como favorita.",
      uso: "Este título se puede encontrar en la barra de título del navegador, así como en las páginas de resultados de los buscadores "
    },
    {
      nombre: "p",
      descripcion: " El elemento p (párrafo) es el apropiado para distribuir el texto en párrafos. Sus etiquetas son: <p> y </p> (la de cierre es opcional). ",
      img: "assets/img/etiquetap.PNG",
      funcion: "La etiqueta <p> define un parrafo de cualquier tema. ",
      uso: "es el apropiado para distribuir el texto en párrafos.  "
    },
    {
      nombre: "br",
      descripcion: " <br />. Cualquier elemento que acepte phrasing content. Este elemento incluye los atributos globales.",
      img: "assets/img/etiquetabr.PNG",
      funcion: "Indica donde empieza la siguiente línea después del salto. ",
      uso: "Es útil para escribir un poema o una dirección"
    },
    {
      nombre: "menu",
      descripcion: "  El elemento menu representa una barra de menú que consiste en una lista de comandos representada por una lista no ordenada de ítems (elementos li). ",
      img: "assets/img/etiquetamenu.PNG",
      funcion: " Este elemento es simplemente una alternativa semántica al elemento ul que se utiliza para representar una lista no ordenada de comandos.",
      uso: "como complemento"
    },
    {
      nombre: "main",
      descripcion: " <main> representa el contenido principal del de un documento o aplicación.  ",
      img: "assets/img/etiquetamain.PNG",
      funcion: " omo principal función contener los temas principales de una sección o documento. ",
      uso: "se expande sobre el tema central"
    },
    {
      nombre: "table",
      descripcion: " ( <table>) representa datos en dos o mas dimensiones.   ",
      img: "assets/img/etiquetatable.PNG",
      funcion: "Define un texto alternativo para describir una tabla en un usuario incapaz de mostrarlo, corrientemente contiene una descripcion  ",
      uso: "Conceptos básicos de las tablas"
    },
    {
      nombre: "div",
      descripcion: " La etiqueta div es un elemento no visual (de forma predeterminada)  ",
      img: "assets/img/etiquetadiv.PNG",
      funcion: "Aplica propiedades adicionales al contenido contenido en ella. A diferencia de la etiqueta span.  ",
      uso: "La etiqueta div es más fácil de usar que la etiqueta table, por eso es recomendable que la utilices cada vez que la necesites."
    },
    {
      nombre: "tbody",
      descripcion: " tbody contiene a un bloque de filas (tr) que representaa a la sección del cuerpo de una tabla (table). ",
      img: "assets/img/etiquetatbody.png",
      funcion: " se utiliza para agrupar el contenido del cuerpo en una tabla HTML.",
      uso: "Especifica cada parte de una tabla"
    },
    {
      nombre: "thead",
      descripcion: " <head> provee información general (metadatos) acerca del documento  ",
      img: "assets/img/etiquetathead.png",
      funcion: " <thead> se utiliza para agrupar el contenido del encabezado en una tabla HTML.. ",
      uso: "Los navegadores pueden usar estos elementos para permitir el desplazamiento del cuerpo de la tabla independientemente del encabezado"
    },
    {
      nombre: "th",
      descripcion: " La naturaleza exacta de este grupo está definida por los atributos scope y headers  ",
      img: "assets/img/etiquetath.png",
      funcion: " define una celda como encabezado de un grupo de celdas en una tabla ",
      uso: "se expande sobre el tema central"
    },
    {
      nombre: "td",
      descripcion: "  ( <td>) define la celda de una tabla que contiene datos.   ",
      img: "assets/img/etiquetatd.png",
      funcion: "Esta participa en el modelo de tablas. Ninguna. Contenido dinámico. La etiqueta de inicio es obligatoria. La etiqueta final puede ser omitida, si esta inmediatamente seguida por un elemento  ",
      uso: "se expande sobre el tema central"
    },
    {
      nombre: "ol",
      descripcion: " <ol> es un elemento de bloque  ",
      img: "assets/img/etiquetaol.png",
      funcion: " permite hacer listas ordenadas alfanuméricamente generadas de forma automática a medida que escribimos diferentes puntos de información, representados a su vez con la etiqueta <li>. ",
      uso: "escribimos diferentes puntos de información"
    },
    {
      nombre: "li",
      descripcion: " La <li> etiqueta se utiliza dentro de las listas <ol> ordenadas ( ), las listas no <ul> ordenadas ( ), y en las listas de menús ( <menu> ).  ",
      img: "assets/img/etiquetali.png",
      funcion: "  Especifica un elemento en la lista se ha de utilizar la etiqueta <li></li>, en la que se ha de especificar el texto que compone el elemento de la lista. ",
      uso: "se pueden crear listas anidadas."
    },
    {
      nombre: "ul",
      descripcion: " El elemento ul representa una lista no ordenada de ítems que, en contraste con las lista ordenadas ( elemento ol ), no produce significados diferentes si el orden de los ítems es alterado. Los ítems de ambas listas, ordenadas y no ordenadas, son representados por el elemento li.  ",
      img: "assets/img/etiquetasul.png",
      funcion: " no produce significados diferentes si el orden de los ítems es alterado.  ",
      uso: "representa una lista no ordenada"
    },
    {
      nombre: "a",
      descripcion: " El elemento HTML Anchor <a> crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página ",
      img: "assets/img/etiquetaA.png",
      funcion: " La etiqueta <a> es un hipervínculo, que se utiliza para enlazar de una página a otra..  ",
      uso: "El elemento <a> es el atributo href, que indica el destino del enlace."
      },
      {
      nombre: "aside",
      descripcion: " El elemento HTML <aside> </aside> Dentro de estas etiquetas suele alojarse el contenido adicional de la web. No se muestra como algo especial en un navegador.",
      img: "assets/img/aside.png",
      funcion: " El elemento <aside> está diseñado para contener información adicional al documento que se visualiza.",
      uso: "El elemento <aside> se  a menudo se coloca como una barra lateral en un documento. "
      },
      {
        nombre: "strong",
        descripcion: " La etiqueta <strong> se usa para definir texto con gran importancia. El contenido interior normalmente se muestra en negrita.",
        img: "assets/img/strong.png",
        funcion: " Se usa para resaltar el texto que queremos dar enfacis.",
        uso: " Tambien tenemos la etiqueta <b> para especificar texto en negrita sin ninguna importancia adicional. "
      },
      {
        nombre: "br",
        descripcion: " La etiqueta br se utilizada para crear un salto de línea.",
        img: "assets/img/br.png",
        funcion: " Se usa para separar una linea de texto de la anterior.",
        uso: " Tambien se usa la etiqueta <br> que es una etiqueta vacía, lo que significa que no tiene una etiqueta final. "
      },
      {
        nombre: "audio",
        descripcion: " La etiqueta <audio> se usa para incrustar contenido de sonido en un documento, como música u otras transmisiones de audio.",
        img: "assets/img/audio.png",
        funcion: "El texto entre las etiquetas <audio> y </audio> solo se mostrará en navegadores que no admitan el elemento <audio>.", 
        uso: "Hay tres formatos de audio admitidos en HTML: MP3, WAV y OGG.r.",
      },
      {
        nombre: "video",
        descripcion: " La etiqueta <video> se usa para incrustar contenido de sonido en un documento, como música u otras transmisiones de audio.",
        img: "assets/img/video.png",
        funcion: "El texto entre las etiquetas <audio> y </audio> solo se mostrará en navegadores que no admitan el elemento <audio>.", 
        uso: "Se usa para reproducir video en la página web junto a sus archivos de audio y capciones asociadas..",
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
