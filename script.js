class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}.`;
    }
  }
}

// es.2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const petList = document.getElementById("pet-list");
const listItem2 = document.getElementsByClassName("list-group-item");

const form = document.getElementById("pet-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );
  addPetToList(pet);
  form.reset();
});

function addPetToList(pet) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `Nome: ${pet.petName}, Padrone: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}
