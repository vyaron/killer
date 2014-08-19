module.exports = ['$scope', '$state', 'killerService',
    function($scope, $state, killerService) {

        $scope.players = killerService.getPlayersFromSession();

        /* show the confirmation div and set the scope to this player */

        $scope.setPlayer = function(player) {
            $scope.player = player;
        }

        /* hide the confirmation div */
        $scope.wrongPlayer = function() {
            $('.donePlayer').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        }

        /* player click on its me button and go to his task */
        $scope.itsMe = function() {
            $('.donePlayer').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            //killerService.setCurrentPlayer($scope.player);
            killerService.setCurrentPlayerToSession($scope.player);
            $state.go('revealing-tasks');
        }
        $scope.reset = function() {
            $scope.resetGame = true;
        }


        $scope.newGame = function() {
            killerService.newGame();
            $state.go('killer');
        }


        $scope.newGameSamePlayers = function() {

            var players = killerService.getPlayersFromSession();


            angular.forEach(players, function(val) {
                val.killed = false;
            });

            killerService.setPlayersToSession(players);

            $state.go('set-players');
        }
    }
];