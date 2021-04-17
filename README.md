# highest-profit

This app reads a CSV file and creates a JSON format data and looks for the highest profit values.

1. The CSV file "data.csv" will first print out the total number of rows of data in the CSV file.
Removes all rows of non-numerical values in the profit column and prints out the new number of rows.

2. Convert contents of part 1 into JSON format and write into a new file "data2.json".
Prints the top 20 rows of highest profits.

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

Run a test on test.csv to see if there is desired results.

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

