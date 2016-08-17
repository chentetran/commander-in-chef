import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import ReactGridLayout from 'react-grid-layout';


export default class App extends Component {
	render() {
		var layout = [
	      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
	      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
	      {i: 'c', x: 4, y: 0, w: 1, h: 2}
	    ];

		return (
			<div className='container'>
				<header>
					<h1>Recipe Dictator</h1>
				</header>

				<ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
					<div className='box' key={'a'}>a</div>
					<div className='box' key={'b'}>b</div>
					<div className='box' key={'c'}>c</div>
				</ReactGridLayout>

			</div>
		);
	}
}

App.propTypes = {

};

// export default createContainer(() => {
// 	// TODO


// }, App);
