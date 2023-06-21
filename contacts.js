// contacts.js
const fs = require('fs/promises');
const path = require("path");

//  Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "db", "contacts.json");
// console.log(contactsPath);
// TODO: задокументувати кожну функцію
// async function listContacts() {
//     const contactsTxt = await fs.readFile(contactsPath, 'utf8');
//     console.log(contactsTxt)
//   }
async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  console.log(JSON.parse(contacts))
}
listContacts();
  
  function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
  function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
  }
  module.exports ={
    listContacts
  }