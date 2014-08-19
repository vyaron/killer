module.exports = ['$scope', '$state', 'killerService','$translate',
    function($scope, $state, killerService,$translate) {

        var lang = killerService.getLang();
        if(lang == 1) {
            var direction = 'he';
        }else {
            var direction = 'en';
        }
        $scope.enLang = direction;




        $scope.changeLang = function(lang,t) {
            $scope.$emit('changeLan', lang);
            killerService.setLang(t);
            $scope.enLang = lang;
            killerService.changeWordsLang(lang);
            $translate.use(lang);
        }



        /* set the number of players */

        $scope.setNumberPlayers = function() {

            if($scope.numPlayers < 3) {

                $scope.formInvalid = true;
            }
            else {

                killerService.setNumberPlayers($scope.numPlayers);

                $state.go('set-players');
            }


        }
    }
];