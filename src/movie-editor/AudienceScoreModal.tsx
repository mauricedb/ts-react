import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  ArrayHelpers,
  FieldArray,
  Form,
  FormikProps,
  withFormik
} from 'formik';
import LabeledInput from './LabeledInput';

type AudienceScoreModalProps = {
  audienceScore: number;
  onSave: (score: number) => void;
};

type AudienceScoreModalState = {
  audienceScores: number[];
};

const AudienceScoreModal = ({
  values,
  submitForm
}: FormikProps<AudienceScoreModalState>) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-outline-secondary"
      >
        📖
      </button>

      <Modal keyboard={false} show={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Audience score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {values.audienceScores.map((_, index) => (
            <LabeledInput
              key={index}
              type="number"
              name={`audienceScores.${index}`}
              label="Audience score:"
            />
          ))}
          <hr />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              submitForm();
              setModalOpen(false);
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default withFormik<AudienceScoreModalProps, AudienceScoreModalState>({
  mapPropsToValues: ({ audienceScore }) => ({
    audienceScores: [audienceScore - 1, audienceScore, audienceScore + 1]
  }),
  handleSubmit: (values, formikBag) => {
    const sum = values.audienceScores.reduce((p, c) => p + c, 0);
    const score = sum / values.audienceScores.length;

    formikBag.props.onSave(score);
  },
  displayName: 'withFormik(AudienceScoreModal)'
})(AudienceScoreModal);
