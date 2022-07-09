import React, { useEffect, useState } from 'react';
import './App.scss';
import Canvas from './components/Canvas';

function getWindowHeight() {
  return window.innerHeight;
}

function App() {
  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight());
  // Dynamic height. vh unit in CSS is broken for full screen apps.
  useEffect(() => {
    function handleWindowResize() {
      setWindowHeight(getWindowHeight());
    }
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('orientationchange', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('orientationchange', handleWindowResize);
    };
  }, []);

  return (
    <div className="App" style={{ height: windowHeight }}>
      <Canvas />
    </div>
  );
}

export default App;
