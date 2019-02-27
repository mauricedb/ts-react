import { shapeEditorValuesSideEffects } from './shapeEditorValuesSideEffects';
import { ShapeEditorValues } from './shapeEditorValues';

describe('The shapeEditorValuesSideEffects', () => {
  describe('with locked dimensions', () => {
    const previous: ShapeEditorValues = {
      locked: true,
      width: 10,
      height: 10
    };

    test('has no side effects with no changes', () => {
      const current: ShapeEditorValues = { ...previous };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toBeNull();
    });

    test('updates the height when the width changes', () => {
      const current: ShapeEditorValues = { ...previous, width: 11 };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toMatchObject({
        width: 11,
        height: 11
      });
    });

    test('updates the width when the height changes', () => {
      const current: ShapeEditorValues = { ...previous, height: 12 };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toMatchObject({
        width: 12,
        height: 12
      });
    });
  });

  describe('with unlocked dimensions', () => {
    const previous: ShapeEditorValues = {
      locked: false,
      width: 10,
      height: 10
    };

    test('has no side effects with no changes', () => {
      const current: ShapeEditorValues = { ...previous };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toBeNull();
    });

    test('updates the height when the width changes', () => {
      const current: ShapeEditorValues = { ...previous, width: 11 };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toBeNull();
    });

    test('updates the width when the height changes', () => {
      const current: ShapeEditorValues = { ...previous, height: 12 };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toBeNull();
    });
  });

  describe('when locking dimensions', () => {
    const previous: ShapeEditorValues = {
      locked: false,
      width: 13,
      height: 14
    };

    test('updated the height to match the width', () => {
      const current: ShapeEditorValues = { ...previous, locked: true };
      const sideEffects = shapeEditorValuesSideEffects(current, previous);
      expect(sideEffects).toMatchObject({
        width: 13,
        height: 13
      });
    });
  });
});
