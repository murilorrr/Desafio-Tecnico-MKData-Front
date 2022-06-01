import React from 'react';
import PropTypes from 'prop-types';

function EditedButton({ callback }) {
  return (
    <button
      type="button"
      onClick={callback}
    >
      EDITADO
    </button>
  );
}

EditedButton.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default EditedButton;
