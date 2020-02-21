export const newsActionsType = {
  GET_ALL_NEWS: 'GET_ALL_NEWS',
  GET_ALL_NEWS_SUCCESS: 'GET_ALL_NEWS_SUCCESS',
};

export const getAllNews = () => ({
  type: newsActionsType.GET_ALL_NEWS,
});


export const getAllNewsSuccess = (payload) => ({
  type: newsActionsType.GET_ALL_NEWS_SUCCESS,
  payload,
});
