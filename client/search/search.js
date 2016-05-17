angular.module('clickReleased.search', [])

.controller('SearchController', function($scope, $http) {
  $scope.master= {};
  $scope.entity;
  $scope.update = function (link) {

    // $http({
    //   method: 'POST',
    //   url: '/',
    //   data: {link: link}
    // })
    // .then(function success(response) {
    //   console.log(response);
    // })
    // .catch(function error() {
    //   console.log('error');
    // });

    $scope.master = angular.copy(link);
    var data = {url: link};
    // console.log(link);
    $http.post("/", data).then(function successCb(response) {
      //load new view
      //return manuplated object
      $scope.entity = response;
      console.log(response);
    }, function errorCB(response) {
      console.log('didnt work', response);
    }); 
  };

  $scope.url= {
    url: "http://buzzfeed.com"
    //callExternal using the url
  };

  // $scope.$watch('clicksearch', function() {
  //   fetch();
  // });

  // $scope.search = "Test";
  // $scope.verifyScore = 1;
  // $scope.related = "More valid resource";

  // function fetch() {
  //   $http.get(); 
  //   //call services function?
  // }

});