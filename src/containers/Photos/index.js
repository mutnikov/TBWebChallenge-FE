import React, { useEffect, useState } from 'react';
import i18n from '../../utils/i18n';
import { ImageUploader, IconManager } from '../../components';
import './styles.scss';
import { loadPhoto, getAllPhotos } from '../../store/actions/photo';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

const Photo = ({ photo, loadPhoto, getAllPhotos }) => {
  useEffect(() => {
    if (!photo) {
      getAllPhotos();
    }
  });

  return (
    <div className="photos-page-wrapper">
      <div className="photos-page-wrapper__title">{i18n.__('photos.title')}</div>
      <div className="photos-page-wrapper__photos-wrapper">
        <div className="wrapper">
          <ImageUploader
            className="photos-page-wrapper__photos-wrapper__image-uploader"
            uploadFile={loadPhoto}
            logo={<IconManager name="plus" fill="yellow" height="50%" width="50%" />}
          />
        </div>
        {
            photo && photo.length > 0 && photo.map((image) => (
              <div className="wrapper">
                <img className="photos-page-wrapper__photos-wrapper__image" src={image.url} />
              </div>
            ))
          }
      </div>
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.shape({}).isRequired,
  loadPhoto: PropTypes.func.isRequired,
  getAllPhotos: PropTypes.func.isRequired,
};

const mapStateToProps = ({ photo }) => ({
  photo,
});
const mapDispatchToProps = (dispatch) => ({
  loadPhoto: (data) => dispatch(loadPhoto(data)),
  getAllPhotos: () => dispatch(getAllPhotos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
