'use client';

import React, { useContext } from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
  SxProps,
  Theme,
} from '@mui/material';
import { FormikContext, FieldInputProps, FieldMetaProps } from 'formik';

export interface FormikCheckboxProps extends Omit<CheckboxProps, 'name'> {
  /**
   * The name of the form field.
   * - When used **within a Formik form**:
   *   - If `name` is **provided**, the checkbox is connected to Formik's state and validation.
   *   - If `name` is **not provided**, the checkbox is **not connected** to Formik and behaves like a standard MUI `Checkbox`.
   * - When used **outside a Formik form**:
   *   - The component behaves like a standard MUI `Checkbox`.
   *   - The `name` prop, if provided, is passed directly to the MUI `Checkbox`.
   */
  name?: string;
  /**
   * The label displayed next to the checkbox.
   */
  label?: React.ReactNode;
  /**
   * The `sx` prop for styling the `FormControlLabel`.
   */
  labelSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `Checkbox`.
   */
  checkboxSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `FormHelperText`.
   */
  helperTextSx?: SxProps<Theme>;
}

/**
 * **FormikCheckbox Component**
 *
 * A reusable `Checkbox` component that integrates seamlessly with Formik when used within a Formik form.
 * It offers flexibility by behaving like a standard MUI `Checkbox` when used outside of Formik or when the `name` prop is not provided.
 *
 * ---
 *
 * **Usage Guidelines:**
 *
 * - **Within a Formik Form:**
 *   - **With `name` Provided:**
 *     - The checkbox connects to Formik's state and validation.
 *     - Changes in the checkbox update Formik's form values.
 *     - Validation messages from Formik are displayed automatically.
 *   - **Without `name`:**
 *     - The checkbox is **not connected** to Formik's state.
 *     - It behaves like a standard MUI `Checkbox`.
 *     - Useful for checkboxes that are not part of the form data.
 * - **Outside a Formik Form:**
 *   - The component behaves exactly like a standard MUI `Checkbox`.
 *   - The `name` prop, if provided, is passed directly to the `Checkbox`.
 *
 * ---
 *
 * **Important Notes:**
 *
 * - **Default Values:**
 *   - Do **not** use the `defaultChecked` prop to set default values for checkboxes within Formik.
 *   - Instead, set default values using Formik's `initialValues` prop for proper form state management.
 *
 *     ```tsx
 *     const initialValues = {
 *       acceptTerms: false,
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
 * - `name` (`string`, optional): The name of the form field. Connects the checkbox to Formik state when provided within a Formik form.
 * - `label` (`React.ReactNode`, optional): The label displayed next to the checkbox.
 * - `checked` (`boolean`, optional): If `true`, the checkbox is checked.
 * - `color` (`'primary' | 'secondary' | 'default'`, optional): The color of the checkbox.
 * - `required` (`boolean`, optional): If `true`, the checkbox will be required.
 * - `disabled` (`boolean`, optional): If `true`, the checkbox is disabled.
 * - `onChange` (`(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void`, optional): Callback fired when the state is changed.
 * - `labelPlacement` (`'end' | 'start' | 'top' | 'bottom'`, optional): The position of the label.
 * - `labelSx` (`SxProps<Theme>`, optional): Styling for the label component.
 * - `checkboxSx` (`SxProps<Theme>`, optional): Styling for the checkbox component.
 * - `helperTextSx` (`SxProps<Theme>`, optional): Styling for the helper text component.
 *
 * For a full list of props, refer to the MUI [`Checkbox` documentation](https://mui.com/material-ui/api/checkbox/).
 *
 * ---
 *
 * **Example Usage:**
 *
 * **Within Formik (Connected Checkbox):**
 *
 * ```tsx
 * <FormikCheckbox
 *   name="acceptTerms"
 *   label="I accept the terms and conditions"
 *   required
 * />
 * ```
 *
 * **Within Formik (Unconnected Checkbox):**
 *
 * ```tsx
 * <FormikCheckbox
 *   label="Subscribe to newsletter"
 * />
 * ```
 *
 * **Outside Formik:**
 *
 * ```tsx
 * <FormikCheckbox
 *   name="receiveUpdates"
 *   label="Receive updates via email"
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
 * import FormikCheckbox from './FormikCheckbox';
 * import { Button } from '@mui/material';
 *
 * const initialValues = {
 *   acceptTerms: false,
 *   subscribeNewsletter: false,
 * };
 *
 * const validationSchema = Yup.object({
 *   acceptTerms: Yup.boolean()
 *     .oneOf([true], 'You must accept the terms and conditions')
 *     .required('Required'),
 * });
 *
 * const RegistrationForm: React.FC = () => (
 *   <Formik
 *     initialValues={initialValues}
 *     validationSchema={validationSchema}
 *     onSubmit={(values) => {
 *       console.log(values);
 *     }}
 *   >
 *     {({ isSubmitting }) => (
 *       <Form>
 *         <FormikCheckbox
 *           name="acceptTerms"
 *           label="I accept the terms and conditions"
 *           required
 *         />
 *         <FormikCheckbox
 *           name="subscribeNewsletter"
 *           label="Subscribe to our newsletter"
 *         />
 *         <Button
 *           type="submit"
 *           variant="contained"
 *           color="primary"
 *           disabled={isSubmitting}
 *           sx={{ mt: 2 }}
 *         >
 *           {isSubmitting ? 'Submitting...' : 'Register'}
 *         </Button>
 *       </Form>
 *     )}
 *   </Formik>
 * );
 *
 * export default RegistrationForm;
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

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({
  name,
  label,
  labelSx,
  checkboxSx,
  helperTextSx,
  ...props
}) => {
  const formik = useContext(FormikContext);

  let field: FieldInputProps<any>;
  let meta: FieldMetaProps<any>;

  if (formik && name) {
    field = formik.getFieldProps({ name, type: 'checkbox' });
    meta = formik.getFieldMeta(name);
  } else {
    field = {
      name: name || '',
      value: '',
      onChange: () => {},
      onBlur: () => {},
      checked: false,
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
    <FormControl error={showError} component="fieldset">
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            {...props}
            checked={field.checked || false}
            sx={checkboxSx}
            name={name}
          />
        }
        label={label}
        sx={labelSx}
      />
      {showError && (
        <FormHelperText sx={helperTextSx}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

FormikCheckbox.displayName = 'FormikCheckbox';

export default FormikCheckbox;
