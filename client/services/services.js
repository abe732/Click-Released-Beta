angular.module('clickReleased.services', [])

.factory('Links', function ($http) {
  // Your code here
  var apiKey = "YOUR_KEY_HERE";
  var baseUrl = "http://gateway-a.watsonplatform.net/calls";
  var keywords = "/url/URLGetRankedKeywords";
  var entityID = "/requireEntities=1";
  var sentiment = "/url/URLGetTargetedSentiment";
    //enriched.url.docSentiment.type=positive
  var newsMine = "/data/GetNews?outputMode=json";

  // http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/gs-quick-nodejs.shtml
  // http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/gs-tokens.shtml
  var callExternal = function() {
    return $http({
      method: 'GET',
      url: baseUrl + newsMine + "&apikey=" + apiKey,
      data: data
      //title: need to get the keyword to find in title
      //body: keyword
    });
  };
  //   .then
  // };

  var processData = function () {
    //need to write logic for the JSON object to roll up into a score
      //binary sentiment match with original article
      //relations strength
      //publication stature
      //number of articles
    //$scope.verifyScore = 0 or 1
  };

  var suggestAlt = function () {

  };

  var addLinks = function(data) {
    //need
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