export const photoActionsType = {
  LOAD_PHOTO: 'LOAD_PHOTO',

  GET_ALL_PHOTOS: 'GET_ALL_PHOTOS',
  GET_ALL_PHOTOS__SUCCESS: 'GET_ALL_PHOTOS__SUCCESS',
};

export const loadPhoto = (payload) => ({
  type: photoActionsType.LOAD_PHOTO,
  payload,
});


export const getAllPhotos = (payload) => ({
  type: photoActionsType.GET_ALL_PHOTOS,
  payload,
});

export const getAllPhotosSuccess = (payload) => ({
  type: photoActionsType.GET_ALL_PHOTOS__SUCCESS,
  payload,
});
