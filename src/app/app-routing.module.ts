import { RouterModule, Routes } from "@angular/router";
import { ContenidoComponent } from './@components/contenido/contenido.component';
import { EtiquetasComponent } from './@components/etiquetas/etiquetas.component';
import { AboutComponent } from './@components/about/about.component';
import { EtiquetaComponent } from './@components/etiqueta/etiqueta.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './@components/contact/contact.component';
import { BuscadorComponent } from "./@components/buscador/buscador.component";

const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'contenido', component: ContenidoComponent},
    {path: 'buscador/:texto', component: BuscadorComponent},
    {path: 'etiquetas', component: EtiquetasComponent},
    {path: 'etiqueta/:id', component: EtiquetaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'contenido'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    
    exports: [RouterModule]
})
export class AppRoutingModule { }