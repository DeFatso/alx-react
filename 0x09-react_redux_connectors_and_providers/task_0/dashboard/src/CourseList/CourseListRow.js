import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const row_background_color = { backgroundColor: '#f5f5f5ab' };
  const header_row_background_color = { backgroundColor: '#deb5b545' };
  const row_checked_style = { backgroundColor: '#e6e4e4' };

  let style = isChecked ? row_checked_style : row_background_color;
  let node;

  if (isHeader) {
    style = header_row_background_color;
    if (!textSecondCell) {
      node = <th colSpan="2" className={css(rowStyles.th)}>{textFirstCell}</th>;
    } else {
      node = (
        <React.Fragment>
          <th className={css(rowStyles.NOTth)}>{textFirstCell}</th>
          <th className={css(rowStyles.NOTth)}>{textSecondCell}</th>
        </React.Fragment>
      );
    }
  } else {
    node = (
      <React.Fragment>
        <td>
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </React.Fragment>
    );
  }

  return <tr style={style}>{node}</tr>;
};

const rowStyles = StyleSheet.create({
  th: {
    textAlign: 'center',
    border: `1px solid`,
    paddingBottom: `0.5rem`,
  },
  NOTth: {
    textAlign: 'start',
    borderBottom: `1px solid`,
  },
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
};

export default CourseListRow;