import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { TitleModule } from '../../@widgets/title/title.module';
import { ModalModule } from "../../@components/modal/modal.module";


@NgModule({
  declarations: [
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ModalModule
    
  ],
  exports: [ContenidoComponent]
})
export class ContenidoModule { }
