import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// TODO: clean up query string to take out symbols to prevent nosql injection

export default class Recipe extends Component {
	render() {
		return (
			<div className='container'>
				<header>
					<h1>{this.props.location.query.dish}</h1>
				</header>
			</div>
		);
	}
}