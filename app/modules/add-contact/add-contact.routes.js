function addContactRoutesConfig($stateProvider) {
  'ngInject';
  $stateProvider
    .state('add-contact', {
      parent: 'app',
      url: '/add-contact',
      component: 'add-contact'
    });
}

export default addContactRoutesConfig;