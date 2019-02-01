import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchArticles } from '../actions/article';
import List from './ArticlesList';


class ListArticlesContainer extends Component {
  componentDidMount() {
    let { requestArticles } = this.props;
    requestArticles();
  }

  render() {
    let {collection, favourite} = this.props;
    console.log('read_cookie', favourite)

    return (
      <List
        collection={collection}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  collection: state.articles.items,
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  requestArticles() {
    dispatch(fetchArticles());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListArticlesContainer);
