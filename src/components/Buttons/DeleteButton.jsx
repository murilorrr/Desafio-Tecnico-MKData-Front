import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ callback }) {
  return (
    <button
      type="button"
      onClick={callback}
    >
      DELETE
    </button>
  );
}

DeleteButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default DeleteButton;
