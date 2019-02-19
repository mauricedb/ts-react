import React from 'react';
import { connect, Field, FormikProps, getIn } from 'formik';

type CastProps = {
  baseName?: string;
  remove: () => void;
};

const CastMember = <P extends {}>({
  baseName,
  formik,
  remove
}: CastProps & {
  formik: FormikProps<P>;
}) => {
  const characters: string[] = getIn(formik.values, `${baseName}characters`);

  return (
    <div className="form-group">
      <label htmlFor="cast-name" className="form-label">
        Name:
      </label>
      <div className="input-group">
        <Field
          id="cast-name"
          name={`${baseName}name`}
          className="form-control"
        />
        <div className="input-group-append">
          <button onClick={remove} className="btn btn-outline-secondary">
            ✗
          </button>
        </div>
      </div>
      <div>
        <label>Characters:&nbsp;</label>
        <span>{characters.join(', ')}</span>
      </div>
    </div>
  );
};

export default connect<CastProps>(CastMember);
