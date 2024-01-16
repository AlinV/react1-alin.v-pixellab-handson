import contacts from './data.js';

const caseSensitiveCheckbox = document.querySelector('.case-sensitive');
let caseSensitiveSearch = false;

caseSensitiveCheckbox.addEventListener('change', () => {
  caseSensitiveSearch = caseSensitiveCheckbox.checked;
});

export const findContact = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    // [1, 'Carol', 'Carolson', '074..',...., []]
    const values = Object.values(contact).filter((part) => {
      return typeof part === 'number' || typeof part === 'string';
    });

    needle = caseSensitiveSearch ? needle : needle.toLowerCase();

    const found = values.find((value) => {
      if (typeof value === 'string') {
        return caseSensitiveSearch
          ? value.includes(needle)
          : value.toLowerCase().includes(needle);
      }
      return false;
    });

    return !!found;
  });

  return results;
};

// delete contact
export const deleteContact = (contactId) => {
  contactId = parseInt(contactId);

  if (!contactId || isNaN(contactId)) {
    return;
  }

  const contactIndex = contacts.findIndex((contact) => {
    const { id } = contact;

    return contactId === id;
  });

  const userChoise = confirm('Doriti sa stergeti contactul?');

  if (!userChoise) {
    return false;
  }

  if (contactIndex >= 0) {
    // splice mutates
    contacts.splice(contactIndex, 1);
    return true;
  }

  return false;
};

// asta era o alta abordare a primei cerinte, pe care nu am terminat-o
// const body = document.querySelector('.body');
// body.style.height = '100vh';
// const userChoice = document.createElement('div');
// userChoice.classList.add(
//   'border',
//   'border-2',
//   'border-secondary',
//   'bg-warning-subtle',
//   'position-absolute',
//   'p-3',
//   'rounded-2',
//   'w-50',
// );
// userChoice.style.top = '50%';
// userChoice.style.left = '50%';
// userChoice.style.transform = 'translate(-50%, -50%)';
// userChoice.innerHTML = `
// <p class = "fs-5">Doriti sa stergeti contactul?</p>
// <button type = "button" class = "btn btn-danger btn-delete">Ok</button>
// <button type = "button" class = "btn btn-secondary btn-cancel">Cancel</button>
// `;

// body.append(userChoice);

export const addContact = (contact) => {
  // push mutates
  contacts.push(contact);
};

// get contact (by id)
export const getContact = (contactId) => {
  contactId = Number(contactId);

  return contacts.find((contact) => {
    const { id } = contact;

    return id === contactId;
  });
};

// editContact
export const editContact = (contact) => {
  const existingContact = getContact(contact.id);

  const contactProperties = Object.keys(existingContact);

  for (let i = 0; i < contactProperties.length; i++) {
    const propertyName = contactProperties[i];

    existingContact[propertyName] =
      contact[propertyName] || existingContact[propertyName];
  }
};

// get pet
export const getPet = (contactId, petId) => {
  petId = Number(petId);

  const contact = getContact(contactId);

  return contact.pets.find((pet) => {
    const { id } = pet;

    return id === petId;
  });
};

// delete pet
export const deletePet = (contactId, petId) => {
  petId = parseInt(petId);
  const contact = getContact(contactId);

  const petIndex = contact.pets.findIndex((pet) => {
    const { id } = pet;

    return petId === id;
  });

  const userChoise = confirm('Doriti sa stergeti petul?');

  if (!userChoise) {
    return false;
  }

  if (petIndex >= 0) {
    contact.pets.splice(petIndex, 1);
    return true;
  }

  return false;
};

// edit pet

export const editPet = (contactId, pet) => {
  const petId = pet.id;
  const existingPet = getPet(contactId, petId);

  const petProperties = Object.keys(existingPet);

  for (let i = 0; i < petProperties.length; i++) {
    const propertyName = petProperties[i];

    existingPet[propertyName] = pet[propertyName] || existingPet[propertyName];
  }
};

// addPet
export const addPet = (contactId, pet) => {
  const contact = getContact(contactId);
  contact.pets = contact.pets || [];

  // push mutates
  contact.pets.push(pet);
};
