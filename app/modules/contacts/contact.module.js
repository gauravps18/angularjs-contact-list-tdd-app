import * as angular from 'angular';

import ContactListComponent from './components/contacts-list/component';
import AddContactComponent from './components/add-contact/component';

import ContactsContainer from './containers/contacts/contacts.container';
import AddContactContainer from './containers/add-contact/add-contact.container';

import ContactService from './services/contact.service'

import ContactsRoutes from './contact.routes'

const contactModule = angular.module('app.contacts', [
  'ui.router'
])
  .component('contactList', ContactListComponent)
  .component('addContactForm', AddContactComponent)
  .component('contacts', ContactsContainer)
  .component('addContact', AddContactContainer)
  .service('ContactService', ContactService)
  .config(ContactsRoutes)
  .name;

export default contactModule;