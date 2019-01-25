function homeRoutesConfig($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      parent: 'app',
      url: '/home',
      component: 'home'
    });
}

export default homeRoutesConfig;