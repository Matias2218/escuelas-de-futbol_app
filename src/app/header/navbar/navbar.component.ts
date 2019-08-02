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
    this.password  = '';
    config.size = 'tiny';
    this.modalService
      .open(config)
      .onApprove( () => {
        if (this.rut === 'apoderado' && this.password === 'apoderado') {
          this.router.navigate(['/apoderados'], {relativeTo: this.route});
        } else if (this.rut === 'profesor' && this.password === 'profesor') {
          this.router.navigate(['/profesores'], {relativeTo: this.route});
        } else if (this.rut === 'admin' && this.password === 'admin') {
          this.router.navigate(['/administradores'], {relativeTo: this.route});
        } else {
          console.log('error');
        }
      });
  }

}
