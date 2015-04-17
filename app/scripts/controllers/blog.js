'use strict';

/**
 * @ngdoc function
 * @name bloggerApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the bloggerApp
 */
angular.module('bloggerApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
