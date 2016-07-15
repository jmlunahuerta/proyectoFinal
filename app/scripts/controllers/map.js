'use strict';

/**
 * @ngdoc function
 * @name proyectoFinalApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the proyectoFinalApp
 */
angular.module('proyectoFinalApp')
  .controller('MapCtrl', function ($scope) {
    $scope.map = {
    	 center: {
              latitude: 37.389092,
              longitude: -5.984459
            },
            zoom: 14
    }
  });
