import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root", // This makes it available app-wide automatically
})
export class AppDataService {
  private resturantTitle = "Nai Restaurant"; // App title

  private menuItems = [
    {
      name: "Beef Kebab",
      price: "18.99",
      description:
        "Our beef kebabs are crafted from high-quality, tender beef seasoned with a blend of aromatic spices, including garlic, paprika, and cumin. Each serving of these flavourful kebabs is approximately 200 calories, making them a satisfying yet balanced choice for your meal.",
      image: "assets/images/beef-kebab.png",
      category: 'Beef'
    },
    {
      name: "Chiken Kebab",
      price: "17.99",
      description:
        "Our chicken kebabs are made from juicy, marinated chicken breast, seasoned with a zesty blend of herbs and spices such as lemon, garlic, and oregano. Each serving is around 180 calories, offering a flavourful and lean protein option for a delicious, health-conscious meal.",
      image: "assets/images/chicken-kebab.png",
      category: 'Chicken'
    },
    {
      name: "Ground Beef Kebab",
      price: "16.99",
      description:
        "Our ground beef kebabs are crafted from finely minced beef, seasoned with a savoury mix of spices and herbs, including cumin, coriander, and a hint of chili. Each serving contains around 220 calories, delivering a flavourful experience while maintaining a satisfying balance.",
      image: "assets/images/beef-ground-kebab.png",
      category: 'Beef'
    },
    {
      name: "Fish Kebab",
      price: "24.99",
      description:
        "Our fish kebabs feature tender, succulent pieces of fresh fish marinated in a blend of citrus, garlic, and herbs. With each serving containing around 150 calories, these kebabs offer a light yet flavourful option that’s perfect for a healthy and delicious meal to enjoy a satisfying and healthy meal.",
      image: "assets/images/fish-kebab.png",
      category: 'Fish'
    },
    {
      name: "Low Carbs Kebab",
      price: "18.99",
      description:
        "Our low-carb kebabs are crafted with lean meats and a blend of fresh herbs and spices, offering a flavourful experience without the extra carbs. Each serving contains approximately 170 calories and minimal carbohydrates, making them an ideal choice for those looking to enjoy a satisfying and health-conscious meal.",
      image: "assets/images/low-carbs.png",
      category: 'Low Carbs'
    },
    {
      name: "Shawarma Kebab",
      price: "12.99",
      description:
        "Our shawarma kebabs feature marinated strips of tender meat, seasoned with a rich blend of spices including cumin, coriander, and turmeric. Each serving contains approximately 250 calories, offering a flavourful and authentic taste experience that’s both satisfying and health-conscious meal.",
       image: "assets/images/beef-shawarma.png",
       category: 'Shawarma'
    },
    {
      name: "Karahi",
      price: "18.99",
      description:
        "Our Karahi features tender chunks of meat and vegetables simmered in a rich, aromatic sauce made with tomatoes, garlic, ginger, onion and a blend of traditional spices. Each serving contains around 300 calories, offering a robust and flavourful meal that’s both satisfying and full of depth. Enjoy the bold, savoury taste of this classic dish.",
      image: "assets/images/karahi.png",
      category: 'Karahi'
    },
    {
      name: "Salad",
      price: "18.99",
      description:
        "Our fresh salad combines crisp greens, vibrant vegetables, and a medley of crunchy toppings, all tossed in a light, flavourful dressing. Each serving is approximately 100 calories, making it a refreshing and nutritious choice for a healthy meal. Packed with vitamins and fiber, this salad is perfect as a side or a light main course.",
      image: "assets/images/salad.png",
      category: 'Salad'
    },
    {
      name: "Fruit Chaat",
      price: "18.99",
      description:
        "Our Fruit Chaat features a colourful assortment of fresh, seasonal fruits tossed together with a hint of lime and a sprinkle of chaat masala for a delightful burst of flavour. Each serving contains approximately 120 calories, offering a naturally sweet and refreshing option that’s perfect as a light snack or a healthy dessert.",
      image: "assets/images/fruite-chatt.png",
      category: 'Appetizers'
    },
  ];

  categories = ['Beef', 'Chicken', 'Fish', 'Salad','Shawarma', 'Karahi', 'Low Carbs','Appetizers'];
selectedCategory = '';

  getTitle(): string {
    // Getter function to get the title
    return this.resturantTitle;
  }

  getMenuItems() {
    return this.menuItems;
  }
}
