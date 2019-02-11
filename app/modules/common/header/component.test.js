import * as angular from 'angular';
import 'angular-mocks';
import HeaderComponent from './component';

describe('Header Component', () => {
  beforeEach(() => {
    angular
      .module('UTApp', [])
      .component('headComponent', HeaderComponent);
    angular.mock.module('UTApp');
  })
  it('should exist', angular.mock.inject($componentController => {
    const component = $componentController('headComponent', {}, {});
    expect(component).toBeDefined();
  }))
})