import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // This makes it available app-wide automatically
})
export class AppDataService {
  private resturantTitle = "Nai Restaurant"; // App title

  getTitle(): string {
    // Getter function to get the title
    return this.resturantTitle;
  }
}
