# highest-profit

This app reads a CSV file and creates a filtered JSON format data file and looks for the highest profit values.

1. The CSV file "data.csv" will be read and then print out the total number of rows of data in the CSV file.

Then removes all rows of non-numerical values in the profit column and prints out the new number of rows.

2. The program will then convert contents of part 1 into JSON format and write into a new file "data2.json".

Then prints the top 20 rows of highest profits.

## Technologies

- NodeJS

## Installation

Clone repo

```
git clone https://github.com/ryzhong/highest-profit.git
```

Install dependencies

```
npm install
```

## Inputs

The input will be a .csv file that contains finance data of companies.

```
data.csv
```

## Output

The output will be the filtered finance data in JSON format into a .json file.

```
data2.json
```

## Tests

Run a test with test.csv

```
npm test
```

## How to Use

```
bash run.sh
```

-or-

```
node app.js
```

