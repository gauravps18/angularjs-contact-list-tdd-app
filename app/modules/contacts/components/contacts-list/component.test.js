import * as angular from 'angular';
import 'angular-mocks';
import ContactList from './component';

describe('ContactList Component', () => {
  beforeEach(() => {
    angular
      .module('UTApp', [])
      .component('contactList', ContactList)
    angular.mock.module('UTApp');
  })

  it('should exist', angular.mock.inject($componentController => {
    const component = $componentController('contactList', {}, {});

    expect(component).toBeDefined();
  }))
});