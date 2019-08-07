import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import {AppRoutingModule} from './app-routing.module';
import { ApoderadoComponent } from './apoderado/apoderado.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfesorComponent } from './profesor/profesor.component';
import { AdministradorComponent } from './administrador/administrador.component';
import {Ng2Rut} from 'ng2-rut';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactenosComponent,
    SuscripcionComponent,
    NosotrosComponent,
    ApoderadoComponent,
    ProfesorComponent,
    AdministradorComponent,
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2Rut
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
