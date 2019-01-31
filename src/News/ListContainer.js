import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchNews } from '../actions/news';
import List from './NewsList';


class ListNewsContainer extends Component {

  componentDidMount() {
    let { requestNews } = this.props;
    requestNews();
  }

  render() {
    let {collection} = this.props;
    return (
      <List
        collection={collection}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  collection: state.news.items,
});

const mapDispatchToProps = (dispatch) => ({
  requestNews() {
    dispatch(fetchNews());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListNewsContainer);
