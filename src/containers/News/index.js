import React, { useEffect } from 'react';
import i18n from '../../utils/i18n';
import placeholder from '../../assets/images/placeholder.png';
import './styles.scss';
import { getAllNews } from '../../store/actions/news';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';


const News = ({ news, getAllNews }) => {
  useEffect(() => {
    if (!news) {
      getAllNews();
    }
  });

  if (!news) {
    return (
      <div className="news-page-wrapper">
        <div className="no-data">
          {i18n.__('no-data')}
        </div>
      </div>
    );
  }

  return (
    <div className="news-page-wrapper">
      <div className="news-page-header">
        <div className="news-page-header__title">{i18n.__('news.title')}</div>
        <img className="news-page-header__logo" src={news.image.url || placeholder} />
      </div>
      <div className="news-page-body">
        <div className="news-page-body__headline">{news.item.title}</div>
        <div className="news-page-body__description">{news.item.content}</div>
      </div>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.shape({}).isRequired,
  getAllNews: PropTypes.func.isRequired,
};


const mapStateToProps = ({ news }) => ({
  news,
});
const mapDispatchToProps = (dispatch) => ({
  getAllNews: () => dispatch(getAllNews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(News);
