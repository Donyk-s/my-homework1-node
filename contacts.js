// contacts.js
const fs = require('fs/promises');
const path = require("path");
const {nanoid} = require('nanoid');

//  Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
  console.log(JSON.parse(contacts))
}
listContacts();
  
  async function getContactById(contactId) {
    const contact = await listContacts()
    const result = contact.find(contact => contact.id === contactId)
    return result || null
  }
  
  async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  
    return removedContact;
  }
  
  
  async function addContact(data) {
    const contact = await listContacts()
    const newContact =  { 
      id: nanoid(),
      ...data
     }
     contact.push(newContact)
     await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
     return newContact
  }
  module.exports ={
    listContacts,
    getContactById,
    addContact,
    removeContact
  }