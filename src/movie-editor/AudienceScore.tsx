import React, { InputHTMLAttributes, useState } from 'react';
import { connect, Field, FormikContext, getIn, withFormik } from 'formik';
import classNames from 'classnames';
import { Modal, Button } from 'react-bootstrap';
import LabeledInput from './LabeledInput';
import AudienceScoreModal from './AudienceScoreModal';
type AudienceScoreProps = {};

const AudienceScore = ({
  className,
  formik,
  ...props
}: AudienceScoreProps &
  InputHTMLAttributes<HTMLInputElement> & {
    formik: FormikContext<any>;
  }) => {
  const name = 'ratings.audienceScore';
  const audienceScore = getIn(formik.values, name);
  const error = getIn(formik.errors, name);
  const touched = getIn(formik.touched, name);

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        Audience score:
      </label>

      <div className="input-group">
        <Field
          id={name}
          name={name}
          type="number"
          className={classNames('form-control', className, {
            'is-invalid': error,
            'is-valid': !error
          })}
          {...props}
        />
        <div className="input-group-append">
          <AudienceScoreModal
            audienceScore={audienceScore}
            onSave={(score: number) => {
              formik.setFieldValue(name, score);
            }}
          />
        </div>
      </div>
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default connect<
  AudienceScoreProps & InputHTMLAttributes<HTMLInputElement>
>(AudienceScore);
