import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('divElement', {static: false}) div: ElementRef;
  @ViewChild('modalTemplate', {static: false})

  scrHeight: any;
  scrWidth: any;
  esResponsivo = false;

  public modalTemplate: ModalTemplate<IContext, string, string>;

  constructor(private renderer: Renderer2, private modalService: SuiModalService) {
  }

  ngOnInit() {
    scroll();
  }

  ngAfterViewInit(): void {
    // Decidir el nav a utlizar
    this.getScreenSize();
  }

  @HostListener('window:scroll') scroll() {
    if (window.scrollX === 0 && window.scrollY === 0) {
      this.renderer.removeClass(this.div.nativeElement, 'greysi');
    } else {
      this.renderer.addClass(this.div.nativeElement, 'greysi');
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth <= '800') {
      this.esResponsivo = true;
    } else if (this.scrWidth > '800') {
      this.esResponsivo = false;
    }
  }


  open(dynamicContent: string = 'Example') {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.context = {data: dynamicContent};

    this.modalService
      .open(config)
      .onApprove(result => {
        console.log('aprobado');
      })
      .onDeny(result => {
        console.log('rechazado');
      });
  }

}
