import { Component, Input } from '@angular/core';
import { AppDataService } from '../shared-module/service/app-data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
    title: string;

  constructor(private appData: AppDataService) {
    this.title = this.appData.getTitle();
  }
}