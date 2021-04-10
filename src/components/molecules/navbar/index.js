import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import * as action from '../../../redux/action';

const Index = (props) => {
  const { favorite, removeFavorite } = props;

  console.log('List Favorite: ', favorite);

  const handleRemoveFavorite = (id) => {
    removeFavorite();
  };

  const handleShowFavorite = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>My Favorite</Popover.Title>
      <Popover.Content>
        <ul style={{ paddingLeft: 0 }}>
          {favorite && favorite.favorite.length == 0 ? (
            <li>Kosong</li>
          ) : (
            favorite &&
            favorite.favorite.map((data, index) => (
              <li
                className='mb-1'
                style={{ listStyle: 'none' }}
                key={data[0].id}
              >
                <div className='d-flex align-items-center'>
                  <div
                    className='thumbnail mr-3'
                    style={{ width: '30px', height: '30px' }}
                  >
                    <img
                      src={data[0].thumbnailUrl}
                      width='100%'
                      height='100%'
                      alt={data[0].title}
                    />
                  </div>
                  <div className='title'>{data[0].title}</div>
                  <span
                    className='bg-danger text-white px-2 ml-3'
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                    onClick={(e) => removeFavorite(e, data[0].id)}
                  >
                    x
                  </span>
                </div>
              </li>
            ))
          )}
        </ul>
      </Popover.Content>
    </Popover>
  );
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <div className='logo' style={{ width: '100px' }}>
          <Link to='/' className='navbar-brand'>
            <img
              src='http://mgindotech.com/assets/images/Logo.png'
              width='100%'
              height='100%'
              alt=''
            />
          </Link>
        </div>
        <div className='favorite'>
          <OverlayTrigger
            trigger='click'
            placement='bottom'
            overlay={handleShowFavorite}
          >
            <Button variant='default'>
              <i className='fa fa-heart-o fa-2x'></i>
              <span className='badge badge-danger'>
                {favorite.favorite && favorite.favorite.length}
              </span>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (data) => dispatch(action.removeFavorite(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
