angular.module('clickReleased.search', [])

.controller('SearchController', function($scope, $http) {
  // $scope.link = {};
  $scope.$watch('clicksearch', function() {
    fetch();
  });

  $scope.search = "Test";
  $scope.verifyScore = 1;
  $scope.related = "More valid resource";

  function fetch() {
    $http.get() //call services function?
  }

});