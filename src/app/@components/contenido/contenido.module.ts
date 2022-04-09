import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { TitleModule } from '../../@widgets/title/title.module';



@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    TitleModule,

    
  ],
  exports: [ContenidoComponent]
})
export class ContenidoModule { }
