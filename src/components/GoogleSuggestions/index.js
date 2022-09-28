/* eslint-disable no-unused-vars */
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg1">
        <div className="bg2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="google logo"
          />
          <div className="bg3">
            <div className="bg4">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <form>
                <input
                  type="search"
                  className="form"
                  placeholder="Search Google"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </form>
            </div>
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionDetails={each}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
