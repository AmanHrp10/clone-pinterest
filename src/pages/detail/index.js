import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../../components';
import * as action from '../../redux/action';
import { connect } from 'react-redux';

const Index = (props) => {
  const { addFavorite } = props;

  let [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    setLoading(true);
    const response = await axios(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    );
    setImages(response.data);
    setLoading(false);
  };
  const id = useParams();

  const imageDetail = images.filter((image) => image.id == id.id);
  const handleAddFavorite = (e) => {
    e.preventDefault();
    addFavorite(imageDetail);
  };

  useEffect(() => {
    fetch();
  }, []);

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <Navbar />
      <div className='container d-flex'>
        <div className='image'>
          <img src={imageDetail[0].url} alt={imageDetail[0].title} />
        </div>
        <div className='description'>
          <h1>{imageDetail[0].title}</h1>
          <div
            title='Add To Favorite'
            onClick={(e) => handleAddFavorite(e)}
            style={{ cursor: 'pointer' }}
          >
            <i className='fa fa-heart fa-2x'></i>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (data) => dispatch(action.addFavorite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
