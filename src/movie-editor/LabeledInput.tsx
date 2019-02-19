import React, { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

type LabeledInputProps = {
  name: string;
  label: string;
};

const LabeledInput = ({
  name,
  label,
  ...props
}: LabeledInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <Field id={name} name={name} className="form-control" {...props} />
    </div>
  );
};

export default LabeledInput;
