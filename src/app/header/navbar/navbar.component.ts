import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../shared/services/login.service';
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import {PersonaModel} from '../../shared/models/persona.model';
import {AdministradorModel} from '../../shared/models/administrador.model';
import {LoadingModalHelper} from '../../shared/components/loading-modal.component';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrHeight: any; // Altura de la ventana de navegador
  scrWidth: any; // Ancho de la venta de navgeador
  esResponsivo = false; // Bandera que permite determinar el navbar responisvo
  modalActivo = false; // Bandera que permite  determinar si se paso al siguiente modal de login
  rol: string; // Determine el rol del usuario para realizar el login
  persona: PersonaModel; // Entidad Persona que permite la construccion del objeto
  @ViewChild('divElement', {static: false}) div: ElementRef; // Elemento del DOM perteneciente al div del navbar
  @ViewChild('modalTemplate', {static: false}) modalTemplate:
    ModalTemplate<IContext, string, string>; // Elemento del DOM perteneciente al div del modal de login
  @ViewChild('f', {static: false}) loginForm: NgForm; // Validacion de form basda en Template Driven


  constructor(private renderer: Renderer2, private modalService: SuiModalService,
              private router: Router, private route: ActivatedRoute,
              private loginService: LoginService) {
  }

  ngOnInit() {
    scroll();
    this.getScreenSize();
  }


  // Metodo de colores  de navbar segun el movimiento
  @HostListener('window:scroll') scroll() {
    if (window.scrollX === 0 && window.scrollY === 0) {
      this.renderer.removeClass(this.div.nativeElement, 'greysi');
    } else {
      this.renderer.addClass(this.div.nativeElement, 'greysi');
    }
  }

  // Metodo responsable de ajustar el navbar responsivamente
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth <= '840') {
      this.esResponsivo = true;
    } else if (this.scrWidth > '840') {
      this.esResponsivo = false;
    }
  }

  errorCredenciales() {
    swal.fire({
      type: 'error',
      title: 'Credenciales invalidas',
      text: 'Ingrese sus datos nuevamente',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.value) {
        this.modalActivo = false;
        this.open();
      }
    });
  }

  // Metodo responsable de abrir el modal y configurarlo
  open() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    config.size = 'tiny';
    config.isClosable = true;
    config.transitionDuration = 100;
    this.modalActivo = false;
    this.modalService
      .open(config)
      .onApprove(() => {
        const modalCargando = this.modalService.open(new LoadingModalHelper());
        let rut = this.loginForm.form.controls.txtRut.value.toString();
        rut = rut.slice(0, rut.length - 1) + '-' + rut.slice(rut.length - 1);
        const password = this.loginForm.form.controls.txtClave.value;
        switch (this.rol) {
          case 'Apoderado': {
            this.loginService.loginApod(rut, password).subscribe(value => {
              console.log(value);
              modalCargando.destroy();
            }, error => {
              modalCargando.destroy();
              this.errorCredenciales();
            });
            break;
          }
          case 'Profesor': {
            this.loginService.loginProf(rut, password).subscribe(value => {
              console.log(value);
              modalCargando.destroy();
            }, error => {
              modalCargando.destroy();
              this.errorCredenciales();
            });
            break;
          }
          case 'Administrador': {
              this.loginService.loginAdmin(rut, password).subscribe(value => {
              this.loginService.guardarAdmin(value);
              this.loginService.guardarToken(value);
              this.persona = this.loginService.persona as AdministradorModel;
              console.log(this.persona.id);
              modalCargando.destroy();
            }, error => {
                console.log(error);
                modalCargando.destroy();
                this.errorCredenciales();
            });
              break;
          }
          default: {
            modalCargando.destroy();
            this.errorCredenciales();
          }
        }
      });
  }

  nextModal(rol: string) {
    this.rol = rol;
    this.modalActivo = !this.modalActivo;
  }
  volver() {
    this.modalActivo = false;
  }

  logOut() {
      this.loginService.logout();
  }
}




