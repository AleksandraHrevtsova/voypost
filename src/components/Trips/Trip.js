import React from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from './PrioritySelector';
import Priority from '../../utils/Priority';
import s from './Trip.module.css';

const options = Object.values(Priority);

const Trip = ({
  id,
  fromName,
  toName,
  departAt,
  vehicle,
  priority,
  completed,
  onDeleteTrip,
  onUpdateComleted,
  onUpdatePriority,
}) => (
  <div>
    <p className={s.text}>{fromName}</p>
    <p className={s.text}>{toName}</p>
    <p className={s.text}>{departAt}</p>
    <p className={s.text}>{vehicle}</p>
    <hr />
    <div className={s.actions}>
      <button type="button" onClick={onDeleteTrip}>
        Delete
      </button>
      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={onUpdateComleted}
        />
      </label>
    </div>
  </div>
);

Trip.propTypes = {
  id: PropTypes.string.isRequired,
  fromName: PropTypes.string.isRequired,
  toName: PropTypes.string.isRequired,
  departAt: PropTypes.string.isRequired,
  vehicle: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTrip: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default Trip;
