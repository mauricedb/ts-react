import { Field, useField } from 'formik';

type CastProps = {
  baseName?: string;
  remove: () => void;
};

export const CastMember = ({ baseName, remove }: CastProps) => {
  const [{ value }] = useField<string[]>(`${baseName}characters`);

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
        <span>{value.join(', ')}</span>
      </div>
    </div>
  );
};
