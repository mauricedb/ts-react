import { TextareaHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import classNames from 'classnames';

type LabeledTextAreaProps = {
  name: string;
  label: string;
  controlClassName?: string;
  labelClassName?: string;
};

export const LabeledTextArea = ({
  name,
  label,
  rows = 5,
  controlClassName,
  labelClassName,
  className,
  ...props
}: LabeledTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
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
        component="textarea"
        rows={rows}
        className={classNames('form-control', controlClassName, {
          'is-invalid': error,
          'is-valid': !error,
        })}
      />
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
