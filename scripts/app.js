(function() {
	
	'use strict';

    angular.module('angularApi', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){

    	$stateProvider
    		.state('home', {
    			url: '/home',
    			templateUrl: 'views/templates/home.html',
    			controller: 'HomeController',
    			controllerAs: 'home'
    		})

            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
            });

    	$urlRouterProvider.otherwise('/home');


    });


})();