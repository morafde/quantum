'use strict';
angular.module('quantum.about', [])
    .controller('AboutController',['$scope',function($scope) {
        $scope.about ='This is a sample text from the AboutController';
    }]);
