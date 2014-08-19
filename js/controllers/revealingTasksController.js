module.exports = ['$scope', '$state', 'killerService',
    function($scope, $state, killerService) {

        $scope.player =  killerService.getCurrentPlayerFromSession();

        $scope.nextTask = false;

        /* update the player to the player that he killed task */

        $scope.playerKilled = function() {

            var players = killerService.getPlayersFromSession();

            $scope.theKilledPlayer = _.find(players, {
                'name': $scope.player.nameToKill
            });


            $scope.theKilledPlayer.killed = true;

            /* reference to the player to change his task in session storage */

            $scope.refToPlayer = _.find(players, {
                'name': $scope.player.name
            });


            $scope.refToPlayer.nameToKill = $scope.theKilledPlayer.nameToKill;

            $scope.refToPlayer.word = $scope.theKilledPlayer.word;

            $scope.player = $scope.refToPlayer;


            /* save the changes to sessionStorage */

            killerService.setPlayersToSession(players);


            if ($scope.player.name == $scope.player.nameToKill) {

                killerService.setWinner($scope.player);

                $state.go('game-over');

            } else {

                $scope.nextTask = true;
            }
        }

    }
];