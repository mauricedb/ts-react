import { InputHTMLAttributes } from 'react';
import { Field, useField } from 'formik';
import classNames from 'classnames';
import { ModalButton } from './ModalButton';
import { AudienceScoreModalContent } from './AudienceScoreModalContent';
type AudienceScoreProps = {};

const AudienceScore = ({
  className,
  ...props
}: AudienceScoreProps & InputHTMLAttributes<HTMLInputElement>) => {
  const name = 'ratings.audienceScore';
  const [{ value }, { error, touched }, { setValue }] = useField(name);
  const audienceScore = value;

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
            'is-valid': !error,
          })}
          {...props}
        />
        <div className="input-group-append">
          <ModalButton label="📖">
            <AudienceScoreModalContent
              audienceScore={audienceScore}
              onSave={(score) => setValue(score)}
            />
          </ModalButton>
        </div>
      </div>
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

AudienceScore.displayName = 'AudienceScore';

export default AudienceScore;
