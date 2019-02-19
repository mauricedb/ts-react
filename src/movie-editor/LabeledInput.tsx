import React, { InputHTMLAttributes } from 'react';
import { connect, Field, FormikContext, getIn } from 'formik';
import classNames from 'classnames';

type LabeledInputProps = {
  name: string;
  label: string;
};

const LabeledInput = ({
  name,
  label,
  className,
  formik,
  ...props
}: LabeledInputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    formik: FormikContext<any>;
  }) => {
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        className={classNames('form-control', className, {
          'is-invalid': error,
          'is-valid': !error
        })}
        {...props}
      />
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default connect<
  LabeledInputProps & InputHTMLAttributes<HTMLInputElement>
>(LabeledInput);
