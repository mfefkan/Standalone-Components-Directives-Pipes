import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"standalone",loadComponent:()=>import("./components/standalone/standalone.component").then(s=>s.StandaloneComponent)}, //lazy loading kullanımı loadComponent ile oluyor. tek farkı bu. 
  {path:"standalone2",loadComponent:()=>import("./components/standalone2/standalone2.component").then(s=>s.Standalone2Component)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
