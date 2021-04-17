let assert = require('assert');
let sinon = require('sinon');
let highestProfit = require('../highestProfit.js');

describe('#highestProfit', () => {
    let spy;

    it('should print 4', (done) => {
        spy = sinon.spy(console, 'log');

        highestProfit('./test/test.csv', () =>{
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
})