angular.module("granite").controller("ArticleDetailsCtrl", function ($scope, $stateParams, $meteor) {
  $scope.article = $meteor.object(Articles, $stateParams.articleId).subscribe('articles');
});
