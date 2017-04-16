'use strict';
angular.module('confusionApp', ['ngRoute'])
.config (function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
      .when ('/contactus', {
        templateUrl : 'contactus.html',
        controller : 'ContactController'
      })
      .when ('/menu', {
        templateUrl : 'menu.html',
        controller : 'MenuController'
      })
      .when ('/menu/:id', {
        templateUrl : 'dishDetail.html',
        controller : 'DishDetailController'
      })
      .otherwise ('/contactus');
})
;