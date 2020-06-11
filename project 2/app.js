(function() {
    angular.module('app', [])
        .controller('appctl', AppCtl);

    var shoppingList = [
        { name: 'Cookie', quantity: 10 },
        { name: 'Chocolate', quantity: 5 }
    ];

    AppCtl.$inject = ['$scope'];

    function AppCtl($scope) {
        $scope.shoppingList = shoppingList;
        $scope.boughtList = [];
        $scope.buyItem = function(index) {
            $scope.shoppingList.splice(index, 1);
        };
    }
})();