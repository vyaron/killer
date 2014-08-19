module.exports = ['$scope', 'killerService', '$state',
    function($scope, killerService, $state) {

        /* set the winner */

        $scope.winner = killerService.winner;

        $scope.newGame = function() {
            killerService.newGame();
            $state.go('killer');
        }

        $scope.newGameWithSamePlayers = function() {
           var players = killerService.getPlayersFromSession();


            angular.forEach(players, function(val) {
                val.killed = false;
            });

            killerService.setPlayersToSession(players);
            $state.go('set-players');
        }
    }
];