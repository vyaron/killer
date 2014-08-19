module.exports = ['$scope', '$state', 'killerService', 'webStorage',
    function($scope, $state, killerService, webStorage) {

        $scope.players = killerService.getPlayersFromSession() || [];

        /* Generate the input Names */
        if ($scope.players.length == 0) {

            for (var i = 0; i < killerService.numPlayers; i++) {
                $scope.players.push({
                    name: '',
                    killed: false,
                    nameToKill: '',
                    word: ''
                })
            }
        }


        /* Add input */

        $scope.addPlayer = function() {
            $scope.players.push({
                name: '',
                killed: false,
                nameToKill: '',
                word: ''
            });
        }


        /* Get the players names and set the players */

        $scope.doneGetPlayersNames = function() {

            $scope.players = _.remove($scope.players, function(val) {
                return !val.name == '';
            });


            $scope.suffledPlayers = _.shuffle($scope.players);

            $scope.spinner = true;

            var numPlayers = $scope.suffledPlayers.length - 1;
            for (var i = 0; i <= numPlayers; i++) {
                var word = killerService.words.pop();
                var nameToKillIndex = 0;
                if (i < numPlayers) {
                    nameToKillIndex = i + 1;
                }
                $scope.suffledPlayers[i].word = word;
                $scope.suffledPlayers[i].nameToKill = $scope.suffledPlayers[nameToKillIndex].name;
            }

           killerService.setPlayersToSession($scope.suffledPlayers);

            setTimeout(function() {
                $state.go('revealing-names');
            }, 2000)

        }

    }
];