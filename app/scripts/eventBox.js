
import React from 'react';
import $ from 'jquery';

import eventList from './eventList';
import eventForm from './eventForm';
import { API_URL2, POLL_INTERVAL } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    loadeventsFromServer: function() {
        $.ajax({
            url: API_URL2,
            dataType: 'json',
            cache: false,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             console.error(this.props.url, status, errorThrown.toString());
         }.bind(this));
    },
    handleEventSubmit: function(event) {
        var events = this.state.data;
        event.id = Date.now();
        var newevents = events.concat([event]);
        this.setState({data: newevents});
        $.ajax({
            url: API_URL2,
            dataType: 'json',
            type: 'POST',
            data: event,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             this.setState({data: events});
             console.error(API_URL2, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.loadeventsFromServer();
        setInterval(this.loadEventsFromServer, POLL_INTERVAL);
    },
    render: function() {
        return (
            <div className="eventBox">
                <h1>events</h1>
                <eventList data={this.state.data} />
                <eventForm onEventSubmit={this.handleEventSubmit} />
            </div>
        );
    }
});
