import React, { TextareaHTMLAttributes } from 'react';
import { connect, Field, FormikContext, getIn } from 'formik';
import classNames from 'classnames';

type LabeledTextAreaProps = {
  name: string;
  label: string;
  controlClassName?: string;
  labelClassName?: string;
};

const LabeledTextArea = ({
  name,
  label,
  rows = 5,
  controlClassName,
  labelClassName,
  className,
  formik,
  ...props
}: LabeledTextAreaProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
        component="textarea"
        rows={rows}
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
  LabeledTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(LabeledTextArea);
