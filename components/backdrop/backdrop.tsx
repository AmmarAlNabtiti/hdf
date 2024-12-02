'use client';

import React from 'react';
import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';

export interface CustomBackdropProps extends BackdropProps {
  /**
   * If `true`, the backdrop will be open.
   */
  open: boolean;
  /**
   * The content of the backdrop.
   * Defaults to a centered `CircularProgress` indicator.
   */
  children?: React.ReactNode;
  /**
   * The color of the backdrop overlay.
   * Defaults to `rgba(0, 0, 0, 0.5)`.
   */
  overlayColor?: string;
}

/**
 * **CustomBackdrop Component**
 *
 * A customizable backdrop component that overlays content on the screen.
 * It uses MUI's `Backdrop` component as the base and adds more flexibility.
 *
 * **Commonly Used Props:**
 *
 * - `open` (`boolean`, required): Controls whether the backdrop is open.
 * - `children` (`ReactNode`, optional): The content displayed within the backdrop. Defaults to a `CircularProgress` indicator.
 * - `overlayColor` (`string`, optional): The background color of the backdrop overlay. Defaults to `rgba(0, 0, 0, 0.5)`.
 * - `transitionDuration` (`number | { appear?: number; enter?: number; exit?: number; }`, optional): The duration for the transition, in milliseconds.
 * - `onClick` (`(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`, optional): Callback fired when the backdrop is clicked.
 * - `sx` (`SxProps<Theme>`, optional): The system prop that allows defining system overrides as well as additional CSS styles.
 *
 * See the MUI `Backdrop` documentation for more info about props and usage: https://mui.com/material-ui/api/backdrop/
 *
 * @returns {JSX.Element} The rendered `Backdrop` component with additional customization options.
 *
 * ---
 *
 * **Example Usage:**
 *
 * ```tsx
 * <CustomBackdrop open={isLoading}>
 *   <CircularProgress color="inherit" />
 * </CustomBackdrop>
 * ```
 *
 * In this example, the `CustomBackdrop` displays a loading spinner when `isLoading` is `true`.
 *
 * ---
 *
 * @example
 * ### Usage example of `CustomBackdrop` in a component
 *
 * ```tsx
 * import React, { useState } from 'react';
 * import CustomBackdrop from './CustomBackdrop';
 * import { Button } from '@mui/material';
 *
 * const ExampleComponent: React.FC = () => {
 *   const [open, setOpen] = useState(false);
 *
 *   const handleToggle = () => {
 *     setOpen(!open);
 *   };
 *
 *   return (
 *     <>
 *       <Button variant="contained" onClick={handleToggle}>
 *         {open ? 'Close Backdrop' : 'Open Backdrop'}
 *       </Button>
 *       <CustomBackdrop open={open} onClick={handleToggle}>
 *         <div style={{ color: '#fff' }}>Hello, this is the backdrop content!</div>
 *       </CustomBackdrop>
 *     </>
 *   );
 * };
 *
 * export default ExampleComponent;
 * ```
 *
 * In this example, clicking the button toggles the backdrop, which displays custom content.
 *
 * ---
 *
 * **Customization:**
 *
 * You can customize the backdrop by passing additional props or overriding styles using the `sx` prop.
 *
 * ```tsx
 * <CustomBackdrop
 *   open={open}
 *   overlayColor="rgba(255, 0, 0, 0.7)"
 *   sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
 * >
 *   <CircularProgress color="secondary" />
 * </CustomBackdrop>
 * ```
 *
 * ---
 *
 * **Dependencies:**
 *
 * Ensure you have installed the necessary dependencies:
 *
 * ```bash
 * npm install @mui/material @emotion/react @emotion/styled
 * ```
 *
 * **MUI Documentation:**
 *
 * For more information about the underlying MUI components and their props, refer to the official documentation:
 *
 * - [MUI Backdrop API](https://mui.com/material-ui/api/backdrop/)
 * - [MUI CircularProgress API](https://mui.com/material-ui/api/circular-progress/)
 *
 * ---
 *
 * @returns {JSX.Element} The rendered `CustomBackdrop` component with enhanced customization.
 */
const CustomBackdrop: React.FC<CustomBackdropProps> = ({
  open,
  children,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  sx,
  ...props
}): JSX.Element => {
  return (
    <Backdrop
      open={open}
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: overlayColor,
        ...sx,
      }}
      {...props}
    >
      {children || <CircularProgress color="inherit" />}
    </Backdrop>
  );
};

export default CustomBackdrop;
