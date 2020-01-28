import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
// import GraphViewer from './components/GraphViewer/GraphViewer';
import TileList from './components/TileList/TileList';
import Page from './components/Page/Page';

import { Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar>
        <Switch>
          <Route exact path="/" component={TileList} />
          <Route path="/page/:pageId" component={Page} />
        </Switch>
        {/* <GraphViewer /> */}
      </Sidebar>
    </div>
  );
}

export default App;
