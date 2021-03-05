import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static = {
    onSubmit: PropTypes.func,
  };

  handleChangeInput = e => {
    const { value } = e.currentTarget;

    this.setState({ searchQuery: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              value={searchQuery}
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChangeInput}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
