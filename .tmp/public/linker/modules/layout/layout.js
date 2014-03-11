
'use strict';
angular.module('quantum.layout',['ui.router'])
    .controller('HeaderController',['$scope',function($scope){
    $scope.me=this;
}])
    .controller('FooterController',['$scope',function($scope){
        $scope.me=this;
    }]);