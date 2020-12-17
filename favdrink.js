function favDrinks() {
    var text;
    var drinks = (document.getElementById("inputbox").value).toLowerCase();

    //Switch(expression) to select code blocks to be executed.
    switch (drinks) {
        //Cases to be tested against the expression.
        case "Pineapple", "pineapple":
            text = "Pineapple Rum Punch";
            break;
        case "Apple", "apple":
            text = "Apple Whiskey Sour";
            //If case matches, code will execute, and break will end switch block.
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
            toext = "Cranberry Cosmopolitan";
            break;
        case "Banana", "banana":
            text = "Dirty Banana Cocktail";
            break;
        case "Watermelon", "watermelon":
            text = "Watermelon Sangria";
            break;
        //If none of the cases match, default text is ran
        default: 
        text = "There are no drinks with that selection."
    }
    document.getElementById("favdrinkresult").innerHTML = text;
}