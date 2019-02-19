import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Field } from 'formik';

type LabeledInputProps = {
  name: string;
  label: string;
};

const LabeledInput = ({
  name,
  label,
  className,
  ...props
}: LabeledInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        className={classNames('form-control', className)}
        {...props}
      />
    </div>
  );
};

export default LabeledInput;
