import angular from 'angular';

import HomeComponent from './component'

import homeRoutes from './home.routes'

const homeModule = angular.module('app.home', [
  'ui.router'
])

  .component('home', HomeComponent)
  .config(homeRoutes)
  .name;

export default homeModule;