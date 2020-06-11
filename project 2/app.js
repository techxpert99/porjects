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
        $scope.buyItem = function(index) {
            console.log(index);
        };
    }
})();