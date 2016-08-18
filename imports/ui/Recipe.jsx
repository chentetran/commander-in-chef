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

// For page title
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class RecipeContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 0,
		};
	}

	componentDidUpdate() {
		if (this.state.saidFirst) return;

		let utterance = new SpeechSynthesisUtterance(this.props.dish[0].steps[0]);
		let voices = window.speechSynthesis.getVoices();
		// utterance.voice = voices[0]; // change voice
		window.speechSynthesis.speak(utterance);

		this.setState({
			saidFirst: true
		});
	}

	listSteps() {
		if (this.props.dish.length === 0) return;
		return this.props.dish[0].steps.map((stepStr, index) => (
			<li key={index}>{stepStr}</li>
		));
	}

	buttonClicked(key) {

		let step = this.state.currentStep;	
		switch (key) {
			case 1: 	// Next
				step++;
				let lastIndex = this.props.dish[0].steps.length - 1;
				if (step >= lastIndex) { // Check if outside arr bounds
					step = lastIndex;
				}

				this.setState({
					currentStep: step
				});
				break;

			case 2: 	// Back
				step--;
				if (step < 0) {			// Check if outside arr bounds
					step = 0;
				}

				this.setState({
					currentStep: step
				});
				break;

			case 3: 	// Repeat
				
		};
		
		let utterance = new SpeechSynthesisUtterance(this.props.dish[0].steps[step]);
		window.speechSynthesis.speak(utterance);
	}

	render() {
		return (
			<div className='container'>
				<header>
					<h1>{capitalizeFirstLetter(this.props.dishName)}</h1>
				</header>

				<ol>
					{this.listSteps()}
				</ol>

				<button type="button" onClick={this.buttonClicked.bind(this, 1)}>Next</button>
				<button type="button" onClick={this.buttonClicked.bind(this, 2)}>Back</button>
				<button type="button" onClick={this.buttonClicked.bind(this, 3)}>Repeat</button>

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
