angular.module('clickReleased', [
  'clickReleased.Search'
  ])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'client/index.html',
    controller: 'mainController'
  })
  .when('/search', {
    templateUrl: 'search/search.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})