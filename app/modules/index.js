import angular from 'angular';

import coreModule from './core/core.module'
// import homeModule from './home/home.module'
// import addContactModule from './add-contact/add-contact.module'
import contactModule from './contacts/contact.module'

const appModule = angular.module('app', [
  coreModule,
  contactModule
  // homeModule,
  // addContactModule
])
  .name;

export default appModule;