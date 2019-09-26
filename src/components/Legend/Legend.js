import React from 'react';
import s from './Legend.module.css';

const Legend = ({ items }) => (
  <ul className={s.list}>
    {items.map(item => {
      <li key={item.priority} className={s.item}>
        <i className="material-icons" style={{ color: item.color }}>
          lens
        </i>
        {item.priority}
      </li>;
    })}
  </ul>
);

export default Legend;
