import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Database, ref, set, get, child } from "@angular/fire/database"; // Firebase Realtime Database imports

@Component({
  selector: "app-custom-menu", // The HTML tag to use this component
  standalone: true, // Standalone component (no NgModule needed)
  imports: [CommonModule, FormsModule], // Modules imported for template features 
  templateUrl: "./custom-menu.component.html", // HTML template file
  styleUrls: ["./custom-menu.component.css"], // Css style file
})
export class CustomMenuComponent implements OnInit {
  // inject Firebase Realtime Database
  private db = inject(Database); 

  // Controls whether to show all items or only selected ones
  viewSelectedItems = false;

  // The list of all available menu items
  customItems = [
    {
      id: 1,
      name: "Chicken Kebab",
      description:
        "Juicy grilled chicken skewer, marinated in our special blend of spices.",
      price: 9,
      quantity: 0,
      image: "assets/custom/chicken-kebab.png",
    },
    {
      id: 2,
      name: "Beef Kebab",
      description:
        "Tender beef skewer, flame-grilled to perfection and rich in flavor.",
      price: 11,
      quantity: 0,
      image: "assets/custom/beef-kebab.png",
    },
    {
      id: 3,
      name: "Beef Kebab with Rice",
      description:
        "Savory ground beef skewer served with aromatic basmati rice.",
      price: 15,
      quantity: 0,
      image: "assets/custom/ground-beef-rice.png",
    },
    {
      id: 4,
      name: "Low-Carb Fish Platter",
      description:
        "Freshly grilled fish served with a crisp, refreshing garden salad.",
      price: 15,
      quantity: 0,
      image: "assets/custom/low-carbs.png",
    },
    {
      id: 5,
      name: "Fruit Chaat",
      description:
        "A refreshing bowl of assorted seasonal fruits, lightly spiced and tossed together.",
      price: 12,
      quantity: 0,
      image: "assets/custom/fruite-chatt.png",
    },
    {
      id: 7,
      name: "Salad",
      description:
        "A bowl of fresh mixed greens, tomatoes, cucumbers, and house dressing.",
      price: 5,
      quantity: 0,
      image: "assets/custom/salad.png",
    },

    {
      id: 6,
      name: "Pepsi",
      description: "Chilled can of classic Pepsi to refresh your taste buds.",
      price: 2,
      quantity: 0,
      image: "assets/custom/pepsi.png",
    },
    {
      id: 9,
      name: "Sprite",
      description: "Zesty and cool Sprite served in a chilled can.",
      price: 2,
      quantity: 0,
      image: "assets/custom/sprit.png",
    },
  ];

  // Lifecycle hook runs after component initialization
  ngOnInit(): void {
    this.loadSelections();
  }

  // Getter that returns only the items with quantity > 0
  get selectedItems() {
    return this.customItems.filter((item) => item.quantity > 0);
  }

  // Method to reset the quantity of a selected item to zero
  removeSelectedItem(id: number) {
    const item = this.customItems.find((i) => i.id === id);
    if (item) {
      item.quantity = 0;
    }
  }

  // Save selected items to Firebase Realtime Database
  saveSelections() {
    // Get the selected items only
    const selected = this.selectedItems; 

    // Debugging log to verify selected items
    console.log("Selected items:", selected); 

    // Create a reference path 'customMenuSelection' in the database
    const menuRef = ref(this.db, "customMenuSelection");
     // Save the selected items at the database reference
    set(menuRef, selected)
      .then(() => {
        console.log("Menu Saved to Firebase!"); // Log success message
      })
      .catch((err) => {
        console.error("Error saving to Firebase:", err); // Log errors if saving fails
      });
  }

  // Load saved menu selection from Firebase Realtime Database
  loadSelections() {

    const dbRef = ref(this.db);  
    
    // Read data from 'customMenuSelection' path
    get(child(dbRef, "customMenuSelection"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Get saved items from snapshot
          const savedItems = snapshot.val();
          
          // Reset all quantities
          this.customItems.forEach((item) => (item.quantity = 0));
          
          // For each saved item, find matching menu item and update quantity
          savedItems.forEach((savedItem: any) => {
            const item = this.customItems.find((i) => i.id === savedItem.id);
            if (item) {
              item.quantity = savedItem.quantity;
            }
          });
          console.log("Loaded saved selection from Firebase"); // Log success message
        } else {
          console.log("No saved selections found"); // Log if no data found
        }
      })
      .catch((err) => {
        console.error("Error loading from Firebase:", err); // Log errors during loading
      });
  }
}
