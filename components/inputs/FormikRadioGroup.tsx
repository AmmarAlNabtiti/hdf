'use client';

import React, { useContext } from 'react';
import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  FormControl,
  FormControlProps,
  FormControlLabel,
  FormControlLabelProps,
  FormLabel,
  FormHelperText,
  FormHelperTextProps,
  SxProps,
  Theme,
  FormLabelProps,
} from '@mui/material';
import { FormikContext, FieldInputProps, FieldMetaProps } from 'formik';

export interface FormikRadioGroupOption {
  /**
   * The label displayed next to the radio button.
   */
  label: string;
  /**
   * The value associated with the radio button.
   */
  value: string;
}

export interface FormikRadioGroupProps extends Omit<RadioGroupProps, 'name'> {
  /**
   * The name of the form field.
   * - When used **within a Formik form**:
   *   - If `name` is **provided**, the radio group is connected to Formik's state and validation.
   *   - If `name` is **not provided**, the radio group is **not connected** to Formik and behaves like a standard MUI `RadioGroup`.
   * - When used **outside a Formik form**:
   *   - The component behaves like a standard MUI `RadioGroup`.
   *   - The `name` prop, if provided, is passed directly to the MUI `RadioGroup`.
   */
  name?: string;
  /**
   * The label displayed above the radio group.
   */
  label?: React.ReactNode;
  /**
   * The options for the radio buttons, each with a `label` and `value`.
   */
  options: FormikRadioGroupOption[];
  /**
   * If `true`, the radio buttons are displayed in a row.
   */
  row?: boolean;
  /**
   * Props applied to the `FormControl` component.
   */
  FormControlProps?: Partial<FormControlProps>;
  /**
   * Props applied to the `FormLabel` component.
   */
  FormLabelProps?: Partial<FormLabelProps>;
  /**
   * Props applied to the `FormControlLabel` components.
   */
  FormControlLabelProps?: Partial<FormControlLabelProps>;
  /**
   * Props applied to the `Radio` components.
   */
  RadioProps?: Partial<React.ComponentProps<typeof Radio>>;
  /**
   * Props applied to the `FormHelperText` component.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  /**
   * The `sx` prop for styling the `FormControl` component.
   */
  FormControlSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `FormLabel` component.
   */
  FormLabelSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `RadioGroup` component.
   */
  RadioGroupSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `FormControlLabel` components.
   */
  FormControlLabelSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `Radio` components.
   */
  RadioSx?: SxProps<Theme>;
  /**
   * The `sx` prop for styling the `FormHelperText` component.
   */
  FormHelperTextSx?: SxProps<Theme>;
}

