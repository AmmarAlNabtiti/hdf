'use client';

import React from 'react';
import {
  ToastContainer,
  toast,
  ToastOptions,
  ToastContainerProps,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * **CustomToast Function**
 *
 * A highly customizable toast notification function built on top of React-Toastify. It allows you to display toast messages with extensive configuration options.
 *
 * **Important:** Ensure you include `<CustomToastContainer />` in your component tree, preferably in your root component (e.g., `App.tsx` or `layout.tsx` in Next.js). If you use `CustomToast` without including `CustomToastContainer`, toasts will not be displayed.
 *
 * **Installation:**
 *
 * Before using `CustomToast`, ensure you have installed the required package:
 *
 * ```bash
 * npm install --save react-toastify
 * ```
 *
 * **Most Commonly Used Props:**
 *
 * - **type** (`'info' | 'success' | 'warning' | 'error' | 'default'`): The type of toast to display.
 * - **position** (`ToastPosition`): The position where the toast will appear on the screen.
 * - **autoClose** (`number | false`): The duration (in milliseconds) before the toast automatically closes. Set to `false` to disable auto-close.
 * - **closeButton** (`boolean | React.ReactElement`): Whether to display the close button or a custom close button.
 * - **hideProgressBar** (`boolean`): Hide or show the progress bar.
 * - **pauseOnHover** (`boolean`): Pause the auto-close timer when the mouse hovers over the toast.
 * - **draggable** (`boolean`): Allow the toast to be draggable.
 * - **theme** (`'light' | 'dark' | 'colored'`): The theme of the toast.
 *
 * For a full list of options, refer to the [React-Toastify Documentation](https://fkhadra.github.io/react-toastify/introduction).
 *
 * @function CustomToast
 * @param {string | React.ReactNode} content - The content to display in the toast. Can be a string or a React component.
 * @param {ToastOptions} [options] - Configuration options for the toast.
 * @returns {React.ReactText} A unique identifier for the toast, which can be used to update or dismiss it programmatically.
 *
 * @example
 * // Basic toast
 * CustomToast('This is a basic toast message');
 *
 * @example
 * // Success toast
 * CustomToast('Operation successful!', { type: 'success' });
 *
 * @example
 * // Custom position and auto-close duration
 * CustomToast('This toast will appear at the top-right corner and close after 10 seconds', {
 *   position: 'top-right',
 *   autoClose: 10000,
 * });
 *
 * @example
 * // Using a React component as content
 * CustomToast(
 *   <div>
 *     <strong>Bold</strong> message with <em>italic</em> text.
 *   </div>
 * );
 *
 * @example
 * // Custom toast with close button and progress bar hidden
 * CustomToast('Custom toast', {
 *   closeButton: false,
 *   hideProgressBar: true,
 * });
 *
 * **Usage in a Component:**
 *
 * ```tsx
 * import React from 'react';
 * import CustomToast, { CustomToastContainer } from './CustomToast';
 *
 * const MyComponent: React.FC = () => {
 *   const notify = () => {
 *     CustomToast('This is a toast notification!', { type: 'info' });
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={notify}>Show Toast</button>
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 *
 * // In your root component (e.g., App.tsx)
 * import React from 'react';
 * import { CustomToastContainer } from './CustomToast';
 *
 * const App: React.FC = () => {
 *   return (
 *     <>
 *       <CustomToastContainer />
 *     </>
 *   );
 * };
 *
 * export default App;
 * ```
 *
 * @see {@link https://fkhadra.github.io/react-toastify/introduction | React-Toastify Documentation}
 */
const CustomToast = (
  content: string | React.ReactNode,
  options?: ToastOptions
): string | number => {
  return toast(content, options);
};

/**
 * **CustomToastContainer Component**
 *
 * A wrapper around React-Toastify's `ToastContainer` component. This should be included in your application to render the toasts.
 *
 * **Important:** You must include `CustomToastContainer` in your root component (e.g., `App.tsx` or `layout.tsx` in Next.js). Failing to do so will result in toasts not being displayed when using `CustomToast`.
 *
 * @param {ToastContainerProps} [props] - Props to customize the `ToastContainer`.
 *
 * @example
 * // Include in your root component or layout
 * import { CustomToastContainer } from './CustomToast';
 *
 * const App: React.FC = () => (
 *   <>
 *     <CustomToastContainer />
 *   </>
 * );
 *
 * export default App;
 *
 * @see {@link https://fkhadra.github.io/react-toastify/api/ToastContainer|ToastContainer Documentation}
 */
export const CustomToastContainer: React.FC<ToastContainerProps> = (props) => {
  return <ToastContainer {...props} />;
};

export default CustomToast;
