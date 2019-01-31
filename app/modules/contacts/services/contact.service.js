import Assert from 'assert-js';

class ContactService {
  constructor($q) {
    'ngInject';
    this.contacts = [{
      firstName: 'Gaurav',
      lastName: 'Sali',
      mobile: '+91 8698951987',
      email: 'gauravps18@gmail.com',
      company: 'GS Lab Pvt. Ltd.',
      designation: 'Senior Sofware Engineer'
    },{
      firstName: 'Suraj',
      lastName: 'Gangawane',
      mobile: '+91 9551886686',
      email: 'surajgangawane04@gmail.com',
      company: 'Atos Pvt. Ltd.',
      designation: 'Senior Sofware Engineer'
    }];
    this.$q = $q
  }

  getAllContacts() {
    return this.$q.resolve(this.contacts);
  }

  addContact(data) {
    Assert.hasProperty('firstName', data);
    Assert.hasProperty('lastName', data);
    data['id'] = (this.contacts.length + 1) * 100;
    this.contacts.push(data);
  }

  removeContact(id) {
    Assert.number(id);
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

export default ContactService;