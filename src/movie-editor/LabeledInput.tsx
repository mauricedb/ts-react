import React, { InputHTMLAttributes } from 'react';
import { connect, Field, FormikContext, getIn } from 'formik';
import classNames from 'classnames';

type LabeledInputProps = {
  name: string;
  label: string;
  controlClassName?: string;
  labelClassName?: string;
};

const LabeledInput = ({
  name,
  label,
  controlClassName,
  labelClassName,
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
    <div className={classNames('form-group', className)}>
      <label
        htmlFor={name}
        className={classNames('form-label', labelClassName)}
      >
        {label}
      </label>

      <Field
        {...props}
        id={name}
        name={name}
        className={classNames('form-control', controlClassName, {
          'is-invalid': error,
          'is-valid': !error
        })}
      />
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default connect<
  LabeledInputProps & InputHTMLAttributes<HTMLInputElement>
>(LabeledInput);
