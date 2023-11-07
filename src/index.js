//CHALLENGE ONE
//fetch the dog images
const dogImageContainer = document.getElementById("dog-image-container")

function fetchDogImages(dog) {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(displayDogImages)
}

//loop through each dog image
function displayDogImages(data) {
    data.message.forEach(displayDogImage)
}

//add each image to the DOM
function displayDogImage(dog) {
    const image = document.createElement('img')
    image.src = dog;
    image.style.width = "20%";
    dogImageContainer.appendChild(image);
}

fetchDogImages()

//CHALLENGE TWO
//fetch the dog breeds URL, call another function in response
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchDogBreeds(dog) {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => loopThroughDogBreeds(data))
}

//loop through each dog breed from the URL and call another function
//object.keys = The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names
function loopThroughDogBreeds(data) {
    Object.keys(data.message).forEach(displayDogBreeds)
}

//create a list element and set it's innerHTML to the breed
//target the UL and append the new list to it
function displayDogBreeds(dog) {
    const newBreed = document.createElement('li')
    newBreed.innerHTML = dog;
    const list = document.querySelector("#dog-breeds")
    list.appendChild(newBreed)
    let isClicked = false;
//adding an event listener for challenge 3
    newBreed.addEventListener('click', function() {
        if (isClicked) {
            //sets color back to default if isClicked is "true", which it is
            newBreed.style.color = "black";
        } else {
            //sets the color to a different color once isClicked is "false"
            newBreed.style.color = "red";
        }
        //keeps track of whether it has been clicked or not
        isClicked = !isClicked;
    })
}

fetchDogBreeds()

//CHALLENGE FOUR
document.getElementById('breed-dropdown').addEventListener('change', sortByLetter);

function sortByLetter(event){
//declare a variable that targets our change dropdown event
const letter = event.target.value;
//select all list items
const listItems = document.querySelectorAll('li');
//loop through each list item
listItems.forEach(item => {
//if the first letter of the breed matches the dropdown or is the default, return the breed/entire list
        if (item.textContent.charAt(0) === letter || letter === 'default') {
            item.style.display = 'block';
//if the first letter of the breed doesn't match the dropdown, hide the breed
        } else {
            item.style.display = 'none';
        }
    })
}