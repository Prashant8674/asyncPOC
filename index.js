const fetchButton = document.querySelector('button');
const unorderlist = document.querySelector('ul');

let dogs = [];
const fetchDogs = async ()=> {
    const dogs = await fetch("http://dog.ceo/api/breed/hound/images");
    const dogJson = await dogs.json();
    dogJson.message.forEach(createDogList);
}

fetchButton.addEventListener("click",fetchDogs);

const createDogList = (imageURL)=>{
    const dogLi = document.createElement("li");
    const dogImage = document.createElement("img");
    dogImage.src = imageURL;
    dogLi.appendChild(dogImage);
    unorderlist.appendChild(dogLi);
}