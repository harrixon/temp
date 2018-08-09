import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router';

import landingPage from "src/Page/landingPage/landing";

class App extends React.Component<{}, {}> {
  constructor(props: {}){
    super(props);
  }

  public render() {
    return (
      <div>
        <Switch>
          <Route path="*" component={landingPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
