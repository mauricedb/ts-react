import React, { TextareaHTMLAttributes } from 'react';
import { connect, Field, FormikContext, getIn } from 'formik';
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
  formik,
  ...props
}: LabeledTextAreaProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
        component="textarea"
        rows={rows}
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
  LabeledTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>(LabeledTextArea);
