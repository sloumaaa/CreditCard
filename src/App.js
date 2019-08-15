import React from 'react';
import Titre from './Titre'
import Image from './Image'
import Inpu from './Inpu'
import Credbas from './Credbas'

function App() {
  var conteur = { width: '500px', border: '1px solid black', borderRadius: '10px', marginLeft: '20px', height: '325px', backgroundImage: 'url(https://www.levif.be/medias/5481/2806765.jpg)' };
  return (
    <div style={conteur}>
      <Titre />
      <Image />
      <Inpu />
      <Credbas />
    </div>
  );
}

export default App;
