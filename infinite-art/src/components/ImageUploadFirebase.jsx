/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import  storage  from '../helpers/firebase-config';

function ImageUploadFirebase({setGifUrl}) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);  
      };
      reader.readAsDataURL(file);
    }
  };

  // when url is set send to backend

  useEffect(() => {
    if (imageUrl) {
      const create_gif_endpoint = 'http://localhost:5000/create_gif';
      const body = JSON.stringify({ imageUrl: imageUrl });
      fetch(create_gif_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then(response => response.json())
      .then(data => {
        setGifUrl(data.gifUrl);
        setImagePreview(null);
        console.log(data.gifUrl)
      })
      .catch(error => console.log(error));
    }
  }
  , [imageUrl, setGifUrl]);


  const handleUpload = () => {
    const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image).then(async (snapshot) => {
        setImageUrl(await getDownloadURL(snapshot.ref));
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Make Gif</button>

      <br />
       {imagePreview && <img id="preview" src={imagePreview} alt="Preview" style={{ maxWidth: '30%', marginTop: '20px' }} />}
 
    </div>
  );
}

export default ImageUploadFirebase;
