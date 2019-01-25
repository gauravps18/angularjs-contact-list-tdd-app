import * as angular from 'angular';
import '@uirouter/angularjs';
import routes from './routes'
import AppComponent from './app/component'
import HomeComponent from './home/component'
import AddContactComponent from './add-contact/component'

export const app = angular.module('contactApp', [
  'ui.router'
])
  .component('app', AppComponent)
  .component('homeComponent', HomeComponent)
  .component('addContactComponent', AddContactComponent)
  .config(routes)
  .run(() => {
  });

export default app;