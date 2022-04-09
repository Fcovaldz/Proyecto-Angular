import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EtiquetasComponent } from './@components/etiquetas/etiquetas.component';
import { EtiquetaComponent } from './@components/etiqueta/etiqueta.component';
import { CardComponent } from './@components/card/card.component';
import { BuscadorComponent } from './@components/buscador/buscador.component';
import { SubstringPipe } from './pipes/substring.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { HeaderComponent } from './@components/header/header.component';
import { FooterComponent } from './@components/footer/footer.component';
import { ContenidoComponent } from './@components/contenido/contenido.component';
import { ContactComponent } from './@components/contact/contact.component';
import { AboutComponent } from './@components/about/about.component';
import { TitleModule } from './@widgets/title/title.module';

@NgModule({
  declarations: [
    
    AppComponent,
         EtiquetasComponent,
         EtiquetaComponent,
         CardComponent,
         BuscadorComponent,
         SubstringPipe,
         NavbarComponent,
         HeaderComponent,
         FooterComponent,
         ContenidoComponent,
         ContactComponent,
         AboutComponent,
         

    
  ],
  imports: [
    BrowserModule,
    TitleModule,
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
