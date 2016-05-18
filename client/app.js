angular.module('clickReleased', [
  'clickReleased.search',
  'clickReleased.alternatives',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
  // .when('/', {
  //   templateUrl: 'index.html',
  //   controller: 'SearchController'
  // })
  .when('/alternatives', {
    templateUrl: 'alternatives/alternatives.html',
    controller: 'AlternativesController'
  })
  // .when('/search', {
  //   templateUrl: 'search/search.html',
  //   controller: 'SearchController'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // })
})