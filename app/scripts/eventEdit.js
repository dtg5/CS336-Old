import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import { API_URL } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {title: '', startDate: '', endDate: '', description: ''};
    },
    componentDidMount: function() {
        this.loadData();
    },
    componentDidUpdate: function(prevProps) {
        if (this.props.params.id != prevProps.params.id) {
            this.loadData();
        }
    },
    loadData: function() {
        $.ajax(API_URL + "/" + this.props.params.id) .done(function(events) {
            this.setState(events[0]);
        }.bind(this));
    },
    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },
    handleDescriptionChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleStartDateChange: function(e) {
    this.setState({startDate: e.target.value});
    },
    handleEndDateChange: function(e) {
    this.setState({endDate: e.target.value});
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleUpdate: function() {
        var updatedEvent = {
            title: this.state.title.trim(),
            text: this.state.description.trim(),
            startDate: this.state.startDate.trim(),
            endDate: this.state.endDate.trim()
        }
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            dataType: 'json',
            type: 'PUT',
            contentType:'application/json',
            data: JSON.stringify(updatedEvent)
        })
            .done(function(events){
                this.context.router.push('/');
            }.bind(this))
            .fail(function(xhr, status, errorThrown) {
                console.error(API_URL, status, errorThrown.toString());
            }.bind(this));
    },

    //handle delete
     handleDelete: function() {
        $.ajax({
            url: API_URL + "/" + this.props.params.id,
            dataType: 'json',
            type: 'DELETE',
        })
            .done(function(events){
                this.context.router.push('/');
            }.bind(this))
            .fail(function(xhr, status, errorThrown) {
                console.error(API_URL, status, errorThrown.toString());
            }.bind(this));
    },
    

    render: function() {
        return (
            <div>
                <form className="eventForm">
                    <h1>Event Edit - {this.state.id}</h1>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <input
                        type="text"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                    />
                     <input
                        type="date"
                        value={this.state.startDate}
                        onChange={this.handleStartDateChange}
                    />
                     <input
                        type="date"
                        value={this.state.startDate}
                        onChange={this.handleEndDateChange}
                     />
                    <button type="button" onClick={this.handleUpdate}>Update</button>
                    <button type="button" onClick={this.handleDelete}>Delete</button>
                </form>
                <Link to='/'>Cancel</Link>
            </div>
        );
    }
});