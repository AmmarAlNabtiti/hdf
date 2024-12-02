'use client';

import React, { useContext } from 'react';
import {
  Switch,
  SwitchProps,
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
} from '@mui/material';
import { FormikContext, FieldInputProps, FieldMetaProps } from 'formik';

export interface FormikSwitchProps extends Omit<SwitchProps, 'name'> {
  /**
   * The name of the form field.
   * - When used **within a Formik form**:
   *   - If `name` is **provided**, the switch is connected to Formik's state and validation.
   *   - If `name` is **not provided**, the switch is **not connected** to Formik and behaves like a standard MUI `Switch`.
   * - When used **outside a Formik form**:
   *   - The component behaves like a standard MUI `Switch`.
   *   - The `name` prop, if provided, is passed directly to the MUI `Switch`.
   */
  name?: string;
  /**
   * The label displayed next to the switch.
   */
  label?: React.ReactNode;
  /**
   * The position of the label relative to the switch.
   * - Options: `'end' | 'start' | 'top' | 'bottom'`
   * - Defaults to `'end'`.
   */
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  /**
   * Props applied to the `FormControl` component.
   */
  FormControlProps?: Partial<FormControlProps>;
  /**
   * Props applied to the `FormControlLabel` component.
   */
  FormControlLabelProps?: Partial<FormControlLabelProps>;
}

/**
 * **FormikSwitch Component**
 *
 * A reusable `Switch` component that integrates seamlessly with Formik when used within a Formik form.
 * It offers flexibility by behaving like a standard MUI `Switch` when used outside of Formik or when the `name` prop is not provided.
 *
 * ---
 *
 * **Usage Guidelines:**
 *
 * - **Within a Formik Form:**
 *   - **With `name` Provided:**
 *     - The switch connects to Formik's state and validation.
 *     - Changes in the switch update Formik's form values.
 *     - Validation messages from Formik are displayed automatically.
 *   - **Without `name`:**
 *     - The switch is **not connected** to Formik's state.
 *     - It behaves like a standard MUI `Switch`.
 *     - Useful for switches that are not part of the form data.
 * - **Outside a Formik Form:**
 *   - The component behaves exactly like a standard MUI `Switch`.
 *   - The `name` prop, if provided, is passed directly to the `Switch`.
 *
 * ---
 *
 * **Important Notes:**
 *
 * - **Default Values:**
 *   - Do **not** use the `defaultChecked` prop to set default values for switches within Formik.
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
 * - `name` (`string`, optional): The name of the form field. Connects the switch to Formik state when provided within a Formik form.
 * - `label` (`React.ReactNode`, optional): The label displayed next to the switch.
 * - `labelPlacement` (`'end' | 'start' | 'top' | 'bottom'`, optional): The position of the label relative to the switch. Defaults to `'end'`.
 * - `color` (`'primary' | 'secondary' | 'default'`, optional): The color of the switch.
 * - `disabled` (`boolean`, optional): If `true`, the switch will be disabled.
 * - `required` (`boolean`, optional): If `true`, the switch will be required.
 * - `size` (`'small' | 'medium'`, optional): The size of the switch.
 * - `FormControlProps` (`Partial<FormControlProps>`, optional): Props applied to the `FormControl` component.
 * - `FormControlLabelProps` (`Partial<FormControlLabelProps>`, optional): Props applied to the `FormControlLabel` component.
 *
 * For a full list of props, refer to the MUI [`Switch` documentation](https://mui.com/material-ui/api/switch/).
 *
 * ---
 *
 * **Example Usage:**
 *
 * **Within Formik (Connected Switch):**
 *
 * ```tsx
 * <FormikSwitch
 *   name="acceptTerms"
 *   label="I accept the terms and conditions"
 *   color="primary"
 *   required
 * />
 * ```
 *
 * **Within Formik (Unconnected Switch):**
 *
 * ```tsx
 * <FormikSwitch
 *   label="Enable notifications"
 *   color="secondary"
 * />
 * ```
 *
 * **Outside Formik:**
 *
 * ```tsx
 * <FormikSwitch
 *   name="darkMode"
 *   label="Dark Mode"
 *   color="default"
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
 * import FormikSwitch from './FormikSwitch';
 * import { Button } from '@mui/material';
 *
 * const initialValues = {
 *   acceptTerms: false,
 *   enableNotifications: true,
 * };
 *
 * const validationSchema = Yup.object({
 *   acceptTerms: Yup.boolean()
 *     .oneOf([true], 'You must accept the terms and conditions')
 *     .required('Required'),
 * });
 *
 * const SettingsForm: React.FC = () => (
 *   <Formik
 *     initialValues={initialValues}
 *     validationSchema={validationSchema}
 *     onSubmit={(values) => {
 *       console.log(values);
 *     }}
 *   >
 *     {({ isSubmitting }) => (
 *       <Form>
 *         <FormikSwitch
 *           name="acceptTerms"
 *           label="I accept the terms and conditions"
 *           color="primary"
 *           required
 *         />
 *         <FormikSwitch
 *           name="enableNotifications"
 *           label="Enable Notifications"
 *           color="secondary"
 *         />
 *         <Button
 *           type="submit"
 *           variant="contained"
 *           color="primary"
 *           disabled={isSubmitting}
 *           sx={{ mt: 2 }}
 *         >
 *           {isSubmitting ? 'Submitting...' : 'Save Settings'}
 *         </Button>
 *       </Form>
 *     )}
 *   </Formik>
 * );
 *
 * export default SettingsForm;
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
const FormikSwitch: React.FC<FormikSwitchProps> = ({
  name,
  label,
  labelPlacement = 'end',
  FormControlProps,
  FormControlLabelProps,
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
    <FormControl error={showError} {...FormControlProps}>
      <FormControlLabel
        control={
          <Switch
            {...field}
            {...props}
            checked={field.checked || false}
            name={name}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
        {...FormControlLabelProps}
      />
      {showError && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

FormikSwitch.displayName = 'FormikSwitch';

export default FormikSwitch;
