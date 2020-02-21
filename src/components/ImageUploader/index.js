import React, { useState } from 'react';
import classNames from 'classnames';
import ReactDropzone from 'react-dropzone';
import './style.scss';
import PropTypes from 'prop-types';


const IMAGE_FILE_TYPES = ['image/jpg', 'image/png', 'image/jpeg', 'image/gif', 'image/bmp'];

const ImageUploader = ({
  maxSize,
  className,
  disableClick,
  disabled,
  title,
  logo,
  uploadFile,
}) => {
  const [error, setError] = useState(false);
  const onDropRejected = (files, e) => {
    setError(true);
  };

  const onDropAccepted = (files) => {
    const file = files && files[0];
    setError(false);
    uploadFile({ file });
  };
  return (
    <div className={classNames('file-uploader', className)}>
      <div className="ratio-container">
        <ReactDropzone
          accept={IMAGE_FILE_TYPES}
          rejectClassName="error"
          maxSize={maxSize}
          multiple={false}
          disableClick={disableClick}
          disabled={disabled}
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="wrapper">
              <div
                {...getRootProps()}
                className={classNames('ReactDropzone', error && 'error')}
              >
                {title && <div className="dropzone-title">{title}</div>}
                {logo}
                <input {...getInputProps()} />
              </div>
            </div>
          )}
        </ReactDropzone>
      </div>
    </div>
  );
};

ImageUploader.propTypes = {
  uploadFile: PropTypes.func.isRequired,
  maxSize: PropTypes.number,
  className: PropTypes.string,
  disableClick: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  logo: PropTypes.element,
};

export default ImageUploader;
