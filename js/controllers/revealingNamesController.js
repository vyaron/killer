module.exports = ['$scope', '$state', 'killerService',
    function($scope, $state, killerService) {

        /* dealing with hide/show what i need */

        $scope.showInfo = true;

        $scope.showPlayerName = false;

        $scope.displayTask = false;

        $scope.revealingNames = function() {
            $scope.showPlayerName = true;
            $scope.showInfo = false;
        }

        $scope.showTask = function() {
            $scope.showPlayerName = false;
            $scope.displayTask = true;
        }

        $scope.showPlayerTask = function() {
            $scope.displayTask = true;
            $scope.showPlayerName = false;
        }

        $scope.players = killerService.getPlayersFromSession();

        /* set the player to the current player */

        $scope.playerId = 0;
        $scope.player = $scope.players[$scope.playerId];


        /* show task to each player in loop */

        $scope.nextPlayerTask = function() {

            var numPlayers = $scope.players.length;

            $scope.playerId++;
            if (numPlayers == $scope.playerId) {

                $state.go('game-on');

            } else {

                $scope.displayTask = false;
                $scope.showPlayerName = true;
            }
        }


        /* watch on the player id to update the scope of current player */

        $scope.$watch('playerId', function(playerId) {
            $scope.player = $scope.players[playerId];
        })


    }
];