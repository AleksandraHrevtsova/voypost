import React from 'react';
import PropTypes from 'prop-types';
import Trip from './Trip';
import s from './TripsList.module.css';

const TripsList = ({
  items,
  onDeleteTrip,
  onUpdateComleted,
  onUpdatePriority,
}) =>
  items.length > 0 && (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id}>
          <Trip
            {...item}
            onDeleteTrip={() => onDeleteTrip(item.id)}
            onUpdateComleted={() => onUpdateComleted(item.id)}
            onUpdatePriority={onUpdatePriority}
          />
        </li>
      ))}
    </ul>
  );
TripsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteTrip: PropTypes.func.isRequired,
  onUpdateComleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};
export default TripsList;
