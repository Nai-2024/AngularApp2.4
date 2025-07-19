import { Component } from '@angular/core'; // decorator from Angular's core package.
import { RouterOutlet } from '@angular/router'; // directive/component from Angular’s router package.
import { SharedModule } from './shared-module/shared-module';

@Component({ // the componennt decorator which says to angular - this class is component
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule], // import RouterOutlet so we can use <router-outlet> in our template, + shared-module
  templateUrl: './app.component.html', // Angular connects your component class to this HTML file 
  styleUrls: ['./app.component.css'],  // Angular connects your component class to this CSS file 
})

export class AppComponent {
  
}
