function contactRoutes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('contacts', {
      parent: 'app',
      url: '/contacts',
      component: 'contacts'
    })
    .state('add-contact', {
      parent: 'app',
      url: '/add-contact',
      component: 'addContact'
    });
}

export default contactRoutes;