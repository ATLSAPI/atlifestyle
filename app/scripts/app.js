'use strict';

/**
 * @ngdoc overview
 * @name autoApp
 * @description
 * # autoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('autoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/smartsearch', {
        templateUrl: '../views/smartsearch.html',
        controller: 'smartsearchCtrl'
      })
      .when('/smartsearch/results', {
        templateUrl: '../views/results.html',
        controller: 'resultsCtrl'
      })
      .when('/smartsearch/results/:id', {
        templateUrl: '../views/details.html',
        controller: 'detailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
