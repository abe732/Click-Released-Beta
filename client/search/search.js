angular.module('clickReleased.search', [])

.controller('SearchController', function($scope, $http) {
  $scope.master= {};
  $scope.entity;
  $scope.update = function (link) {

  $scope.master = angular.copy(link);
  var data = {url: link};
  // console.log(link);
  //promisify and then do a .then
  // var a = new Promise ();
  $http.post("/", data).then(function successCb(response) {
    function biased() {
      if (response.type === "neutral") {
        $scope.entity = "Unbiased";
      }
      else {
        $scope.entity = "Biased " + response.data.type;
      }
    };

    biased();
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