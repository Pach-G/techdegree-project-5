//=========
// Searcher
//=========
const searchWord = () => {
    // Stores users input value
    let userInput = document.getElementById('searchBar').value;
    // stores all list items
    let imgLi = document.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < imgLi.length; i++) {
        // if userInput doesn't match img data-caption set img display to none
        // Transforms userInput .toLowerCase()
        if (!imgLi[i].innerHTML.toLowerCase().includes(userInput.toLowerCase())) {
            imgLi[i].style.display = "none";
        }
        // Displays all userInput matches
        // prints all keyup matches to the console
        else {
            imgLi[i].style.display = "list-item";
            console.log(imgLi);
        }
    }
};


