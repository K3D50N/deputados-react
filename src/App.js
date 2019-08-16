import React, { Component } from 'react';

import Hearder from './components/Hearder';
import Search from './components/Search';

class App extends Component
{


  render()
  {
    return(
      <div className="App">
        <Hearder />
        <Search />
      </div>
    );
  }
}

export default App;
