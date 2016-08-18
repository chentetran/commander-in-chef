import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../api/recipes.js';

// TODO: clean up query string to take out symbols to prevent nosql injection


export default class Recipe extends Component {
	render() {
		return (
			<Container dish={this.props.location.query.dish}/>
		);
	}
}

class RecipeContent extends Component {
	listSteps() {
		if (this.props.dish.length === 0) return;
		return this.props.dish[0].steps.map((stepStr, index) => (
			<li key={index}>{stepStr}</li>
		));
	}

	render() {
		return (
			<div className='container'>
				<header>
					<h1>{this.props.dishName}</h1>
				</header>

				<ul>
					{this.listSteps()}
				</ul>
			</div>
		);
	}
}

RecipeContent.propTypes = {
	dish: PropTypes.array.isRequired,
	dishName: PropTypes.string.isRequired
};

let Container = createContainer((props) => {
	return {
		dish: Recipes.find({'info.name':props.dish}).fetch(),
		dishName: props.dish
	};
}, RecipeContent);
