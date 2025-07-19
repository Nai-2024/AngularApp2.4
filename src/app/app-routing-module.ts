import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  imports: [RouterModule.forRoot(routes)], // importing the RouterModule
  exports: [RouterModule] // Exporting the RouterModule
})
export class AppRoutingModule {}
