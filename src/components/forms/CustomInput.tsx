import { FormikProps } from 'formik';
import React, { HTMLAttributes, InputHTMLAttributes, useEffect } from 'react';
import { get as getAttribute } from 'lodash';
type CustomInputPropType<T> = {
  labelText: string;
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  ariaLabel?: string;
  required?: boolean;
  classNames?: HTMLAttributes<HTMLDivElement>['className'];
  labelClassNames?: HTMLAttributes<HTMLDivElement>['className'];
  formik: FormikProps<T>;
};
function CustomInput<T>({
  labelText,
  name,
  formik,
  type = 'text',
  ariaLabel = name,
  placeholder = name,
  required = false,
  classNames = '',
  labelClassNames = ''
}: CustomInputPropType<T>) {
  const errors = getAttribute(formik.errors, name);
  return (
    <div className="mt-3">
      <label
        className={`block text-lg text-gray-600 ${labelClassNames}`}
        htmlFor="cus_name"
      >
        {labelText}
      </label>
      <input
        className={`w-full px-5 py-2 text-gray-700 bg-gray-100 border-0 rounded ${classNames}`}
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={formik.handleChange}
        value={getAttribute(formik.values, name)}
      />
      {errors && (
        <div
          className="p-2 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300"
          role="alert"
        >
          {errors}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
