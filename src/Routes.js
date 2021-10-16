import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import Posts from './components/Posts';

const Routes = () => {    

  return (
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route
            exact
            path="/:id"
            render={(routeProps) => (
                <PostDetails
                    postId={routeProps.match.params.id}
                />
            )}
        />
      </Switch>
  );
};

export default Routes;