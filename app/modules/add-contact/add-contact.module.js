import angular from 'angular';

import AddContactComponent from './component'

import AddContactRoutes from './add-contact.routes'

const addContactModule = angular.module('app.add-contact', [
  'ui.router'
])

  .component('add-contact', AddContactComponent)
  .config(AddContactRoutes)
  .name;

export default addContactModule;