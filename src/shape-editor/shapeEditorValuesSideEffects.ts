import { SideEffects } from 'use-formik-side-effects';
import { ShapeEditorValues } from './shapeEditorValues';

export const shapeEditorValuesSideEffects: SideEffects<ShapeEditorValues> = (
  currentValues,
  previousValues
): ShapeEditorValues | null => {
  if (currentValues.locked && !previousValues.locked) {
    return { ...currentValues, height: currentValues.width };
  } else if (currentValues.locked) {
    if (currentValues.width !== previousValues.width) {
      return { ...currentValues, height: currentValues.width };
    } else if (currentValues.height !== previousValues.height) {
      return { ...currentValues, width: currentValues.height };
    }
  }
  return null;
};
