import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactenosComponent} from './contactenos/contactenos.component';
import {SuscripcionComponent} from './suscripcion/suscripcion.component';
import {NosotrosComponent} from './nosotros/nosotros.component';


const appRutas: Routes = [
  {path : '', component : ContactenosComponent},
  {path: 'suscripciones', component: SuscripcionComponent},
  {path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
   imports: [
     RouterModule.forRoot(appRutas)
   ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
