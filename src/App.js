import React from 'react';
import TrelloTop from './components/TrelloTop';
import TrelloDetail from './components/TrelloDetail';
import TrelloSchedule from './components/TrelloSchedule';

function App() {
  return (
    <>
      <TrelloTop />
      <TrelloDetail />
      <TrelloSchedule />
    </>
  );
}

export default App;
