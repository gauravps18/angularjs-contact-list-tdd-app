import 'angular';
import '@uirouter/angularjs';
import * as angular from 'angular';

import appModule from './modules';

/* eslint-disable */
const bootstrapApp = angular.module('contactApp', [
  appModule
])
  .name;