import * as fs from 'fs';

const dataset = {};

// Prepare data for CSV
let data = '';
dataset.results.forEach((item, index) => {
    data += `"${item.automatedTestStorage.replace('"', '""')}","${item.testCaseTitle.replace('"', '""')}"\n`;
});

// Write data to CSV file
fs.writeFile('failing-test-cases.csv', data, (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File written successfully');
    }
});
