var React = require('react');
var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused': 
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000)
    },
    // handleSetStart: function (newStatus) {
    //     this.setState({
    //         countdownStatus: newStatus
    //     })
    // },
    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    render: function () {
        var {count, countdownStatus} = this.state;
        
        // var renderControlArea = () => {
        //     if (countdownStatus !== 'stopped') {
        //         return <Controls countdownStatus = {countdownStatus} onStatusChange = {this.handleStatusChange}/>
        //     } else {
        //         return <TimerForm onStartCount = {this.handleSetStart}/>
        //     }
        // }

        return (
            <div>
                <h1 className = "page-title">Timer App</h1>
                <Clock totalSeconds = {count}/>
                <Controls countdownStatus = {countdownStatus} onStatusChange = {this.handleStatusChange} />
            </div>
        )   
    }
});

module.exports = Timer;

