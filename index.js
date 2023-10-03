"use strict";
exports.__esModule = true;
var fs = require("fs");
var dataset = {};
// Prepare data for CSV
var data = '';
dataset.results.forEach(function (item, index) {
    data += "\"".concat(item.automatedTestStorage.replace('"', '""'), "\",\"").concat(item.testCaseTitle.replace('"', '""'), "\"\n");
});
// Write data to CSV file
fs.writeFile('failing-test-cases.csv', data, function (err) {
    if (err) {
        console.log('Error writing file:', err);
    }
    else {
        console.log('File written successfully');
    }
});
