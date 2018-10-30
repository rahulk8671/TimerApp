var React = require('react');

var TimerForm = React.createClass({
    
    handleStartTime: function (newStatus) {
        return () => {
            this.props.onStartCount(newStatus);
        }
    },
    render: function () {
        return (
            <div>
                <button className = "button expanded" onClick = {this.handleStartTime('started')}>Start</button>
            </div>
        )
    }
});

module.exports = TimerForm;