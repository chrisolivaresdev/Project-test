import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { CardComponent } from './card/card.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports:[
    NavbarComponent,
    SpinnerComponent,
    CardComponent
  ]
})
export class SharedModule { }
