import './component.scss'

class ContactListController {
  constructor() {
    this.contacts = [];
  }
}

const ContactListComponent = {
  selector: 'contactList',
  template: require('./template.html'),
  bindings: {
    contacts: '<',
    contactRemoved: '&'
  },
  controller: ContactListController,
    
};

export default ContactListComponent;