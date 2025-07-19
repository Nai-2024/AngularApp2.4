import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HamburgerIconComponent } from '../../hamburger-icon/hamburger-icon.component';
import { AppDataService } from '../service/app-data.service';

@Component({
  selector: 'app-header',
  standalone: true, // Indicates this is a standalone component and does not require declaration in an NgModule.
  templateUrl: './header.component.html', // Specifies the HTML file that defines the component’s structure.
  styleUrl: './header.component.css', // Specifies the CSS file that styles the component.
  imports: [RouterModule, HamburgerIconComponent], // Imports required modules or components, such as routing and custom components.
})
export class HeaderComponent {
  
  title: string;

  constructor(private appData: AppDataService) { // Calling AppDataService class to use the function and title property
    this.title = this.appData.getTitle();
  }
}
