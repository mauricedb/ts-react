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
    <div>
      <div>
        <label htmlFor="cast-name">Name:</label>
        <Field id="cast-name" name={`${baseName}name`} />
        <button onClick={remove}>X</button>
      </div>
      <div>
        <label>Characters: </label>
        <span>{characters.join(', ')}</span>
      </div>
    </div>
  );
};

export default connect<CastProps>(CastMember);
