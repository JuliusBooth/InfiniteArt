import { useState } from 'react'
import GifFrame from './components/gifFrame'
import ImageUploadFirebase from './components/ImageUploadFirebase'

import './App.css'

function App() {
  const [gifUrl, setGifUrl] = useState(null);

  return (
    <>
      <GifFrame gifUrl={gifUrl} />
      <ImageUploadFirebase  setGifUrl={setGifUrl} />
    </>
  )
}

export default App
