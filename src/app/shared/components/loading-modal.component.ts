import {Component} from '@angular/core';
import {ComponentModalConfig} from 'ng2-semantic-ui/dist';

@Component({
  selector: 'app-loading',
  template: `
      <div class="ui medium text loader">Cargando</div>
  `
})
export  class LoadingModalComponent {
  constructor() {
  }
}

export  class LoadingModalHelper   extends ComponentModalConfig<void, void> {

  constructor() {
    super(LoadingModalComponent);
    this.size = 'tiny';
    this.isClosable = false;
    this.transitionDuration = 100;
  }
}
