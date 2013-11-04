'use strict';

/* Controllers */

var showsControllers = angular.module('showsControllers', []);

showsControllers.controller('ShowsListCtrl', ['$scope', 'TvShows',
  function($scope, TvShows) {
    $scope.shows = TvShows.query();
    $scope.orderProp = 'showid';
  }]);

var UserCtrl = angular.module('UserCtrl', []);

UserCtrl.controller('UserCreateCtrl', ['$scope', 'users',
  function($scope, users){
  	$scope.message = users.err;
  }]);

var LoginUserCtrl = angular.module('LoginUserCtrl', []);

LoginUserCtrl.controller('LoginCtrl', ['$scope']);

