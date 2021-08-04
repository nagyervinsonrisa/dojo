import React, { Component } from 'react';
import './App.css';
import emojiList from './emojiList.json';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { searchText: '', filteredEmojies: this.filterEmojies() };
	}

	filterEmojies(searchText = '', maxResults = '100') {
		return emojiList
			.filter(emoji => {
				if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
					return true;
				}
				if (emoji.keywords.includes(searchText)) {
					return true;
				}
				return false;
			})
			.slice(0, maxResults);
  }
  
  onSearchChange(event) {
    var result = this.filterEmojies(event.target.value);
    this.setState({filteredEmojies: result});
  }

	render() {
		return (
			<div className="App">
				<header className="component-header">Emoji Search</header>
				<div className="component-search-input">
					<div>
						<input onChange={(text) => this.onSearchChange(text)} />
					</div>
				</div>

				<div className="component-emoji-results">
					{this.state.filteredEmojies.map(emojiData => {
						return (
							<div
								className="component-emoji-result-row"
								data-clipboard-text={this.props.symbol}
							>
								<span className="title">{emojiData.symbol}</span>
								<span className="title">{emojiData.title}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
