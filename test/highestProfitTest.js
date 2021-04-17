let assert = require('assert');
let sinon = require('sinon');
let highestProfit = require('../highestProfit.js');

let testResult =  [
    {
        Year: '1990',
        Rank: '4',
        Company: 'D',
        'Revenue (in millions)': '20',
        'Profit (in millions)': '500'
    },
    {
        Year: '1990',
        Rank: '3',
        Company: 'C',
        'Revenue (in millions)': '20',
        'Profit (in millions)': '3'
    },
    {
        Year: '1921',
        Rank: '5',
        Company: 'E',
        'Revenue (in millions)': '2',
        'Profit (in millions)': '1'
    },
    {
        Year: '1990',
        Rank: '1',
        Company: 'A',
        'Revenue (in millions)': '10',
        'Profit (in millions)': '-2'
    }];

describe('#highestProfit', () => {
    let spy;

    it('should print 4', (done) => {
        spy = sinon.spy(console, 'log');

        highestProfit('./test/test.csv', () => {
            assert.strictEqual(spy.calledWith(4), true);
            spy.restore();
            done();
        })
    })

    it('should print 5', (done) => {
        highestProfit('./test/test.csv', () => {
            assert.strictEqual(spy.calledWith(5), true);
            spy.restore();
            done();
        })
    })

    it('should not print 6', (done) => {
        highestProfit('./test/test.csv', () => {
            assert.strictEqual(spy.calledWith(6), false);
            spy.restore();
            done();
        })
    })

    it('should print sorted data', (done) => {
        highestProfit('./test/test.csv', () => {
            assert.strictEqual(spy.calledWith(testResult), true);
            spy.restore();
            done();
        })
    })

})