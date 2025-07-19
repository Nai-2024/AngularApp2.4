import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [CommonModule, HeaderComponent, FooterComponent],// import standlone components
  exports: [HeaderComponent,FooterComponent, CommonModule], // Now export them to share
})
export class SharedModule {}
