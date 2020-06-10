var numArray = [];
for (i = 1; i <= 10; i++) numArray.push(i);
window.console && console.log("Number array: ", numArray);

var filteredNumArray = numArray.filter(function(value) {
    return value > 5;
});

window.console && console.log("Filtered Array: ", filteredNumArray);