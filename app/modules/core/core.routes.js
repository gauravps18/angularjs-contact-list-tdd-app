function coreRoutesConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      component: 'app'
    });

  $urlRouterProvider.otherwise('/app/contacts');

  //$locationProvider.html5Mode(true);
}

export default coreRoutesConfig;