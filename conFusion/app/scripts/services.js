'use strict';

angular.module('confusionApp')
	.constant ("baseURL", "http://localhost:4000/")
	.factory('menuFactory', ['$http','$resource' , 'baseURL', function($http, $resource, baseURL) {
		var menufac = {};
		menufac.getDishes = function() {
			//return $http.get (baseURL + "dishes");
			return $resource(baseURL + "dishes/:id", null, {'update' : {method : 'PUT'}});
		};
		/*menufac.getDish = function(index) {
			return $http.get (baseURL + "dishes/" + index);
		};*/
		return menufac;
	}]);