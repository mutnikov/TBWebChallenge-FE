import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Widget, } from '../../components';
import i18n from '../../utils/i18n';
import './styles.scss';
import { getWeather } from '../../store/actions/weather';
import { getAllNews } from '../../store/actions/news';
import { getSportData } from '../../store/actions/sport';
import { getTasksList } from '../../store/actions/task';
import { getAllPhotos } from '../../store/actions/photo';

const Dashboard = ({
                       getWeather,
                       getAllNews,
                       getSportData,
                       getTasksList,
                       getAllPhotos,
                       weather,
                       news,
                       sport,
                       photo,
                       task,
                   }) => {
    useEffect(() => {
        if (!news) {
            getAllNews();
        }
        if (!sport.firstTeam) {
            getSportData();
        }

        if(!task) {
            getTasksList();
        }

        if(!photo) {
            getAllPhotos();
        }

        navigator.geolocation.getCurrentPosition((data) => {
            if (!weather) {
                // getWeather(data);
            }
        });
    });

    const WIDGETS = [
        {
            title: i18n.__('widget.weather.title'),
            content: () => {
                if (!weather) {
                    return (
                        <div className="no-data">
                            {i18n.__('no-data')}
                        </div>
                    );
                }
                return (
                    <div className="weather-widget-wrapper">
                        <div/>
                        <div className="weather-widget-wrapper__city-name">{weather.name}</div>
                    </div>
                );
            },
        },
        {
            title: i18n.__('widget.news.title'),
            to: '/news',
            content: () => {
                if (!news) {
                    return (
                        <div className="no-data">
                            {i18n.__('no-data')}
                        </div>
                    );
                }
                return (
                    <div className="news-widget-wrapper">
                        <div className="news-widget-wrapper__title">
                            {news.item.title}
                        </div>
                        <div className="news-widget-wrapper__description">{news.item.content}</div>
                    </div>
                );
            },
        },
        {
            title: i18n.__('widget.sport.title'),
            to: '/sport',
            content: () => {
                if (!sport.firstTeam) {
                    return (
                        <div className="no-data">
                            {i18n.__('no-data')}
                        </div>
                    );
                }
                return (
                    <div className="sport-widget-wrapper">
                        <div
                            className="sport-widget-wrapper__title"
                        >
                            {`${sport.firstTeam.HomeTeam} - ${sport.firstTeam.AwayTeam}`}
                        </div>
                    </div>
                );
            },
        },
        {
            title: i18n.__('widget.photos.title'),
            to: '/photos',
            content: () => {
                if (!photo || (photo && photo.length === 0)) {
                    return (
                        <div className="no-data">
                            {i18n.__('no-data')}
                        </div>
                    );
                }
                return (
                    <div className="photo-widget-wrapper">
                        {photo.slice(0, 4).map((element) => <img className="photo-widget-wrapper__item"
                                                                 src={element.url}/>)}
                    </div>
                );
            },
        },
        {
            title: i18n.__('widget.tasks.title'),
            to: '/tasks',
            content: () => {
                if (!task || (task && task.length === 0)) {
                    return (
                        <div className="no-data">
                            {i18n.__('no-data')}
                        </div>
                    );
                }
                return (
                    <div className="task-widget-wrapper">
                        {
                            task.slice(0, 3).map((element) => {
                                return <div className="task-widget-wrapper__item">{element.description}</div>
                            })
                        }
                    </div>
                );
            },
        },
    ];


    return (
        <div className="dashboard-page-wrapper">
            <div className="dashboard-title">{i18n.__('dashboard.title')}</div>
            <div className="widgets-wrapper">
                {WIDGETS.map((widget, index) => (
                    <Widget key={index} title={widget.title} to={widget.to}>
                        {widget.content && widget.content()}
                    </Widget>
                ))}
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    weather: PropTypes.shape({}).isRequired,
    news: PropTypes.shape({}).isRequired,
    sport: PropTypes.shape({}).isRequired,
    getWeather: PropTypes.func.isRequired,
    getAllNews: PropTypes.func.isRequired,
    getSportData: PropTypes.func.isRequired,
    getTasksList: PropTypes.func.isRequired,
    getAllPhotos: PropTypes.func.isRequired,
};


const mapStateToProps = ({
                             weather, news, sport, photo, task,
                         }) => ({
    weather,
    news,
    sport,
    photo,
    task,
});
const mapDispatchToProps = (dispatch) => ({
    getWeather: (data) => dispatch(getWeather(data)),
    getAllNews: () => dispatch(getAllNews()),
    getSportData: () => dispatch(getSportData()),
    getTasksList: () => dispatch(getTasksList()),
    getAllPhotos: () => dispatch(getAllPhotos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
