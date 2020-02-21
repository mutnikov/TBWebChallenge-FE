import { debounce } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React from 'react';
import i18n from '../../utils/i18n';
import { Input } from '../../components';
import './styles.scss';
import { getBeatedTeams } from '../../store/actions/sport';

const Sport = ({ sport, getBeatedTeams }) => {
  const onSearch = (value) => {
    getBeatedTeams({ commandName: value });
  };

  const throttledMethod = debounce((value) => {
    onSearch(value);
  }, 500);

  return (
    <div className="sport-page-wrapper">
      <div className="sport-page-header">
        <div className="sport-page-header__title">{i18n.__('sport.title')}</div>
      </div>
      <div className="sport-page-body">
        <div className="sport-page-body__inputs-wrapper">
          <Input
            onChange={throttledMethod}
            placeholder={i18n.__('sport.input.placeholder')}
          />
        </div>
        <div className="sport-page-body__results-wrapper">
          {sport.beatedTeams && sport.beatedTeams.length > 0
            ? sport.beatedTeams.map((team) => (
              <div
                className="sport-page-body__results-wrapper__result"
              >
                {team}
              </div>
            ))
            : (
              <div className="news-page-wrapper">
                <div className="no-data">
                  {i18n.__('no-data')}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

Sport.propTypes = {
  sport: PropTypes.shape({}).isRequired,
  getBeatedTeams: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sport }) => ({
  sport,
});
const mapDispatchToProps = (dispatch) => ({
  getBeatedTeams: (data) => dispatch(getBeatedTeams(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sport);
