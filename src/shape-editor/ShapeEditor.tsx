import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field } from 'formik';
import { FormikSideEffects } from 'use-formik-side-effects';
import { ShapeEditorValues, initialShapeEditorValues } from './shapeEditorValues';
import { shapeEditorValuesSideEffects } from './shapeEditorValuesSideEffects';

const ShapeEditor = () => {
  return (
    <Formik<ShapeEditorValues>
      initialValues={initialShapeEditorValues}
      onSubmit={() => {}}
    >
      {formik => (
        <div>
          <FormikSideEffects<ShapeEditorValues>
            determineSideEffects={shapeEditorValuesSideEffects}
          />
          <h2>Shape Editor</h2>
          <div>
            <label>
              <Field name="locked" type="checkbox" />
              Lock dimensions
            </label>
          </div>
          <div>
            Width: <Field name="width" type="number" />
          </div>

          <div>
            Height: <Field name="height" type="number" />
          </div>
          <hr />
          <h3>Formik</h3>
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </div>
      )}
    </Formik>
  );
};

export default ShapeEditor;
