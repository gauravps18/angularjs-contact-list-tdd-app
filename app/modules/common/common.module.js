import * as angular from 'angular';

import HeadComponent from './header/component';

const commonModule = angular.module('common.component', [])
  .component('headComponent', HeadComponent)
  .name;

export default commonModule;