import styles from './OrderBy.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { OrderByOptions } from '..';

interface Props {
  orderBy: OrderByOptions;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderByOptions>>;
}

export default function OrderBy({ orderBy, setOrderBy }: Props) {
  const [open, setOpen] = useState(false);
  const nameOrderBy = orderBy && options.find((option) => option.value === orderBy)?.name;

  return (
    <button
      className={classNames({
        [styles.orderBy]: true,
        [styles['orderBy--active']]: orderBy !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrderBy || 'Ordenar Por'}</span>
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div
        className={classNames({
          [styles.orderBy__options]: true,
          [styles['orderBy__options--active']]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.orderBy__option}
            key={option.value}
            onClick={() => setOrderBy(option.value as OrderByOptions)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
