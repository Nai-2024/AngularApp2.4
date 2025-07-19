import { Component, Input } from '@angular/core';
import { AppDataService } from '../service/app-data.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  title: string;

  constructor(private appData: AppDataService) {
    this.title = this.appData.getTitle();
  }
}