import React from 'react';
import PropTypes from 'prop-types';

import { formatCurrency } from '../../../../utils/utilities';
import './OrdersHeader.css';

function OrdersHeader({ title, type, averagePrice }) {
  const formattedType = type[0].toUpperCase() + type.slice(1);
  const formattedAveragePrice = formatCurrency(averagePrice, 2);
  return (
    <header className="orders-header">
      <div>{title}</div>
      <div>{formattedType} {formattedAveragePrice}</div>
    </header>
  );
}

OrdersHeader.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averagePrice: PropTypes.number.isRequired,
};

export default OrdersHeader;
