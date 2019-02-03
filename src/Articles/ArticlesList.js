import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import { favouriteArticle } from '../actions/article';
import {
  ContainerDiv,
  ContentDiv,
  ItemDiv,
  AnchorDiv,
  Heading,
  FavouriteLink,
  AddedDiv,
} from './styles';


class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.navigateToFavouriteArticlePage = this.navigateToFavouriteArticlePage.bind(this);
  }

  navigateToDetailsPage(articleId) {
    const { history } = this.props;
    history.push(`article/${articleId}`);
  }

  addToFavourite(item) {
    let { requestfavouriteArticle, history } = this.props;
    requestfavouriteArticle(item);
    history.push('favourite');
  }

  navigateToFavouriteArticlePage() {
    const { history } = this.props;
    history.push('favourite');
  }

  render() {
    let { collection } = this.props;
    return (
      <ContainerDiv>
        <Heading>List Of Article's</Heading>
        <FavouriteLink onClick={this.navigateToFavouriteArticlePage}>View Favourite Article's</FavouriteLink>
        {collection && collection.map((item) => {
          return (
            <ContentDiv key={item.id}>
              <ItemDiv>
                {item.title}
              </ItemDiv>
              <AnchorDiv onClick={() => this.navigateToDetailsPage(item.id)}> 
                Veiw Details 
              </AnchorDiv>
              {!item.favourite ? 
                <AnchorDiv onClick={() => this.addToFavourite(item)}> 
                  Add to Favourite
                 </AnchorDiv> : 
                 <AddedDiv> 
                  Already added to Favourite List
                 </AddedDiv> 
              }
            </ContentDiv>
          );
        })}
      </ContainerDiv>
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
