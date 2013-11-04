'use strict';

/* Services */

var showsServices = angular.module('showsServices', ['ngResource']);

showsServices.factory('TvShows', ['$resource',
  function($resource){
    return $resource('/shows');
  }]);


var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('users', ['$resource',
  function($resource){
  	console.log('hola1 ');
    return $resource('/create');
  }]);

