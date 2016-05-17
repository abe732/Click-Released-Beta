angular.module('clickReleased.services', [])

.factory('Links', function ($http) {
  // Your code here

  var callExternal = function() {
    return $http({
      url: 'https://gateway-a.watsonplatform.net/'
      //title: need to get the keyword to find in title
      //body: keyword
    })
    .then
  };

  var processData = function () {
    //need to write logic for the JSON object to roll up into a score
      //binary sentiment match with original article
      //relations strength
      //publication stature
      //number of articles
  };

  var addLink = function(data) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: data
    })
    .then(function(resp) {
      return resp.data;
    })
  };

  // var getLinks = function() {
  // return $http({
  //   method: 'GET',
  //   url: '/api/links'
  //   // data: link
  //   })
  //   .then(function(resp) {
  //     return resp.data;
  //   })
  // };

  // var addLink = function(data) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: data
  //   })
  //   .then(function(resp) {
  //     return resp.data;
  //   })
  // };

  // return {
  //   getLinks: getLinks,
  //   addLink: addLink
  // }
})