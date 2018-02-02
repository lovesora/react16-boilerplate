// react
import React from 'react';

import PostController from '../app/post/post.controller';

export default class PostRoute extends React.Component {
  render() {
    return <div>
      <PostController id={this.props.match.params.id} />
    </div>;
  }
}
