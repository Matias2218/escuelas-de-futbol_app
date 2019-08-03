import {
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

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  @ViewChild('divElement', {static: false}) div: ElementRef;
  @ViewChild('modalTemplate', {static: false}) public modalTemplate: ModalTemplate<IContext, string, string>;


  scrHeight: any;
  scrWidth: any;
  esResponsivo = false;
  rut: string;
  password: string;

  constructor(private renderer: Renderer2, private modalService: SuiModalService,
              private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
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

  // Metodo responsable de abrir el modal y configurarlo
  open() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    this.rut = '';
    this.password = '';
    config.size = 'tiny';
    config.isClosable = true;
    this.modalService
      .open(config)
      .onApprove(() => {
        this.loginService.loginApod(this.rut, this.password).subscribe(value => {
          console.log(value);
        }, error => {
          this.loginService.loginProf(this.rut, this.password).subscribe( value => {
            console.log(value);
          }, error1 => {
            this.loginService.loginAdmin(this.rut, this.password).subscribe( value => {
              console.log(value);
            },
              error2 => {
                swal.fire({
                  type: 'error',
                  title: 'Credenciales invalidas',
                  text: 'Ingrese sus datos nuevamente',
                  confirmButtonText: 'OK',
                }).then((result) => {
                  if (result.value) {
                    this.open();
                  }
                });
              });
            });
        });
      });
  }
}




