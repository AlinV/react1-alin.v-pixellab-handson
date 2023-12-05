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

export const deleteContact = (contactId) => {
  contactId = parseInt(contactId);

  if (!contactId || isNaN(contactId)) {
    return;
  }

  const contactIndex = contacts.findIndex((contact) => {
    const { id } = contact;

    return contactId === id;
  });

  if (contactIndex >= 0) {
    // splice mutates
    contacts.splice(contactIndex, 1);
  }
};
