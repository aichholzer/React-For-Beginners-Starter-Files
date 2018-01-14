import React from 'react';

export default class AddFishForm extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  createFish(event) {
    event.preventDefault();
    this.props.addFish({
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value,
    });

    this.form.reset();
  }

  render() {
    return (
      <form ref={(input) => { this.form = input; }} className='fish-edit' onSubmit={(event) => this.createFish(event)}>
        <input ref={(input) => { this.name = input; }} type='text' placeholder='Name' />
        <input ref={(input) => { this.price = input; }} type='text' placeholder='Price' />
        <select ref={(input) => { this.status = input; }}>
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold out</option>
        </select>
        <textarea ref={(input) => { this.description = input; }} type='text' placeholder='Description'></textarea>
        <input ref={(input) => { this.image = input; }} type='text' placeholder='Image' />
        <button type='submit'>Add item</button>
      </form>
    );
  }
}
