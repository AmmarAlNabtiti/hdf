'use client';

import React from 'react';
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  Theme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export interface CustomThemeProviderProps {
  /**
   * The children components that will be wrapped by the theme provider.
   */
  children: React.ReactNode;
  /**
   * Custom theme options to override the default theme.
   * This can include palette, typography, components, and more.
   */
  themeOptions?: ThemeOptions;
  /**
   * If `true`, it will enable dark mode by default.
   * This can be overridden by providing a custom palette in `themeOptions`.
   * Defaults to `false`.
   */
  darkMode?: boolean;
}

/**
 * **CustomThemeProvider Component**
 *
 * A highly customizable theme provider component that leverages MUI's `createTheme` function.
 * It allows you to customize the theme extensively, including colors, typography, components, and more.
 * This component ensures that your entire application or specific parts of it adhere to a consistent theme.
 *
 * **Commonly Used Props:**
 *
 * - `children` (`ReactNode`, required): The content that will be wrapped by the theme provider.
 * - `themeOptions` (`ThemeOptions`, optional): Custom theme options to override the default theme.
 * - `darkMode` (`boolean`, optional): If `true`, enables dark mode by default. Defaults to `false`.
 *
 * **Customization:**
 *
 * You can customize nearly every aspect of the theme using the `themeOptions` prop.
 * This includes the palette, typography, spacing, breakpoints, components, and more.
 *
 * **Example Usage:**
 *
 * ```tsx
 * <CustomThemeProvider darkMode>
 *   <App />
 * </CustomThemeProvider>
 * ```
 *
 * In this example, the `CustomThemeProvider` wraps the entire application and enables dark mode.
 *
 * ---
 *
 * @example
 * ### Customizing the Theme
 *
 * ```tsx
 * const themeOptions: ThemeOptions = {
 *   palette: {
 *     primary: {
 *       main: '#556cd6',
 *     },
 *     secondary: {
 *       main: '#19857b',
 *     },
 *   },
 *   typography: {
 *     fontFamily: 'Roboto, Arial, sans-serif',
 *   },
 * };
 *
 * <CustomThemeProvider themeOptions={themeOptions}>
 *   <App />
 * </CustomThemeProvider>
 * ```
 *
 * In this example, the theme is customized with specific primary and secondary colors and a custom font family.
 *
 * ---
 *
 * **Note on CSS Baseline:**
 *
 * This component includes MUI's `CssBaseline` component, which kickstarts an elegant, consistent, and simple baseline to build upon.
 * It removes browser inconsistencies and applies a consistent style across browsers.
 *
 * **Further Customization:**
 *
 * For advanced customization, you can modify the theme's components using the `components` key in `themeOptions`.
 * This allows you to customize the default props, style overrides, and variants of MUI components.
 *
 * **Example of Component Customization:**
 *
 * ```tsx
 * const themeOptions: ThemeOptions = {
 *   components: {
 *     MuiButton: {
 *       defaultProps: {
 *         disableElevation: true,
 *       },
 *       styleOverrides: {
 *         root: {
 *           borderRadius: 8,
 *         },
 *       },
 *     },
 *   },
 * };
 *
 * <CustomThemeProvider themeOptions={themeOptions}>
 *   <App />
 * </CustomThemeProvider>
 * ```
 *
 * In this example, the default props and styles of the `Button` component are customized.
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
 * For more information about theming in MUI, refer to the official documentation:
 *
 * - [MUI Customization - Themes](https://mui.com/material-ui/customization/theming/)
 * - [MUI `createTheme` API](https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme)
 *
 * ---
 *
 * @returns {JSX.Element} The rendered `ThemeProvider` component wrapping the children with the customized theme.
 */
const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  themeOptions = {},
  darkMode = false,
}): JSX.Element => {
  // Create a default theme
  let theme: Theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...themeOptions.palette,
    },
    ...themeOptions,
  });

  // Optionally, you can extend the theme with additional logic here
  // For example, responsive fonts, custom breakpoints, etc.

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
