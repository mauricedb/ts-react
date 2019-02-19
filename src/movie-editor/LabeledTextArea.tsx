import React, { TextareaHTMLAttributes } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';

type LabeledTextAreaProps = {
  name: string;
  label: string;
};

const LabeledTextArea = ({
  name,
  label,
  rows = 5,
  className,
  ...props
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
        className={classNames('form-control', className)}
        {...props}
      />
    </div>
  );
};

export default LabeledTextArea;
