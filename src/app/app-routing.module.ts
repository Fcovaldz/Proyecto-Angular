import { RouterModule, Routes } from "@angular/router";
import { ContenidoComponent } from './@components/contenido/contenido.component';
import { EtiquetasComponent } from './@components/etiquetas/etiquetas.component';
import { AboutComponent } from './@components/about/about.component';
import { EtiquetaComponent } from './@components/etiqueta/etiqueta.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contenido', component: ContenidoComponent},
    {path: 'etiquetas', component: EtiquetasComponent},
    {path: 'etiqueta/:id', component: EtiquetaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'header'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
})
export class AppRoutingModule { }