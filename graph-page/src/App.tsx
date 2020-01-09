import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
// import GraphViewer from './components/GraphViewer/GraphViewer';
import TileList from './components/TileList/TileList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar>
        {/* <GraphViewer /> */}
        <TileList />
      </Sidebar>
    </div>
  );
}

export default App;
