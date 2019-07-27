import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';

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

  @ViewChild('modalTemplate', {static: false})
  public modalTemplate: ModalTemplate<IContext, string, string>

  constructor(private renderer: Renderer2, private modalService: SuiModalService) { }
  ngOnInit() {
    scroll();
  }

  @HostListener('window:scroll') scroll() {
    if ( window.scrollX === 0 && window.scrollY === 0) {
      this.renderer.removeClass(this.div.nativeElement, 'greysi');
    } else {
      this.renderer.addClass(this.div.nativeElement, 'greysi');
    }
  }


  open(dynamicContent: string = 'Example') {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = 'closed!';
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => {
        console.log('aprobado');
      })
      .onDeny(result => {  console.log('rechazado'); });
  }
}
