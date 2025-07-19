import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-icon', // The HTML tag used to render this component.
  imports: [], // An array of modules or components this component depends on.
  templateUrl: './hamburger-icon.component.html', // // Path to the external HTML file that defines this component's UI.
  styleUrls: ['./hamburger-icon.component.css'] // Path to the external CSS file that styles this component.

})
export class HamburgerIconComponent {
  isOpen = false; // A boolean property to keep track of whether the hamburger menu is open or closed.
  toggleMenu() {  // Method to toggle the hamburger menu open or closed.
    this.isOpen = !this.isOpen; // Flips the value of isOpen between true and false.

    const nav = document.getElementById('navbarNav'); // Gets the DOM element with id 'navbarNav'.
    if(nav) {
      nav.classList.toggle('show', this.isOpen); // If the element exists, toggle the class 'show' based on the isOpen value.
    }
  }
}
