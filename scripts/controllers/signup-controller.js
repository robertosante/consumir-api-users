(function() {

	'use strict';

	angular.module('angularApi')
	.controller('SignupController', ['HomeFactory', function(HomeFactory) {
		
		var vm = this;

		var user = {};

		vm.createUser = function(user) {
			console.log(user);
			HomeFactory.createUser(user).then
				(function(data) {
					console.log(data.data);
				}) 
		};


	}]);

})();