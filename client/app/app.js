'use strict';

/* App Module */

var shows = angular.module('shows', ['ngRoute','showsControllers','showsFilters', 'showsServices','UserCtrl','LoginUserCtrl','userServices']);

shows.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'static/resources/html/tvshows-list.html',   controller: 'ShowsListCtrl'}).
      when('/tvshows', {templateUrl: 'static/resources/html/tvshows-list.html',   controller: 'ShowsListCtrl'}).
      when('/login', {templateUrl: 'static/resources/html/login.html',  controller: 'LoginCtrl'}).
      when('/register', {templateUrl: 'static/resources/html/create.html',  controller: 'UserCreateCtrl'}).
      otherwise({redirectTo: '/tvshows'});
}]);