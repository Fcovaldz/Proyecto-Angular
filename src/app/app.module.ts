import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './@components/navbar/navbar.module';
import { HeaderModule } from './@components/header/header.module';
import { FooterModule } from './@components/footer/footer.module';
import { ContenidoModule } from './@components/contenido/contenido.module';
import { ContactModule } from './@components/contact/contact.module';
import { AboutModule } from './@components/about/about.module';
import { ModalModule } from './@components/modal/modal.module';
import { EtiquetasComponent } from './@components/etiquetas/etiquetas.component';
import { EtiquetaComponent } from './@components/etiqueta/etiqueta.component';
import { CardComponent } from './@components/card/card.component';
import { BuscadorComponent } from './@components/buscador/buscador.component';
import { SubstringPipe } from './pipes/substring.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    
    AppComponent,
         EtiquetasComponent,
         EtiquetaComponent,
         CardComponent,
         BuscadorComponent,
         SubstringPipe,
         

    
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    ModalModule,
    ContenidoModule,
    ContactModule,
    AboutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
