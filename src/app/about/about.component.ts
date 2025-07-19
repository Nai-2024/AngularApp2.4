import { Component } from '@angular/core';
import { AppDataService } from '../shared-module/service/app-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  title: string;
  constructor(private appData: AppDataService) {
    this.title = this.appData.getTitle();
  }
}
