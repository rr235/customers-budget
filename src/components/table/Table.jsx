import React from 'react';
import { arrayOf, shape, string, object, bool } from 'prop-types';
import styles from './table.styles.scss';

const Table = ({ data, keys }) => {
  const getHead = () =>
    keys.map(({ displayName, name }) => <th key={name}>{displayName}</th>);

  const getCol = (row) => {
    return keys.map(({ name, formatCurrencyEuro }) => {
      if (row[name]) {
        let value = row[name];
        if (typeof value === 'number' && formatCurrencyEuro) {
          value = value.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR',
          });
        }

        return <td key={name}>{value}</td>;
      }
      return null;
    });
  };

  const getRow = () => {
    // eslint-disable-next-line react/no-array-index-key
    return data.map((row, index) => <tr key={index}>{getCol(row)}</tr>);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>{getHead()}</tr>
      </thead>
      <tbody>{getRow()}</tbody>
    </table>
  );
};

Table.propTypes = {
  keys: arrayOf(
    shape({
      name: string,
      displayName: string,
      formatCurrencyEuro: bool,
    })
  ),
  data: arrayOf(object),
};

Table.defaultProps = {
  keys: [],
  data: [],
};

export default Table;
