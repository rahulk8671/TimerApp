var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange('started');
        
        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.countdownStatus).toBe('started');
            done();
        }, 1001)
    });
});