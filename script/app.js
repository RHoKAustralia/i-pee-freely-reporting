var app = angular.module ('reportingToolModule', []);

app.controller ('reportingToolCtrl', function ($scope, $http) {
  $scope.sortType = 'overallRating'
  $scope.sortReverse  = true;  // set the default sort order
  $scope.feedbackForms = [];
  $scope.hashtag = '';
  $scope.messageType = '';

  $scope.messageOptions = [
    {
      "value": 'fb',
      "label": 'Feedback'
    },
    {
      "value": 'co',
      "label": 'Complaint'
    },
    {
      "value": 'nl',
      "label": 'New location'
    }
  ];

  $scope.tagUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://twitter.com/intent/tweet?hashtags=';
  $scope.tagUrl2 = '&via=changingplaces';

  $scope.getFeedbackForms = function () {
    var isCollapsed = document.getElementById("feedbackArea").className;
    if (isCollapsed === "collapse") {
      // alert("connecting...");
      $http.get("http://localhost:3000/api/feedback")
          .then(function (response) {
            $scope.feedbackForms = response.data;
          });
    }
  };

  $scope.deleteFeedback = function (index) {
    alert (index);
  };

  $scope.getRequestedLocations = function () {
    $scope.requestedLocations = [];

    var isCollapsed = document.getElementById("reqLocationArea").className;
    if (isCollapsed === "collapse") {
      // alert("connecting...");
      $http.get("http://localhost:3000/api/locationRequest")
          .then(function (response) {
            $scope.requestedLocations = response.data;
          });
    }
  };

});
