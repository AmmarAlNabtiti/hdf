'use client';
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

/**
 * **CustomButton Component**
 *
 * A customizable button component built upon MUI's `Button`, providing enhanced features
 * and consistent styling across your application. Ideal for primary actions, secondary actions,
 * and customizable button behaviors.
 *
 * @component
 * @param {CustomButtonProps} props - The props for the CustomButton component.
 * @returns {JSX.Element} The rendered CustomButton component.
 *
 * **Commonly Used Props:**
 *
 * - `variant` (string, optional): The variant to use. Options are `'text'`, `'outlined'`, and `'contained'`. Defaults to `'text'`.
 * - `color` (string, optional): The color of the button. Options include `'primary'`, `'secondary'`, `'success'`, `'error'`, `'info'`, `'warning'`, and `'inherit'`. Defaults to `'primary'`.
 * - `size` (string, optional): The size of the button. Options are `'small'`, `'medium'`, and `'large'`. Defaults to `'medium'`.
 * - `onClick` (function, optional): Callback fired when the button is clicked.
 * - `disabled` (boolean, optional): If `true`, the button is disabled. Defaults to `false`.
 * - `startIcon` (React.ReactNode, optional): Element placed before the children.
 * - `endIcon` (React.ReactNode, optional): Element placed after the children.
 * - `fullWidth` (boolean, optional): If `true`, the button will take up the full width of its container. Defaults to `false`.
 * - `loading` (boolean, optional): If `true`, the button shows a loading state. Defaults to `false`.
 * - `loadingIndicator` (React.ReactNode, optional): The content displayed when `loading` is true.
 * - `children` (React.ReactNode, required): The content of the button.
 *
 * @example
 * // Usage Example
 * import React from 'react';
 * import CustomButton from './CustomButton';
 * import SaveIcon from '@mui/icons-material/Save';
 *
 * const MyApp = () => (
 *   <div>
 *     <CustomButton
 *       variant="contained"
 *       color="primary"
 *       size="large"
 *       onClick={() => alert('Button clicked!')}
 *       startIcon={<SaveIcon />}
 *     >
 *       Save
 *     </CustomButton>
 *   </div>
 * );
 *
 * export default MyApp;
 */
const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'text',
  color = 'primary',
  size = 'medium',
  loading = false,
  loadingIndicator,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  children,
  ...props
}: CustomButtonProps): JSX.Element => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled || loading}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      {...props}
    >
      {loading ? loadingIndicator || 'Loading...' : children}
    </Button>
  );
};

export default CustomButton;

/**
 * **CustomButtonProps Interface**
 *
 * The props for the CustomButton component, extending MUI's `ButtonProps`.
 *
 * @interface
 * @extends {ButtonProps}
 * @property {boolean} [loading=false] - If `true`, the button shows a loading state.
 * @property {React.ReactNode} [loadingIndicator] - The content displayed when `loading` is true.
 */
export interface CustomButtonProps extends ButtonProps {
  /**
   * If `true`, the button shows a loading state.
   * @default false
   */
  loading?: boolean;
  /**
   * The content displayed when `loading` is true.
   */
  loadingIndicator?: React.ReactNode;
}
