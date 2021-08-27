import { Component } from 'react';
import s from './SearchBar.module.css'

class SearchBar extends Component {
  state = { 
    search: '' 
  }

  handleChange = e => {
    this.setState({search: e.currentTarget.value.toLowerCase()})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
    this.setState({
      search: '',
    })
  }



  render() {
    const {search} = this.state;
    const {handleChange, onSubmit} = this;
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={s.searchFormButton} >
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>
  
          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={search}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

