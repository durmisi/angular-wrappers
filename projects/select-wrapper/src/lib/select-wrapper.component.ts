import { Component, OnInit } from '@angular/core';

//import '~@ng-select/ng-select/themes/default.theme.css';

@Component({
  selector: 'ng-select-wrapper',
  template: `
    <p>
      select-wrapper works!

      <ng-select class="custom"></ng-select>
    </p>
  `,
  styles: []
})
export class SelectWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
