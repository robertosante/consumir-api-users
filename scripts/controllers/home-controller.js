(function() {

	'use strict';

	angular.module('angularApi')

	.controller('HomeController', ['HomeFactory', function (HomeFactory) {

		var vm = this;

		vm.users = [];

		HomeFactory.getUsers()
		.then(function(data) {
			console.log(data.data);
			vm.users = data.data;
		});
	}]);


		
		


})();