import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Thumbnail } from '../../components';

const Index = () => {
  let [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    setLoading(true);
    const response = await axios(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    );
    console.log(response);
    setImages(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  const history = useHistory();

  console.log(images);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {images.map((image, index) => (
            <div
              className='col-2 mb-3'
              style={{ cursor: 'pointer' }}
              key={index}
            >
              <Thumbnail
                image={image.thumbnailUrl}
                title={image.title}
                onClick={() => history.push(`/detail/${image.id}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
