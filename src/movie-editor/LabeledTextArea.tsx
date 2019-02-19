import React, { TextareaHTMLAttributes } from 'react';
import { Field } from 'formik';

type LabeledTextAreaProps = {
  name: string;
  label: string;
};

const LabeledTextArea = ({
  name,
  label,
  rows = 5
}: LabeledTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        component="textarea"
        rows={rows}
        className="form-control"
      />
    </div>
  );
};

export default LabeledTextArea;
