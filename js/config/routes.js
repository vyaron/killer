module.exports = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("killer");

    $stateProvider
        .state('killer', {
            url: "/killer",
            controller: 'homeController',
            templateUrl: "views/main.html"
        })
        .state('set-players', {
            url: '/set-players',
            controller: 'playersController',
            templateUrl: "views/set-players.html"
        })
        .state('revealing-names', {
            url: '/revealing-names',
            controller: 'revealingNamesController',
            templateUrl: "views/revealing-names.html"
        })
        .state('revealing-tasks', {
            url: '/revealing-tasks',
            controller: 'revealingTasksController',
            templateUrl: "views/revealing-tasks.html"
        })
        .state('game-on', {
            url: '/gameon ',
            controller: 'gameOnController',
            templateUrl: "views/game-on.html"
        })
        .state('game-over', {
            url: '/game-over ',
            controller: 'gameOverController',
            templateUrl: "views/game-over.html"
        });
}