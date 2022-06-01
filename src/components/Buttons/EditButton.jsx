import React from 'react';
import PropTypes from 'prop-types';

function EditButton({ callback }) {
  return (
    <button
      type="button"
      onClick={callback}
    >
      EDITAR
    </button>
  );
}

EditButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default EditButton;
