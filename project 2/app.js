(function() {
    angular.module('app', [])
        .controller('appctl', AppCtl);

    var shoppingList = [
        { name: 'Cookie', quantity: 10 },
        { name: 'Chocolate', quantity: 5 },
        { name: 'Ice Cream', quantity: 7 },
        { name: 'Dog shit', quantity: 1000 },
        { name: 'Cat food', quantity: 50 }
    ];

    AppCtl.$inject = ['$scope'];

    function AppCtl($scope) {
        $scope.shoppingList = shoppingList;
        $scope.boughtList = [];
        $scope.buyItem = function(index) {
            $scope.boughtList.push($scope.shoppingList.splice(index, 1)[0]);
        };
    }
})();