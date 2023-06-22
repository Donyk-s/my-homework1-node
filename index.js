console.log('Hello World')
const Сontacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await Сontacts.listContacts();
      console.table(allContacts);
      break;

    case 'get':
      const getOneContactById = await Сontacts.getContactById(id);
      console.log(getOneContactById);
      break;

    case 'add':
      const addContact = await Сontacts.addContact({ name, email, phone });
      console.log(addContact);
      break;

    case 'remove':
      const removeContactById = await Сontacts.removeContact(id);
      console.log(removeContactById);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

// invokeAction({ action: 'list'})
// invokeAction({ action: 'get', id: 'C9sjBfCo4UJCWjzBnOtxl'})
// invokeAction({ action: 'add', name: 'Grygory', email: 'grygory@gmail.com', phone: '(063) 728-4889' })
// invokeAction({ action: 'remove', id: "8lv6ClDxcJ_VXAh1TIrxW" })
// node index.js --action='list'
