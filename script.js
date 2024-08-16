// List of fruits
const fruitsList = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", 
    "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", 
    "papaya", "quince", "raspberry", "strawberry", "tangerine", 
    "ugli fruit", "watermelon"]

    
function displayFruitName () {
    
    // create new <li> tag
    let liTag = document.createElement("li"); 
    
    // Select a random fruit
    const randomIndex = Math.floor(Math.random() * fruitsList.length);
    const fruit = fruitsList[randomIndex];
    
    // Add fruit to the <li> tag
    liTag.innerHTML = fruit;
    
    // Add a new list item to the web page
    let list = document.getElementById("fruits-list");
    list.appendChild(liTag);

;}