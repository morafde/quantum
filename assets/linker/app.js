'use strict';

angular.module('quantum',
        [
            'ui.router',
            'ngAnimate',
            'ngSails',
            'quantum.layout',
            'quantum.about',
            'quantum.contact',
            'quantum.home',
            'quantum.services',
            'quantum.directives',
            'quantum.factories',
            'ui.bootstrap'
        ])
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
        $urlRouterProvider.otherwise("/home");
        $stateProvider
         .state('home', {
                url:'/home',
                templateUrl: 'linker/modules/home/home.html',
                controller: 'HomeController'
         })
            .state('contact', {
                url:'/contact',
                templateUrl: 'linker/modules/contact/contact.html',
                controller: 'ContactController'
            })
            .state('about', {
                url:'/about',
                templateUrl: 'linker/modules/about/about.html',
                controller: 'AboutController'
            })
            .state('services', {
                url:'/services',
                templateUrl: 'linker/modules/services/services.html',
                controller: 'ServicesController'
            });

    }]);
