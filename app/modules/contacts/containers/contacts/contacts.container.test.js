import * as angular from 'angular';
import 'angular-mocks';
import ContactsContainer from './contacts.container';

describe('Contacts Container', () => {
  const _contactService = {
    getAllContacts: jasmine.createSpy('getAllContacts')
  };

  beforeEach(() => {
    angular
      .module('UTApp', [])
      .component('contacts', ContactsContainer)
      .value('ContactService', _contactService);
    angular.mock.module('UTApp');
  });

  it('should exist', angular.mock.inject($componentController => {
    const component = $componentController('contacts', {}, {});

    expect(component).toBeDefined();
  }))

  it('should call `contactService.getAllContacts` on init', angular.mock.inject(($componentController, ContactService, $q) => {
    const component = $componentController('contacts', {}, {});
    _contactService.getAllContacts.and.returnValue($q.resolve());
    component.$onInit();

    expect(ContactService.getAllContacts).toHaveBeenCalled();
  }))

});