// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
  threeContacts.forEach(contact => {
    const otherRows = document.createElement("tr");
    otherRows.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

    tableBody.appendChild(otherRows);

    // ITERATION 2 - Delete Buttons

    // Your code goes here ...
    const deleteButtons = otherRows.querySelector(".btn-delete");

    deleteButtons.onclick = () => otherRows.remove();

    // ITERATION 3 - Like Buttons

    // Your code goes here ...
        const likeButtons = otherRows.querySelector(".btn-like");

        likeButtons.onclick = () => likeButtons.classList.toggle("selected");
  })

  
// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...

buttonAddRandom.onclick = () => {
  const addNewContact = Math.floor(Math.random() * contacts.length);
  const splicedContact = contacts.splice(addNewContact, 1);

  // Get the element from the spliced array
  const newContact = splicedContact[0];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${newContact.pictureUrl}" />
  </td>
  <td> ${newContact.name} </td>
  <td> ${newContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(newRow);


  const deleteButtons = newRow.querySelector(".btn-delete");
  deleteButtons.onclick = () => newRow.remove();

  const likeButtons = newRow.querySelector(".btn-like");
  likeButtons.onclick = () => likeButtons.classList.toggle("selected");
  
}
