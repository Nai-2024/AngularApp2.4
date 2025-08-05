import { Component, OnInit } from "@angular/core";
import { AppDataService } from "../shared-module/service/app-data.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./menu.component.html",
  styleUrl: "./menu.component.css",
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];          // Array to hold menu items with quantity added
  categories: string[] = [];      // List of categories for filtering menu
  selectedCategory: string = "";  // Currently selected category for filtering

  orderPlaced: boolean = false;   // Flag to show order success message
  orderNumber: string = "";       // Random generated order number on placing order

    // constructor injects the data service to access menu data
  constructor(private dataService: AppDataService) {}

   // Lifecycle hook runs after component initialization
  ngOnInit(): void {
     // Get menu items from the data service and add quantity property defaulted to 0
    this.menuItems = this.dataService.getMenuItems().map((item) => ({
      ...item,
      quantity: 0, // default quantity
    }));
    // Get the categories from the data service
    this.categories = this.dataService.categories;
  }

   // Return menu items filtered by selected category, or all if none selected
  getFilteredItems() {
    if (!this.selectedCategory) return this.menuItems;
    return this.menuItems.filter(
      (item) => item.category === this.selectedCategory
    );
  }

   // Return the menu items which have quantity > 0 (selected items)
 getSelectedItems() {
  return this.menuItems.filter((item) => item.quantity > 0);
}

 // Calculate total price of selected items based on quantity and unit price
  getTotalPrice() {
    return this.getSelectedItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Called when the user places an order
  placeOrder() {
     // If no items selected, do nothing
    if (this.getSelectedItems().length === 0) return;

    // Generate a random 6-character alphanumeric order number (uppercase)
    this.orderNumber = Math.random().toString(36).substr(2, 6).toUpperCase();

    // Show the success message
    this.orderPlaced = true;

    // Clear selected quantities
    for (let item of this.menuItems) {
      item.quantity = 0;
    }
  }
}
