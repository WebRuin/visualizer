import React from 'react';
import Analytics from './services/analytics';
import Map from './components/map/map';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import useIncidents from './hooks/getIncidents';

import './App.css';

function App() {
  // Start tracking pageviews/events
  Analytics.initialize();
  Analytics.pageview('/');

  const [mapValue, setMapValue] = React.useState('');

  // Fetch the latest incidents from the backend API
  const incidents = useIncidents();
  if (!incidents) return null;

  return (
    <div className="app">
      <Sidebar incidents={incidents} mapValue={mapValue} />
      <Map incidents={incidents} onCityClick={setMapValue} />
      <Footer />
    </div>
  );
}

export default App;
