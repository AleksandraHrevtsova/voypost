import React from 'react';
import PropTypes from 'prop-types';
import s from './TripsFilter.module.css';

const TripsFilter = ({ value, onChangeFilter }) => (
  <input
    type="text"
    className={s.input}
    value={value}
    onChange={onChangeFilter}
    placeholder="Type to filter trips..."
  />
);

TripsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default TripsFilter;