/**
 * **FormikRadioGroup Component**
 *
 * A reusable `RadioGroup` component that integrates seamlessly with Formik when used within a Formik form.
 * It offers flexibility by behaving like a standard MUI `RadioGroup` when used outside of Formik or when the `name` prop is not provided.
 *
 * ---
 *
 * **Usage Guidelines:**
 *
 * - **Within a Formik Form:**
 *   - **With `name` Provided:**
 *     - The radio group connects to Formik's state and validation.
 *     - Changes in the radio selection update Formik's form values.
 *     - Validation messages from Formik are displayed automatically.
 *   - **Without `name`:**
 *     - The radio group is **not connected** to Formik's state.
 *     - It behaves like a standard MUI `RadioGroup`.
 *     - Useful for radio groups that are not part of the form data.
 * - **Outside a Formik Form:**
 *   - The component behaves exactly like a standard MUI `RadioGroup`.
 *   - The `name` prop, if provided, is passed directly to the `RadioGroup`.
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
 *       gender: '',
 *     };
 *     ```
 *
 * - **Validation and Error Handling:**
 *   - Validation messages from Formik and Yup are displayed automatically when using this component within a Formik form.
 *   - Ensure your validation schema matches the form fields for accurate error messages.
 *
 * - **Custom Styling:**
 *   - Use the `sx` props (`FormControlSx`, `FormLabelSx`, `RadioGroupSx`, etc.) to apply custom styles.
 *   - These props accept MUI's `SxProps<Theme>` type, allowing you to leverage the theme and styling capabilities of MUI.
 *
 * ---
 *
 * **Commonly Used Props:**
 *
 * - `name` (`string`, optional): The name of the form field.
 * - `label` (`React.ReactNode`, optional): The label displayed above the radio group.
 * - `options` (`FormikRadioGroupOption[]`, required): The options for the radio buttons.
 * - `row` (`boolean`, optional): If `true`, the radio buttons are displayed in a row.
 * - `FormControlProps` (`Partial<FormControlProps>`, optional): Props applied to the `FormControl` component.
 * - `FormLabelProps` (`Partial<FormLabelProps>`, optional): Props applied to the `FormLabel` component.
 * - `FormControlLabelProps` (`Partial<FormControlLabelProps>`, optional): Props applied to the `FormControlLabel` components.
 * - `RadioProps` (`Partial<RadioProps>`, optional): Props applied to the `Radio` components.
 * - `FormHelperTextProps` (`Partial<FormHelperTextProps>`, optional): Props applied to the `FormHelperText` component.
 * - `FormControlSx`, `FormLabelSx`, `RadioGroupSx`, `FormControlLabelSx`, `RadioSx`, `FormHelperTextSx`: Styling props for respective components.
 *
 * For a full list of props, refer to the MUI [`RadioGroup` documentation](https://mui.com/material-ui/api/radio-group/).
 *
 * ---
 *
 * **Example Usage:**
 *
 * **Within Formik (Connected RadioGroup):**
 *
 * ```tsx
 * <FormikRadioGroup
 *   name="gender"
 *   label="Gender"
 *   options={[
 *     { label: 'Male', value: 'male' },
 *     { label: 'Female', value: 'female' },
 *     { label: 'Other', value: 'other' },
 *   ]}
 *   row
 * />
 * ```
 *
 * **Within Formik (Unconnected RadioGroup):**
 *
 * ```tsx
 * <FormikRadioGroup
 *   label="Preferred Contact Method"
 *   options={[
 *     { label: 'Email', value: 'email' },
 *     { label: 'Phone', value: 'phone' },
 *   ]}
 * />
 * ```
 *
 * **Outside Formik:**
 *
 * ```tsx
 * <FormikRadioGroup
 *   name="subscription"
 *   label="Subscription Plan"
 *   options={[
 *     { label: 'Free', value: 'free' },
 *     { label: 'Premium', value: 'premium' },
 *     { label: 'Enterprise', value: 'enterprise' },
 *   ]}
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
 * import FormikRadioGroup from './FormikRadioGroup';
 * import { Button } from '@mui/material';
 *
 * const initialValues = {
 *   gender: '',
 * };
 *
 * const validationSchema = Yup.object({
 *   gender: Yup.string().required('Please select your gender'),
 * });
 *
 * const GenderForm: React.FC = () => (
 *   <Formik
 *     initialValues={initialValues}
 *     validationSchema={validationSchema}
 *     onSubmit={(values) => {
 *       console.log(values);
 *     }}
 *   >
 *     {({ isSubmitting }) => (
 *       <Form>
 *         <FormikRadioGroup
 *           name="gender"
 *           label="Gender"
 *           options={[
 *             { label: 'Male', value: 'male' },
 *             { label: 'Female', value: 'female' },
 *             { label: 'Other', value: 'other' },
 *           ]}
 *           row
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
 * export default GenderForm;
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

const FormikRadioGroup: React.FC<FormikRadioGroupProps> = ({
  name,
  label,
  options,
  row = false,
  FormControlProps,
  FormLabelProps,
  FormControlLabelProps,
  RadioProps,
  FormHelperTextProps,
  FormControlSx,
  FormLabelSx,
  RadioGroupSx,
  FormControlLabelSx,
  RadioSx,
  FormHelperTextSx,
  ...radioGroupProps
}) => {
  const formik = useContext(FormikContext);

  let field: FieldInputProps<any>;
  let meta: FieldMetaProps<any>;

  if (formik && name) {
    field = formik.getFieldProps(name);
    meta = formik.getFieldMeta(name);
  } else {
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
    <FormControl
      component="fieldset"
      error={showError}
      {...FormControlProps}
      sx={FormControlSx}
    >
      {label && (
        <FormLabel {...FormLabelProps} sx={FormLabelSx}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        {...field}
        {...radioGroupProps}
        row={row}
        onChange={(event) => {
          if (formik && name) {
            formik.setFieldValue(name, event.target.value);
          }
        }}
        sx={RadioGroupSx}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio {...RadioProps} sx={RadioSx} />}
            label={option.label}
            {...FormControlLabelProps}
            sx={FormControlLabelSx}
          />
        ))}
      </RadioGroup>
      {showError && (
        <FormHelperText {...FormHelperTextProps} sx={FormHelperTextSx}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormikRadioGroup.displayName = 'FormikRadioGroup';

export default FormikRadioGroup;
