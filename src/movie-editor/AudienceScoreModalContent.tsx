import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, FormikProps } from 'formik';
import LabeledInput from './LabeledInput';
import Debug from './Debug';

type AudienceScoreModalContentProps = {
  audienceScore: number;
  onSave: (score: number) => void;
  closeModal?: () => void;
};

type AudienceScoreModalContentState = {
  audienceScores: number[];
};

const AudienceScoreModalContent = ({
  audienceScore,
  closeModal,
  onSave
}: AudienceScoreModalContentProps) => {
  return (
    <Formik
      initialValues={{
        audienceScores: [audienceScore - 1, audienceScore, audienceScore + 1]
      }}
      onSubmit={values => {
        const sum = values.audienceScores.reduce((p, c) => p + c, 0);
        const score = Math.round(sum / values.audienceScores.length);

        onSave(score);
        closeModal!();
      }}
      render={({
        values,
        dirty,
        isValid,
        submitForm,
        resetForm
      }: FormikProps<AudienceScoreModalContentState>) => (
        <>
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
            <Debug />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={submitForm}
              disabled={!dirty || !isValid}
            >
              Save
            </Button>
            <Button variant="outline-warning" onClick={() => resetForm()}>
              Reset
            </Button>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </>
      )}
    />
  );
};

export default AudienceScoreModalContent;
