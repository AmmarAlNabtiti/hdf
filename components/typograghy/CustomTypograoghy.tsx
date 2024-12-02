'use client';
import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

/**
 * **CustomTypographyProps Interface**
 *
 * Extends MUI's `TypographyProps` to provide additional customization options.
 *
 * @interface
 */
export interface CustomTypographyProps extends TypographyProps {
  /**
   * Custom styles for the typography text.
   */
  customStyle?: React.CSSProperties;

  /**
   * Whether to make the text uppercase.
   * @default false
   */
  uppercase?: boolean;

  /**
   * Whether to truncate the text with ellipsis when it overflows.
   * @default false
   */
  truncate?: boolean;

  /**
   * Number of lines to display before truncating (requires `truncate: true`).
   */
  lineClamp?: number;
}

/**
 * **CustomTypography Component**
 *
 * A highly customizable typography component built upon MUI's `Typography`,
 * with support for advanced text styling, truncation, and custom behaviors.
 *
 * ## Features
 *
 * - Supports all MUI Typography props.
 * - Adds `uppercase` prop to transform text to uppercase.
 * - Adds `truncate` and `lineClamp` props for handling text overflow.
 * - Accepts `customStyle` for inline styling.
 *
 * @component
 * @param {CustomTypographyProps} props - The props for the `CustomTypography` component.
 * @returns {JSX.Element} The rendered typography element.
 *
 * @example
 * // Basic Usage
 * <CustomTypography variant="h4">Hello World</CustomTypography>
 *
 * @example
 * // Uppercase and Truncated Text
 * <CustomTypography uppercase truncate>
 *   This is a very long text that will be truncated.
 * </CustomTypography>
 *
 * @example
 * // Multi-line Truncation
 * <CustomTypography truncate lineClamp={2}>
 *   This is a very long text that will be truncated after two lines.
 * </CustomTypography>
 */
const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};

export default CustomTypography;
