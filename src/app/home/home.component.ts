import { Component, Input } from '@angular/core';
// Import a shared service for app data
import { AppDataService } from '../shared-module/service/app-data.service';
// Import RouterModule to enable router directives (like routerLink)
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],  // Modules imported for template features (routing)
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
    title: string;  // Property to hold the page title

  constructor(private appData: AppDataService) {
    // Get the title from the shared service during component creation
    this.title = this.appData.getTitle();
  }
}