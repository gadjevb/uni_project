var app = angular.module('romeApp');

app.controller('questionsCtrl', function($scope, $http) {
  $http.get("questions/questions.json")
    .then(function(response) {
      $scope.questions = response.data.questions;
    });
});
