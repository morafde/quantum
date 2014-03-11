
'use strict';
angular.module('quantum.layout',['ui.router'])
    .controller('HeaderController',['$scope',function($scope){
    $scope.me=this;
}])
    .controller('FooterController',['$scope','$window',function($scope,$window){
        $scope.me=this;
        $scope.toTop=function(){
            console.log('Scroll to top clicked');
            $window.scrollTo(0);
        }
    }]);