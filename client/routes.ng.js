angular.module("granite").config(function ($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$stateProvider
    .state('articles', {
      url: '/articles',
      templateUrl: 'client/articles/views/articles-list.ng.html',
      controller: 'ArticlesListCtrl'
    })
    .state('articlesDetails', {
      url: '/articles/:articleId',
      templateUrl: 'client/articles/views/articles-details.ng.html',
      controller: 'ArticlesDetailsCtrl'
    });

  $urlRouterProvider.otherwise("/articles");
});