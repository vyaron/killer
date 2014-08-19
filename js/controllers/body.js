module.exports = ['$scope','killerService',
    function($scope,killerService) {

        var lang = killerService.getLang();
        if(lang == 1) {
            var direction = 'rtl';
        }else {
            var direction = 'ltr';
        }

        $scope.myStyle={'direction':direction};

        $scope.$on('changeLan', function(e,lang) {
            if(lang == 'he') {
                $scope.myStyle={'direction':'rtl'};
            }else {
                 $scope.myStyle={'direction':'ltr'};
            }
        });
    }
]