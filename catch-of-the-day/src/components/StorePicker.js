import React from 'react';
import { Redirect } from 'react-router-dom';

export default class StorePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  selectStore(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
      <form className='store-selector' onSubmit={(event) => this.selectStore(event)}>
        <h2>Select a store</h2>
        <input ref={(input) => { this.storeInput = input; }} type='text' placeholder='Your store' defaultValue='example-store' />
        <button type='submit'>Visit store</button>
        {this.state.redirect && <Redirect to='/stores/1234' push />}
        </form>
      </div>
    );
  }
}
