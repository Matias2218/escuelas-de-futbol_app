import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactenosComponent} from './contactenos/contactenos.component';
import {SuscripcionComponent} from './suscripcion/suscripcion.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {ApoderadoComponent} from './apoderado/apoderado.component';
import {ProfesorComponent} from './profesor/profesor.component';
import {AdministradorComponent} from './administrador/administrador.component';


const appRutas: Routes = [
  {path : '', component : ContactenosComponent},
  {path: 'suscripciones', component: SuscripcionComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'apoderados', component: ApoderadoComponent},
  {path: 'profesores', component: ProfesorComponent},
  {path: 'administradores', component: AdministradorComponent},
];

@NgModule({
   imports: [
     RouterModule.forRoot(appRutas)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
