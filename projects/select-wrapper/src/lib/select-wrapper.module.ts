import { NgModule } from '@angular/core';
import { SelectWrapperComponent } from './select-wrapper.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectWrapperComponent],
  imports: [
    NgSelectModule, FormsModule
  ],
  exports: [SelectWrapperComponent, NgSelectModule, FormsModule]
})
export class SelectWrapperModule { }
