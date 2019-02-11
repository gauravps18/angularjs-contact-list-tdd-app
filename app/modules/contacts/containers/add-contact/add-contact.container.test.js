import * as angular from 'angular';
import 'angular-mocks';
import AddContactContainer from './add-contact.container';

describe('AddContact Container', () => {
  beforeEach(() => {
    const ContactService = {
      addContact: jasmine.createSpy('addContact')
    };

    const $state = {
      go: jasmine.createSpy('go')
    };

    angular
      .module('UTApp', [])
      .component('addContact', AddContactContainer)
      .value('ContactService', ContactService)
      .value('$state', $state);

    angular.mock.module('UTApp');
  });

  it('should exist', angular.mock.inject($componentController => {
    const component = $componentController('addContact', AddContactContainer)

    expect(component).toBeDefined();
  }));

  it('should call `ContactService.addContact` when adding', angular.mock.inject(addContact));

});

function addContact($componentController, ContactService) {
  const component = $componentController('addContact', AddContactContainer);
  const data = {
    firstName: 'Swapnil',
    lastName: 'Bankar',
    mobile: '+91 8669895198',
    email: 'swap.ban@gslab.com',
    company: 'GS Lab Pvt. Ltd.',
    designation: 'Chief Executive Officer'
  };
  component.add(data);

  expect(ContactService.addContact).toHaveBeenCalledWith(data);
}