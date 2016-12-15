import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import { API_URL2 } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {title: '', description: '', time: '', startDate: ''};
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
        $.ajax(API_URL2 + "/" + this.props.params.id) .done(function(comments) {
            this.setState(comments[0]);
        }.bind(this));
    },
    handleTitleChange: function(e) {
        this.setState({title: e.target.value});
    },
    handleDecsriptionChange: function(e) {
        this.setState({description: e.target.value});
    },
    handleTimeChange: function(e) {
        this.setState({time: e.target.value});
    },
    handleStartChange: function(e) {
        this.setState({startDate: e.target.value});
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleUpdate: function() {
        var updatedComment = {
            title: this.state.title.trim(),
            description: this.state.description.trim(),
            time: this.state.time.trim(),
            startDate: this.state.startDate.trim(),

        }
        $.ajax({
            url: API_URL2 + "/" + this.props.params.id,
            dataType: 'json',
            type: 'PUT',
            contentType:'application/json',
            data: JSON.stringify(updatedComment)
        })
            .done(function(comments){
                this.context.router.push('/events');
            }.bind(this))
            .fail(function(xhr, status, errorThrown) {
                console.error(API_URL2, status, errorThrown.toString());
            }.bind(this));
    },

    //handle delete
     handleDelete: function() {
        $.ajax({
            url: API_URL2 + "/" + this.props.params.id,
            dataType: 'json',
            type: 'DELETE',
        })
            .done(function(comments){
                this.context.router.push('/events');
            }.bind(this))
            .fail(function(xhr, status, errorThrown) {
                console.error(API_URL2, status, errorThrown.toString());
            }.bind(this));
    },
    

    render: function() {
        return (
            <div>
                <form className="commentForm">
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
                        type="text"
                        value={this.state.time}
                        onChange={this.handleTimeChange}
                    />

                    <input
                        type="date"
                        value={this.state.startDate}
                        onChange={this.handleStartChange}
                    />

                    <button type="button" onClick={this.handleUpdate}>Update</button>
                    <button type="button" onClick={this.handleDelete}>Delete</button>
                </form>
                <Link to='/events'>Cancel</Link>
            </div>
        );
    }
});