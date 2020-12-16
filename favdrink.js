function favDrinks() {
    var text;
    var drinks = document.getElementById("inputbox").value;
  
    switch(drinks) {
     case "Pineapple", "pineapple":
      text = "Pineapple Rum Punch";
      break;
    case "Apple", "apple":
      text = "Apple Whiskey Sour";
      break;
    case "Lime", "lime":
      text = "Tequila Lime Mojito Cocktail";
      break;
    case "Cherry", "cherry":
      text = "Cherry Lemonde Cocktail";
      break;
    case "Orange", "orange":
        text = "Orange Crush";
        break;
    case "Cranberry", "cranberry":
        text = "Cranberry Cosmopolitan";
        break;
    case "Banana", "Banana":
        text = "Dirty Banana Cocktail";
        break;
    case "Watermelon", "watermelon":
        text = "Watermelon Sangria";
        break;
    default: text = "There are no drinks with that selection."
    }
    document.getElementById("favdrinkresult").innerHTML = text;
  }