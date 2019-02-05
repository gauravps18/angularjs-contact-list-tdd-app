import * as angular from 'angular';
import 'angular-mocks';
import ContactService from './contact.service';

describe('Contact Service', () => {
  beforeEach(() => {
    angular
      .module('UTApp', [])
      .service('contactService', ContactService);
    angular.mock.module('UTApp');
  })

  it('should exist', angular.mock.inject(contactService => {
    expect(contactService).toBeDefined();
  }))
});