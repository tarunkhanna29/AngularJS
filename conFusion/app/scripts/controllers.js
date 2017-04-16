'use strict';
angular.module('confusionApp').controller('MenuController', ['$scope', '$rootScope', 'menuFactory', function($scope, $rootScope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';

  $scope.showMenu = false;
  $scope.message = "Loading ...";
  /*$scope.dishes = [];

  menuFactory.getDishes()
    .then(
      function(res) {
        $scope.showMenu = true;
        $scope.dishes = res.data;
      },
      function (res) {
        $scope.message = "Error : " + res.status + " " + res.statusText;
      }
    );*/
  menuFactory.getDishes().query(
    function(res) {
      $scope.dishes = res;
      $scope.showMenu = true;
    },
    function(err) {
      $scope.message = "Error : " + err.status + " " + err.statusText;
    }
  );

  $scope.select = function(setTab) {
    $scope.tab = setTab;

    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } else if (setTab === 3) {
      $scope.filtText = "mains";
    } else if (setTab === 4) {
      $scope.filtText = "dessert";
    } else {
      $scope.filtText = "";
    }
  };

  $scope.isSelected = function(checkTab) {
    return ($scope.tab === checkTab);
  };

  $scope.toggleDetails = function() {
    $rootScope.showDetails = $rootScope.showDetails ? false : true;
  };

  $rootScope.showDetails = false;
}])

.controller("ContactController", ['$scope', function($scope) {
  $scope.feedback = {
    myChannel: "",
    email: ""
  }; //If feedback object is not initialized here, feedback object will e assigned to FeedbackController because in VIEW, feedback object is used with ng-model under FeedbackController though it is child of ContactController.
  $scope.channels = [{
    value: "tel",
    label: "Tel"
  }, {
    value: "email",
    label: "Email"
  }];
  $scope.invalidChannelSelection = false;
}])

.controller("FeedbackController", ['$scope', function($scope) {
  $scope.sendFeedback = function() {
    if ($scope.feedback.agree && ($scope.feedback.myChannel == "") && !$scope.feedback.myChannel) {
      $scope.invalidChannelSelection = true;
    } else {
      $scope.invalidChannelSelection = false;
      $scope.feedback = {
        myChannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
      };
      $scope.feedbackForm.$setPristine();
    }
  }
}])

.controller('DishDetailController', ['$scope', 'menuFactory', '$stateParams', function($scope, menuFactory, $stateParams) {

  $scope.dish = {};
  $scope.showDish = false;
  $scope.message = "Loading ..."

  /*menuFactory.getDish(parseInt($stateParams.id, 10))
    .then(
      function(res) {
        $scope.showDish = true;
        $scope.dish = res.data;
      },
      function (err) {
        $scope.message = "Error : " + err.status + " " + err.statusText;
      }
    );*/
  $scope.dish = menuFactory.getDishes().get({
      id: parseInt($stateParams.id, 10)
    })
    .$promise.then(
      function(res) {
        $scope.dish = res;
        $scope.showDish = true;
      },
      function(err) {
        $scope.message = "Error : " + err.status + " " + err.statusText;
      }
    );;

  $scope.date = new Date();
  $scope.addComment = function() {
    var newObj = {
      rating: $scope.comment.stars,
      comment: $scope.comment.yourComments,
      author: $scope.comment.yourName,
      date: $scope.date
    };
    $scope.dish.comments.push(newObj);
    menuFactory.getDishes().update({id:$scope.dish.id}, $scope.dish);
    $scope.comment = {};
    $scope.addCommentForm.$setPristine();
    $scope.comment.stars = 5;
  };

}]);

;