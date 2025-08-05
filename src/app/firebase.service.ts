// firebase.service.ts
import { Injectable } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';

// Decorator marks this class as injectable and available application-wide (singleton)
@Injectable({ providedIn: 'root' })

export class FirebaseService {
  // Inject Firebase Realtime Database instance in the constructor
  constructor(private db: Database) {}

  // Save menu data (array) to the Firebase Realtime Database
  saveMenu(menu: any[]) {
    // Create a reference/path named 'menu' in the database
    const menuRef = ref(this.db, 'menu');

    // Save the menu array at the 'menu' path, returns a promise
    return set(menuRef, menu);
  }

  // Fetch the menu data stored at 'menu' path from Firebase Realtime Database
  async fetchMenu() {
    // Get a reference to the root of the database
    const dbRef = ref(this.db);
    
    // Get the snapshot of the child node 'menu'
    const snapshot = await get(child(dbRef, 'menu'));
    // Return the menu data if it exists, else return an empty array
    return snapshot.exists() ? snapshot.val() : [];
  }
}
