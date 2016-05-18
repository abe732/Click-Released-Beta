angular.module('clickReleased.alternatives', [
	'clickReleased.search'
	])

.controller('AlternativesController', function($scope, $http) {
	$scope.positive;
	$scope.neutral;
	$scope.negative;
});

//do the post requests to the server for:
	//1) positive article
	//2) neutral article
	//3) negative article

//link each article to button on html