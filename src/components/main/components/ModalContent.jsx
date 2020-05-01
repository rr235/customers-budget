import React from 'react';
import { string, shape, number, func } from 'prop-types';
import Modal from '../../core/modal';
import InputForm from '../../core/inputForm';
import { formatCurrencyEUR } from '../../../helper';

const ModalContent = ({ data, onSubmit, onClose, onChange, className }) => {
  return (
    <Modal onClose={onClose}>
      <div className={className}>
        <div>{`Name: ${data.name}`}</div>
        <div>{`Total Budget: ${formatCurrencyEUR(data.budget)}`}</div>
        <div>{`Budget Spent: ${formatCurrencyEUR(data.budget_spent)}`}</div>
      </div>
      <InputForm
        label="Budget"
        id="budget"
        onSubmit={onSubmit}
        onChange={(value) => onChange(value, data.budget_spent)}
        value={data.budget}
      />
    </Modal>
  );
};

ModalContent.propTypes = {
  data: shape({
    name: string,
    budget: number,
    budget_spent: number,
  }),
  onSubmit: func.isRequired,
  onClose: func.isRequired,
  onChange: func.isRequired,
  className: string,
};

ModalContent.defaultProps = {
  data: {},
  className: '',
};

export default ModalContent;