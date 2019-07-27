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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactenosComponent,
    SuscripcionComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
