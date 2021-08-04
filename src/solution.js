import React, { useState } from 'react';
import './App.css';
import emojiList from './emojiList.json';

const App = () => {
	/**
	 * Initialize state variables
	 */
	const [filteredList, setFilteredList] = useState(emojiList)

	/**
	 * Handle change on search keyword input
	 * event.target.value
	 */
	const handleOnChange = event => {
		// Handle on input change, get entered value
		// Call filter method here
	}

	/**
	 * Filter emoji object array by keyword
 	 */
	const filterEmoji = () => {
		// Filter object emoji array here
		// Set the filtered result setFilteredList(list)
	}

	/**
	 * Render filtered list
	 */
	const renderEmojiList = () => {
		if (!Object.keys(filteredList)) return <></>;
		return filteredList.map(emojiData =>
			<div key={emojiData.title} className="component-emoji-result-row"  data-clipboard-text={emojiData.symbol}>
				<span>
					<span className="title">{emojiData.symbol}</span>
					<span className="title">{emojiData.title}</span>
				</span>
				<span className="title">{emojiData.keywords}</span>
			</div>
		)
	}

	/**
	 * Render component
	 */
	return (
		<div>
			<header className="component-header">Emoji Search</header>
			<div className="component-search-input">
				<div>
					<input onChange={handleOnChange} />
				</div>
			</div>
			<div className="component-emoji-results">
				{renderEmojiList()}
			</div>
		</div>
	);
}

export  default App;