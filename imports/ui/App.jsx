import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../api/recipes.js';

class App extends Component {

	renderImages() {
		if (this.props.recipes.length !== 0) {
			return this.props.recipes.map((recipeObj, index) => {
				return (
					<li key={index} onClick={this.imageClicked.bind(this, recipeObj._id)}>
						<a href='#'>{recipeObj.info.name}</a>
					</li>
				);
			});
		}

	}

	imageClicked(id) {
		console.log('clicked');
	}
	

	render() {
		console.log(this.props.recipes);
		return (
			<div className='container'>
				<header>
					<h1>Recipe Dictator</h1>
				</header>

				<ul className='photos'>
					{this.renderImages()}
				</ul>
					

			</div>
		);
	}
}

App.propTypes = {
	recipes: PropTypes.array.isRequired,
};

export default createContainer(() => {
	return {
		recipes: Recipes.find({}).fetch(),
	};
}, App);
