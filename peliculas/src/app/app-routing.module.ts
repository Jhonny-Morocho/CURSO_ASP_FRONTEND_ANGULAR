import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './indice-generos/indice-generos.component';

const routes: Routes = [
  { path: 'generos', component: IndiceGenerosComponent},
  { path: 'editar/:id', component:EditarGeneroComponent  },
  { path: 'crear', component:CrearGeneroComponent  },
  { path: '**', redirectTo: 'generos' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  
})

export class AppRoutingModule { }
