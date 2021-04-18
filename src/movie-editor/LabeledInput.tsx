import { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import classNames from 'classnames';

type LabeledInputProps = {
  name: string;
  label: string;
  controlClassName?: string;
  labelClassName?: string;
};

export const LabeledInput = ({
  name,
  label,
  controlClassName,
  labelClassName,
  className,
  ...props
}: LabeledInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [, { error, touched }] = useField(name);

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
          'is-valid': !error,
        })}
      />
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
