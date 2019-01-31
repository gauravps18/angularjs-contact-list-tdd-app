import './component.scss'

class AddContactController {
  constructor($state) {
    'ngInject';
    this.form = {};
    this.$state = $state;
  }

  reset() {
    this.form = {};
  }

  addContact() {
    if (!this.contactForm.$valid)
      return;
    this.onClick({
      $event: {
        contact: {
          ...this.form, 
          mobile: `+91 ${this.form.mobile}`
        }
      }
    });
    this.$state.go('contacts');
  }
}

const AddContactComponent = {
  bindings: {
    onClick: '&'
  },
  template: require('./template.html'),
  selector: 'addContactForm',
  controller: AddContactController
};

export default AddContactComponent;