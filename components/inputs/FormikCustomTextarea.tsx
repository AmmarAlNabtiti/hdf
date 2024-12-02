'use client';

import React, { useContext } from 'react';
import {
  TextareaAutosize as BaseTextareaAutosize,
  TextareaAutosizeProps,
} from '@mui/base';
import { styled, SxProps } from '@mui/system';
import { FormikContext, FieldInputProps, FieldMetaProps } from 'formik';
import { Theme } from '@mui/material';

export interface CustomTextareaProps
  extends Omit<TextareaAutosizeProps, 'name'> {
  /**
   * Custom styles to override default styling using inline styles.
   * Example:
   * ```tsx
   * <CustomMUITextarea sx={{ width: '500px', border: '1px solid blue' }} />
   * ```
   */
  sx?: SxProps<Theme>;

  /**
   * The name of the form field.
   * - When used **within a Formik form**:
   *   - If `name` is **provided**, the textarea is connected to Formik's state and validation.
   *   - If `name` is **not provided**, the textarea is **not connected** to Formik and behaves like a standard MUI `TextareaAutosize`.
   * - When used **outside a Formik form**:
   *   - The component behaves like a standard MUI `TextareaAutosize`.
   *   - The `name` prop, if provided, is passed directly to the MUI `TextareaAutosize`.
   */
  name?: string;

  /**
   * Custom styles applied when validation errors occur.
   */
  errorStyles?: {
    /**
     * Styles applied to the textarea when an error occurs.
     */
    textarea?: React.CSSProperties;

    /**
     * Styles applied to the error message text.
     */
    errorText?: React.CSSProperties;
  };
}

const CustomTextarea = styled(BaseTextareaAutosize)(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.5,
  padding: '8px 12px',
  borderRadius: '8px',
  color: theme.palette.mode === 'dark' ? '#C7D0DD' : '#1C2025',
  backgroundColor: theme.palette.mode === 'dark' ? '#1C2025' : '#fff',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#DAE2ED'}`,
  boxShadow: `0px 2px 2px ${
    theme.palette.mode === 'dark' ? '#1C2025' : '#F3F6F9'
  }`,
  resize: 'none',
  overflowY: 'auto',

  '&:hover': {
    borderColor: '#3399FF',
  },

  '&:focus': {
    borderColor: '#007FFF',
    boxShadow: `0 0 0 3px ${
      theme.palette.mode === 'dark' ? '#0072E5' : '#b6daff'
    }`,
  },

  '&:focus-visible': {
    outline: 0,
  },
}));

