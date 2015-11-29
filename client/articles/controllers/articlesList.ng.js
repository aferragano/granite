angular.module("granite").controller("ArticlesListCtrl", function ($scope, $meteor) {
  $scope.articles = $meteor.collection(Articles);

  $("#create-article").hide();
  $("#btn-add-article").on("click", function(){
  	$("#create-article").show();
  })
  $("#close-form").on("click", function(){
  	$("#create-article").hide();
  })

  $scope.remove = function (article) {
    $scope.articles.splice($scope.articles.indexOf(article), 1);
  };

  $scope.removeAll = function () {
    $scope.articles.remove();
  };
});