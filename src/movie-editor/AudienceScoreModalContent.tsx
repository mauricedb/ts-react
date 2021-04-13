import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, FormikProps } from 'formik';
import LabeledInput from './LabeledInput';
import { Debug } from './Debug';

type AudienceScoreModalContentProps = {
  audienceScore: number;
  onSave: (score: number) => void;
  closeModal?: () => void;
};

type AudienceScoreModalContentState = {
  audienceScores: number[];
};

export const AudienceScoreModalContent = ({
  audienceScore,
  closeModal,
  onSave,
}: AudienceScoreModalContentProps) => {
  return (
    <Formik
      initialValues={{
        audienceScores: [audienceScore - 1, audienceScore, audienceScore + 1],
      }}
      onSubmit={(values) => {
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
        resetForm,
      }: FormikProps<AudienceScoreModalContentState>) => {
        const isWindows = navigator.platform === 'Win32';
        const saveButton = (
          <Button
            variant="primary"
            onClick={submitForm}
            disabled={!dirty || !isValid}
          >
            Save
          </Button>
        );
        const cancelButton = (
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
        );

        return (
          <>
            <Modal.Header closeButton>
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
              {isWindows ? saveButton : cancelButton}
              <Button variant="outline-warning" onClick={() => resetForm()}>
                Reset
              </Button>
              {isWindows ? cancelButton : saveButton}
            </Modal.Footer>
          </>
        );
      }}
    />
  );
};

AudienceScoreModalContent.displayName = 'AudienceScoreModalContent';
