angular.module("granite").controller("ArticlesListCtrl", function ($scope, $meteor) {
  $scope.articles = $meteor.collection(Articles);

  $scope.remove = function (article) {
    $scope.articles.splice($scope.articles.indexOf(article), 1);
  };

  $scope.removeAll = function () {
    $scope.articles.remove();
  };
});