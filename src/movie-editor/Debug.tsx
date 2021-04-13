import React from 'react';
import { FormikConsumer } from 'formik';

var replacer = function (this: any, key: string, value: any) {
  if (this[key] instanceof Date) {
    const date: Date = this[key];

    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }

  return value;
};

export const Debug = () => (
  <div
    style={{
      margin: '3rem 0',
      borderRadius: 4,
      background: '#f6f8fa',
      boxShadow: '0 0 1px #eee inset',
    }}
  >
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: 11,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: '.5rem',
        background: '#555',
        color: '#fff',
        letterSpacing: '1px',
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {({ validationSchema, validate, ...rest }) => (
        <pre
          style={{
            fontSize: '.65rem',
            padding: '.25rem .5rem',
            overflowX: 'scroll',
          }}
        >
          {JSON.stringify(rest, replacer, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
);

Debug.displayName = 'Debug';
