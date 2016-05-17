angular.module('clickReleased', [
  'clickReleased.search',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller: 'MainController'
  })
  .when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchController'
  })
  // .otherwise({
  //   redirectTo: '/'
  // })
})