/**
 * **CustomMUITextarea Component**
 *
 * A highly customizable textarea component built with MUI's `TextareaAutosize`.
 * It supports dynamic resizing, scrolling, light and dark themes, and flexible row constraints.
 * Additionally, it integrates seamlessly with Formik for form state management and validation.
 *
 * ---
 *
 * ### Usage Guidelines
 *
 * - **Autosizing:**
 *   - Automatically adjusts height based on content.
 *   - `minRows`: Sets the minimum number of visible rows.
 *   - `maxRows`: Sets the maximum number of visible rows before scrolling is enabled.
 *
 * - **Scrolling:**
 *   - Enabled when content exceeds the height defined by `maxRows`.
 *   - Vertical scrolling is automatic; no additional props are needed.
 *   - Scrollbar appearance can be customized using CSS.
 *
 * - **Formik Integration:**
 *   - When used within Formik and `name` is provided, connects to Formik's state and validation.
 *   - Displays validation errors automatically.
 *
 * - **Styling:**
 *   - Customizable via the `sx` prop and `errorStyles`.
 *   - Adapts to light and dark themes.
 *
 * - **Accessibility:**
 *   - Adds `aria-invalid="true"` when there's a validation error.
 *
 * ---
 *
 * ### Important Notes
 *
 * - **Default Values:**
 *   - Do **not** use the `defaultValue` prop within Formik.
 *   - Set default values using Formik's `initialValues`.
 *
 *     ```tsx
 *     const initialValues = {
 *       feedback: '',
 *     };
 *     ```
 *
 * - **Validation and Error Handling:**
 *   - Ensure your validation schema matches the form fields.
 *   - Use `errorStyles` to customize error appearance.
 *
 * - **Customizing Scrollbar Appearance:**
 *   - Use CSS to style the scrollbar.
 *   - Example:
 *
 *     ```css
 *     textarea::-webkit-scrollbar {
 *       width: 8px;
 *     }
 *     textarea::-webkit-scrollbar-thumb {
 *       background-color: rgba(0, 0, 0, 0.2);
 *       border-radius: 4px;
 *     }
 *     ```
 *
 * ---
 *
 * ### Commonly Used Props
 *
 * - `name` (`string`, optional): Form field name for Formik integration.
 * - `placeholder` (`string`, optional): Placeholder text.
 * - `minRows` (`number`, optional): Minimum number of visible rows. Defaults to `1`.
 * - `maxRows` (`number`, optional): Maximum number of visible rows before scrolling.
 * - `sx` (`React.CSSProperties`, optional): Custom styles for the textarea.
 * - `errorStyles` (`{ textarea?: React.CSSProperties; errorText?: React.CSSProperties; }`, optional): Styles applied when validation errors occur.
 *
 * For a full list of props, refer to the MUI [`TextareaAutosize` documentation](https://mui.com/base/react-textarea-autosize/).
 *
 * ---
 *
 * ### Example Usage
 *
 * **Autosizing with Scrolling Enabled:**
 *
 * ```tsx
 * <CustomMUITextarea
 *   name="comments"
 *   placeholder="Your comments..."
 *   minRows={3}
 *   maxRows={5}
 *   sx={{ width: '100%' }}
 * />
 * ```
 *
 * **Autosizing without Scrolling (Flexible Height):**
 *
 * ```tsx
 * <CustomMUITextarea
 *   name="bio"
 *   placeholder="Tell us about yourself..."
 *   minRows={4}
 *   sx={{ width: '100%' }}
 * />
 * ```
 *
 * **Customizing Scrollbar Appearance:**
 *
 * ```tsx
 * <CustomMUITextarea
 *   name="description"
 *   placeholder="Enter a detailed description..."
 *   minRows={5}
 *   maxRows={10}
 *   sx={{
 *     width: '100%',
 *     overflowY: 'auto',
 *     scrollbarWidth: 'thin', // For Firefox
 *   }}
 *   errorStyles={{
 *     textarea: { borderColor: 'red' },
 *     errorText: { color: 'red' },
 *   }}
 * />
 * ```
 *
 * ---
 *
 * ### Full Form Example
 *
 * ```tsx
 * import React from 'react';
 * import { Formik, Form } from 'formik';
 * import * as Yup from 'yup';
 * import CustomMUITextarea from './CustomMUITextarea';
 * import { Button } from '@mui/material';
 *
 * const initialValues = {
 *   feedback: '',
 * };
 *
 * const validationSchema = Yup.object({
 *   feedback: Yup.string()
 *     .min(10, 'Feedback must be at least 10 characters')
 *     .required('Feedback is required'),
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
 *         <CustomMUITextarea
 *           name="feedback"
 *           placeholder="Write your feedback..."
 *           minRows={4}
 *           maxRows={8}
 *           sx={{ width: '100%' }}
 *           errorStyles={{
 *             textarea: { borderColor: 'red', backgroundColor: '#ffe6e6' },
 *             errorText: { color: 'red', fontWeight: 'bold' },
 *           }}
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
 * ### Dependencies
 *
 * Ensure you have installed the necessary dependencies:
 *
 * ```bash
 * npm install formik yup @mui/material @mui/system @emotion/react @emotion/styled
 * ```
 *
 * ---
 *
 * ### Notes
 *
 * - The component is designed to be used both within and outside of a Formik form.
 * - The `minRows` and `maxRows` props are crucial for controlling autosizing and scrolling behavior.
 * - Customizing the scrollbar may require additional CSS or third-party libraries for cross-browser support.
 * - Always ensure that the `name` prop is unique within the form to avoid conflicts in Formik's state management.
 *
 * ---
 *
 * @component
 */

const FormikCustomTextarea: React.FC<CustomTextareaProps> = ({
  sx,
  name,
  errorStyles,
  ...props
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
    <div style={{ position: 'relative', width: '100%' }}>
      <CustomTextarea
        {...field}
        {...props}
        name={name}
        style={{
          ...(showError ? errorStyles?.textarea : {}),
        }}
        aria-invalid={showError}
      />
      {showError && (
        <p
          style={{
            color: 'red',
            fontSize: '0.75rem',
            marginTop: '4px',
            ...errorStyles?.errorText,
          }}
        >
          {meta.error}
        </p>
      )}
    </div>
  );
};

FormikCustomTextarea.displayName = 'FormikCustomTextarea';

export default FormikCustomTextarea;
