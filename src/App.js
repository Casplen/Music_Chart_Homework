import './App.css';
import {useEffect, useState} from 'react';

import ChartList from './components/ChartList.js'
import ChartDetails from './components/ChartDetails.js'

function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(songs => setSongs(songs.feed.entry))
    }, [])

  return (
    <div className="App">
      <ChartList 
        songs= {songs}/>

    </div>
  );
}

export default App;
