'use client';
import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

export interface CustomCircularLoaderProps extends CircularProgressProps {
  /**
   * The size of the progress circle. Overrides the MUI `size` prop.
   * @default 40
   */
  size?: number;

  /**
   * The thickness of the progress circle.
   * @default 3.6
   */
  thickness?: number;

  /**
   * Determines whether to show a custom label inside the circle.
   */
  label?: React.ReactNode;

  /**
   * Custom styles for the label.
   */
  labelStyle?: React.CSSProperties;

  /**
   * Custom styles for the wrapper container.
   */
  wrapperStyle?: React.CSSProperties;

  /**
   * The position of the label inside the circle.
   * @default 'center'
   */
}

/**
 * **CustomCircularLoader Component**
 *
 * A customizable CircularProgress component built on top of MUI's CircularProgress.
 * Provides additional props for scaling, colors, inner labels, and advanced label customization.
 *
 * ## Most Used Props:
 *
 * - **`size`**: Controls the size of the progress indicator.
 *   @default 40
 *   @example
 *   ```tsx
 *   <CustomCircularLoader size={60} />
 *   ```
 *
 * - **`thickness`**: Adjusts the thickness of the progress circle.
 *   @default 3.6
 *   @example
 *   ```tsx
 *   <CustomCircularLoader thickness={5} />
 *   ```
 *
 * - **`color`**: Sets the color of the progress circle. Accepts a MUI theme color (`'primary' | 'secondary' | 'error' | 'inherit'`) or a custom HEX/RGB string.
 *   @default "primary"
 *   @example
 *   ```tsx
 *   // Using a theme color
 *   <CustomCircularLoader color="secondary" />
 *
 *   // Using a custom HEX color
 *   <CustomCircularLoader color="#00ff00" />
 *   ```
 *
 * - **`label`**: Adds a label inside the circle, useful for displaying percentages or status messages.
 *   @example
 *   ```tsx
 *   <CustomCircularLoader label="50%" />
 *   ```
 *
 * - **`labelStyle`**: Applies custom styles to the label.
 *   @example
 *   ```tsx
 *   <CustomCircularLoader
 *     label="Loading"
 *     labelStyle={{
 *       fontSize: '1rem',
 *       fontWeight: 'bold',
 *       color: '#ff5722',
 *     }}
 *   />
 *   ```
 *
 * - **`wrapperStyle`**: Adds custom inline styles to the wrapper container for advanced styling needs.
 *   @example
 *   ```tsx
 *   <CustomCircularLoader
 *     size={50}
 *     wrapperStyle={{
 *       backgroundColor: '#e0e0e0',
 *       padding: '8px',
 *       borderRadius: '50%',
 *     }}
 *   />
 *   ```
 *
 * - **`labelPosition`**: Specifies the position of the label inside the circle.
 *   @default 'center'
 *   @example
 *   ```tsx
 *   <CustomCircularLoader label="Top" labelPosition="top" />
 *   ```
 *
 * @example
 * // Basic usage with default props
 * <CustomCircularLoader />
 *
 * @example
 * // Custom size and thickness
 * <CustomCircularLoader size={80} thickness={6} />
 *
 * @example
 * // Custom color with a label inside
 * <CustomCircularLoader
 *   size={60}
 *   thickness={5}
 *   color="#ff5722"
 *   label="70%"
 * />
 *
 * @example
 * // Styled wrapper with inline styles
 * <CustomCircularLoader
 *   size={50}
 *   thickness={4}
 *   color="secondary"
 *   label="Loading"
 *   wrapperStyle={{
 *     backgroundColor: '#f0f0f0',
 *     borderRadius: '50%',
 *     padding: '10px',
 *   }}
 * />
 *
 * @example
 * // Customized label position and styles
 * <CustomCircularLoader
 *   size={70}
 *   thickness={4}
 *   label="Top Label"
 *   labelPosition="top"
 *   labelStyle={{
 *     fontSize: '1.2rem',
 *     color: '#3f51b5',
 *     fontWeight: 'bold',
 *   }}
 * />
 */
const CustomCircularLoader: React.FC<CustomCircularLoaderProps> = ({
  size = 40,
  thickness = 3.6,
  color = 'primary',
  label,
  labelStyle,
  wrapperStyle,

  ...props
}) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        ...wrapperStyle,
      }}
    >
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={typeof color === 'string' ? { color } : undefined}
        {...props}
      />
      {label && (
        <div
          style={{
            position: 'absolute',
            fontSize: `${size * 0.3}px`,
            fontWeight: 'bold',
            color: typeof color === 'string' ? color : undefined,
            ...labelStyle,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default CustomCircularLoader;
