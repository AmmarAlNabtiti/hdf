'use client';

import React from 'react';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

interface CustomLoadingButtonProps extends LoadingButtonProps {
  // Add any custom props here if needed
}

/**
 * **CustomLoadingButton Component**
 *
 * A reusable `LoadingButton` component that provides default styling and can be customized for your needs.
 * It acts as a wrapper around MUI's `LoadingButton`, providing default props and allowing for additional functionality.
 *
 * **Commonly Used Props:**
 *
 * - `variant` (`'text' | 'outlined' | 'contained'`, optional): The variant to use. Defaults to `'contained'`.
 * - `color` (`'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'`, optional): The color of the component. Defaults to `'primary'`.
 * - `loading` (`boolean`, optional): If `true`, the button will display a loading indicator.
 * - `loadingIndicator` (`ReactNode`, optional): Element placed inside the loading indicator.
 * - `loadingPosition` (`'start' | 'end' | 'center'`, optional): The position of the loading indicator relative to the button's content.
 * - `disabled` (`boolean`, optional): If `true`, the button will be disabled.
 * - `fullWidth` (`boolean`, optional): If `true`, the button will take up the full width of its container.
 * - `size` (`'small' | 'medium' | 'large'`, optional): The size of the button.
 * - `onClick` (`(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void`, optional): Function to call when the button is clicked.
 * - `children` (`ReactNode`): The content of the button.
 *
 * See the MUI `LoadingButton` documentation for more info about props and usage: https://mui.com/material-ui/api/loading-button/
 *
 * @returns {JSX.Element} The rendered `LoadingButton` component with additional customization options.
 *
 * ---
 *
 * **Important Note on Default Values:**
 *
 * You can set default values for props in this component to enforce consistent styling and behavior across your application.
 *
 * ```tsx
 * // Example of default props
 * const CustomLoadingButton: React.FC<CustomLoadingButtonProps> = ({
 *   variant = 'contained',
 *   color = 'primary',
 *   ...props
 * }) => {
 *   return <LoadingButton variant={variant} color={color} {...props} />;
 * };
 * ```
 *
 * ---
 *
 * **Example Usage:**
 *
 * ```tsx
 * <CustomLoadingButton
 *   onClick={handleSubmit}
 *   loading={isLoading}
 *   loadingIndicator="Loading..."
 *   disabled={isDisabled}
 * >
 *   Submit
 * </CustomLoadingButton>
 * ```
 *
 * In this example, the `CustomLoadingButton` is used to create a submit button with a loading indicator and custom behavior.
 *
 * ---
 *
 * @example
 * ### Usage example of `CustomLoadingButton` in a form
 *
 * ```tsx
 * import React, { useState } from 'react';
 * import CustomLoadingButton from './CustomLoadingButton';
 * import { TextField, Box } from '@mui/material';
 *
 * const LoginForm: React.FC = () => {
 *   const [isLoading, setIsLoading] = useState(false);
 *
 *   const handleSubmit = () => {
 *     setIsLoading(true);
 *     // Simulate async operation
 *     setTimeout(() => {
 *       setIsLoading(false);
 *       // Handle form submission
 *     }, 2000);
 *   };
 *
 *   return (
 *     <Box component="form" noValidate autoComplete="off">
 *       <TextField label="Username" fullWidth margin="normal" required />
 *       <TextField label="Password" type="password" fullWidth margin="normal" required />
 *       <CustomLoadingButton
 *         onClick={handleSubmit}
 *         loading={isLoading}
 *         loadingIndicator="Processing..."
 *         fullWidth
 *         size="large"
 *       >
 *         Login
 *       </CustomLoadingButton>
 *     </Box>
 *   );
 * };
 *
 * export default LoginForm;
 * ```
 *
 * ---
 *
 * **Note:** Ensure you have installed the necessary dependencies:
 *
 * ```bash
 * npm install @mui/lab @mui/material @emotion/react @emotion/styled
 * ```
 *
 */
const CustomLoadingButton: React.FC<CustomLoadingButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  ...props
}) => {
  return <LoadingButton variant={variant} color={color} {...props} />;
};

export default CustomLoadingButton;
