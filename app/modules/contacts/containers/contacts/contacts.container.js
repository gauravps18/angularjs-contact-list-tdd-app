import './contacts.container.scss'

class ContactsController {
  constructor(ContactService) {
    'ngInject';
    this.contacts = [];
    this.ContactService = ContactService;
  }

  $onInit() {
    this.fetchData();
  }

  fetchData() {
    this.ContactService.getAllContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }

}

const ContactsContainer = {
  template: require('./template.html'),
  selector: 'contacts',
  controller: ContactsController
}

export default ContactsContainer;