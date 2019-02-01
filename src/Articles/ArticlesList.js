import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { favouriteArticle } from '../actions/article';
import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  AnchorDiv,
} from './styles';


class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
  }

  navigateToDetailsPage(articleId) {
    const { history } = this.props;
    history.push(`article/${articleId}`);
  }

  addToFavourite(item) {
    let { requestfavouriteArticle } = this.props;
    requestfavouriteArticle(item);
  }

  render() {
    let { collection } = this.props;
    return (
      <div>
        <h3>List Of Article's</h3>
        <p>View Favourite Article's</p>
        <ContainerDiv>{collection.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
              <AnchorDiv onClick={() => this.navigateToDetailsPage(item.id)}> 
                Veiw Details 
              </AnchorDiv>
              <AnchorDiv onClick={() => this.addToFavourite(item)}> 
                Add to Favourite
              </AnchorDiv>
            </ContentDiv>
          );
        })}
        </ContainerDiv>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestfavouriteArticle(item) {
    dispatch(favouriteArticle(item));
  },
});


export default withRouter(connect(
  null,
  mapDispatchToProps,
)(ArticlesList));

