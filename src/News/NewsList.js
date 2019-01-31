import React, {Component} from 'react';

class NewsList extends Component {

  render() {
    let { collection } = this.props;
    console.log({collection});
    return (
    <div>{collection.map((item, index) => {
      return (
        <h5>{item.title}</h5>
      );
    })}</div>
    );
  }
}



export default NewsList;
