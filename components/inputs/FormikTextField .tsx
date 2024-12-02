'use client';

import React, { useContext } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { FieldInputProps, FieldMetaProps, FormikContext } from 'formik';

export type FormikTextFieldProps = Omit<TextFieldProps, 'name'> & {
  /**
   * The name of the form field.
   * - When used **within a Formik form**:
   *   - If `name` is **provided**, the field is connected to Formik's state and validation.
   *   - If `name` is **not provided**, the field is **not connected** to Formik and behaves like a standard MUI `TextField`.
   * - When used **outside a Formik form**:
   *   - The component behaves like a standard MUI `TextField`.
   *   - The `name` prop, if provided, is passed directly to the MUI `TextField`.
   */
  name?: string;
};

/**
 * **FormikTextField Component**
 *
 * A reusable `TextField` component that integrates seamlessly with Formik when used within a Formik form.
 * It offers flexibility by behaving like a standard MUI `TextField` when used outside of Formik or when the `name` prop is not provided.
 *
 * ---
 *
 * **Usage Guidelines:**
 *
 * - **Within a Formik Form:**
 *   - **With `name` Provided:**
 *     - The field connects to Formik's state and validation.
 *     - Changes in the input update Formik's form values.
 *     - Validation messages from Formik are displayed automatically.
 *   - **Without `name`:**
 *     - The field is **not connected** to Formik's state.
 *     - It behaves like a standard MUI `TextField`.
 *     - Useful for inputs that are not part of the form data.
 * - **Outside a Formik Form:**
 *   - The component behaves exactly like a standard MUI `TextField`.
 *   - The `name` prop, if provided, is passed directly to the `TextField`.
 *
 * ---
 *
 * **Important Notes:**
 *
 * - **Default Values:**
 *   - Do **not** use the `defaultValue` prop to set default values for fields within Formik.
 *   - Instead, set default values using Formik's `initialValues` prop for proper form state management.
 *
 *     ```tsx
 *     const initialValues = {
 *       email: 'user@example.com',
 *       password: '',
 *     };
 *     ```
 *
 * - **Validation and Error Handling:**
 *   - Validation messages from Formik and Yup are displayed automatically when using this component within a Formik form.
 *   - Ensure your validation schema matches the form fields for accurate error messages.
 *
 * ---
 *
 * **Commonly Used Props:**
 *
 * - `name` (`string`, optional): The name of the form field. Connects the field to Formik state when provided within a Formik form.
 * - `label` (`string`, optional): The label displayed above the input field.
 * - `type` (`string`, optional): The type of input (`text`, `password`, `email`, etc.).
 * - `variant` (`'standard' | 'outlined' | 'filled'`, optional): The variant to use. Defaults to `outlined`.
 * - `fullWidth` (`boolean`, optional): If `true`, the input takes up the full width of its container.
 * - `margin` (`'none' | 'dense' | 'normal'`, optional): Specifies the margin.
 * - `required` (`boolean`, optional): If `true`, the label is displayed as required, and the input will be required.
 * - `placeholder` (`string`, optional): The short hint displayed in the input before the user enters a value.
 * - `multiline` (`boolean`, optional): If `true`, a multiline input is rendered.
 * - `rows` (`number`, optional): Specifies the number of visible text lines for the control.
 *
 * For a full list of props, refer to the MUI [`TextField` documentation](https://mui.com/material-ui/api/text-field/).
 *
 * ---
 *
 * **Example Usage:**
 *
 * **Within Formik (Connected Field):**
 *
 * ```tsx
 * <FormikTextField
 *   name="email"
 *   label="Email Address"
 *   type="email"
 *   fullWidth
 *   required
 *   placeholder="Enter your email"
 * />
 * ```
 *
 * **Within Formik (Unconnected Field):**
 *
 * ```tsx
 * <FormikTextField
 *   label="Comments"
 *   multiline
 *   rows={4}
 *   fullWidth
 * />
 * ```
 *
 * **Outside Formik:**
 *
 * ```tsx
 * <FormikTextField
 *   name="search"
 *   label="Search"
 *   placeholder="Type to search..."
 *   fullWidth
 * />
 * ```
 *
 * ---
 *
 * **Full Form Example:**
 *
 * ```tsx
 * import React from 'react';
 * import { Formik, Form } from 'formik';
 * import * as Yup from 'yup';
 * import FormikTextField from './FormikTextField';
 * import { Button } from '@mui/material';
 *
 * const initialValues = {
 *   email: '',
 *   password: '',
 *   description: '',
 * };
 *
 * const validationSchema = Yup.object({
 *   email: Yup.string()
 *     .email('Enter a valid email')
 *     .required('Email is required'),
 *   password: Yup.string()
 *     .min(8, 'Minimum 8 characters')
 *     .required('Password is required'),
 *   description: Yup.string()
 *     .max(500, 'Maximum 500 characters')
 *     .required('Description is required'),
 * });
 *
 * const FeedbackForm: React.FC = () => (
 *   <Formik
 *     initialValues={initialValues}
 *     validationSchema={validationSchema}
 *     onSubmit={(values) => {
 *       console.log(values);
 *     }}
 *   >
 *     {({ isSubmitting }) => (
 *       <Form>
 *         <FormikTextField
 *           name="email"
 *           label="Email"
 *           type="email"
 *           fullWidth
 *           required
 *         />
 *         <FormikTextField
 *           name="password"
 *           label="Password"
 *           type="password"
 *           fullWidth
 *           required
 *         />
 *         <FormikTextField
 *           name="description"
 *           label="Description"
 *           multiline
 *           rows={4}
 *           fullWidth
 *           required
 *         />
 *         <Button
 *           type="submit"
 *           variant="contained"
 *           color="primary"
 *           disabled={isSubmitting}
 *           sx={{ mt: 2 }}
 *         >
 *           {isSubmitting ? 'Submitting...' : 'Submit'}
 *         </Button>
 *       </Form>
 *     )}
 *   </Formik>
 * );
 *
 * export default FeedbackForm;
 * ```
 *
 * ---
 *
 * **Dependencies:**
 *
 * Ensure you have installed the necessary dependencies:
 *
 * ```bash
 * npm install formik yup @mui/material @emotion/react @emotion/styled
 * ```
 *
 * ---
 *
 * @component
 */

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  ...props
}) => {
  const formik = useContext(FormikContext);

  let field: FieldInputProps<any>;
  let meta: FieldMetaProps<any>;

  if (formik && name) {
    // Connected to Formik: get field props and meta
    field = formik.getFieldProps(name);
    meta = formik.getFieldMeta(name);
  } else {
    // Provide default field and meta values
    field = {
      name: name || '',
      value: '',
      onChange: () => {},
      onBlur: () => {},
    };
    meta = {
      value: '',
      error: undefined,
      touched: false,
      initialError: undefined,
      initialTouched: false,
      initialValue: '',
    };
  }

  const showError = Boolean(meta.touched && meta.error);

  return (
    <TextField
      {...field}
      {...props}
      name={name}
      error={showError || props.error}
      helperText={showError ? meta.error : props.helperText}
    />
  );
};

FormikTextField.displayName = 'FormikTextField';

export default FormikTextField;
