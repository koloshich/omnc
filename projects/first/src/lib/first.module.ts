import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { FirstComponent } from './first.component';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: FirstComponent,
    }])
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
