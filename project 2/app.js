(function() {
    angular.module('app')
        .controller('appctl', AppCtl);

    var shoppingList = [
        { name: Cookie, quantity: 10 },
        { name: Chocolate, quantity: 5 }
    ];

    AppCtl.$inject = [];

    function AppCtl() {
        this.shoppingList = shoppingList;
    }
})();