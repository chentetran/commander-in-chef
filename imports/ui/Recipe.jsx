import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../api/recipes.js';

// TODO: clean up query string to take out symbols to prevent nosql injection

export default class Recipe extends Component {
	render() {
		console.log(this.state.dish);
		return (
			<div className='container'>
				<header>
					<h1>{this.props.location.query.dish}</h1>
				</header>

				<div>
					
				</div>
			</div>
		);
	}
}

// Recipe.propTypes = {
// 	dish: PropTypes.object.isRequired,
// };

// export default createContainer(() => {
// 	return {
// 		// dish: Recipes.find({'info.name':this.props.location.query.dish}).fetch(),
// 	};
// }, Recipe);
