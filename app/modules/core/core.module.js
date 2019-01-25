import angular from 'angular'

// Import modules Components.
import AppComponent from './app/app.component';
import RootComponent from './root/root.component';

// Import modules Configurations.
import Configurations from './core.config';
import CoreRoutes from './core.routes';

const coreModule = angular.module('app.core',[
  'ui.router'
])

// Register Module Components.
  .component('app', AppComponent)
  .component('root', RootComponent)

// Register Module Configuration.
  .config(Configurations)
  .config(CoreRoutes)
  .name;

export default coreModule;

