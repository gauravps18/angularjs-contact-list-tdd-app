class AddContactContainerController {
  constructor(ContactService) {
    'ngInject';
    this.ContactService = ContactService;
  }
  add(contact) {
    this.ContactService.addContact(contact);
  }
}

const AddContactContainer = {
  selector: 'addContact',
  template: require('./template.html'),
  controller: AddContactContainerController
}

export default AddContactContainer;