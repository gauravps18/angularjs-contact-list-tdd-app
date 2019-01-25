function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      parent: 'app',
      url: '/app/home',
      //templateUrl: './home/view.html',
      component: 'homeComponent'
    })
    .state('add-contact', {
      parent: 'app',
      url: '/app/add-contact',
      //templateUrl: require('./add-contact/view.html'),
      component: 'addContactComponent'
    });
    
  $urlRouterProvider.otherwise('/app/home');

  $locationProvider.html5Mode(true);
}

export default routeConfig;