var app = angular.module('romeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'view/index_page.view.html'
  })
  .when('/sevenkings', {
    templateUrl: 'view/sevenkings_page.view.html'
  })
  .when('/republic', {
    templateUrl: 'view/republic_page.view.html'
  })
  .when('/empire', {
    templateUrl: 'view/empire_page.view.html'
  })
  .when('/empirewest', {
    templateUrl: 'view/empirewest_page.view.html'
  })
  .when('/empireeast', {
    templateUrl: 'view/empireeast_page.view.html'
  })
  .when('/army', {
    templateUrl: 'view/army_page.view.html'
  })
  .when('/quiz', {
    templateUrl: 'view/quiz_page.view.html'
  })
  .when('/devinfo', {
    templateUrl: 'view/devinfo_page.view.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
