(function() {
    'use strict';

    angular.module('LunchChecker', [])

    .controller('LCCtl', ['$scope', function($scope) {
        $scope.message = "";
        $scope.lunch_menu = "";
        $scope.color = "black";
        $scope.checkLunch = function() {
            var lunch = $scope.lunch_menu;
            if (lunch == 0 || lunch.length == 0) {
                $scope.color = "red";
                $scope.message = "Please enter data first";
            } else {
                $scope.color = "green";
                lunch = lunch.trim().split(',');
                var count = 0;
                lunch.forEach(function(item) {
                    if (item != 0 && item.trim() != 0 && item.trim().length != 0)
                        count += 1
                });
                if (lunch.length <= 3)
                    $scope.message = "Enjoy!";
                else
                    $scope.message = "Too Much!";
            }
        };
    }]);
})();