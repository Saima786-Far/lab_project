// columnFilter.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    var columnSelector = document.getElementById('columnSelector');

    // Add an event listener for changes in the select element
    columnSelector.addEventListener('change', function () {
        // Get the selected option value
        var selectedColumn = columnSelector.value;
        console.log("script is working");

        // Hide all table headers and cells
        document.querySelectorAll('.table th, .table td').forEach(function (element) {
            element.style.display = 'none';
        });
		console.log("Hide not required columns");
        // Show only the selected column headers and cells
        document.querySelectorAll('.table th.' + selectedColumn + ', .table td.' + selectedColumn).forEach(function (element) {
            element.style.display = '';
        });
    });
});
