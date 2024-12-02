import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

/**
 * CustomAlert Component
 *
 * A highly customizable alert component built on top of SweetAlert2, integrated with React. It enables you to display alerts, confirmations, prompts, and more, with extensive configuration options.
 *
 * This component supports all options provided by SweetAlert2 and enhances them with React components support via `sweetalert2-react-content`.
 *
 * **Installation:**
 *
 * Before using `CustomAlert`, ensure you have installed the required packages:
 *
 * ```bash
 * npm install --save sweetalert2 sweetalert2-react-content
 * ```
 *
 * **Most Commonly Used Props:**
 *
 * - **title** (`string` | `React.ReactNode`): The title of the alert.
 * - **text** (`string`): The text content of the alert.
 * - **html** (`string` | `React.ReactNode`): Custom HTML content for the alert body.
 * - **icon** (`'success'` | `'error'` | `'warning'` | `'info'` | `'question'`): The type of icon to display.
 * - **showCancelButton** (`boolean`): Whether to show a 'Cancel' button.
 * - **confirmButtonText** (`string`): Text for the 'Confirm' button.
 * - **cancelButtonText** (`string`): Text for the 'Cancel' button.
 * - **input** (`'text'` | `'email'` | `'password'` | `'number'` | `'tel'` | `'range'` | `'textarea'` | `'select'` | `'radio'` | `'checkbox'` | `'file'` | `'url'`): Type of input field for prompts.
 * - **inputPlaceholder** (`string`): Placeholder text for the input field.
 * - **preConfirm** (`function`): Function to run before confirming; can be used for validation or async operations.
 * - **customClass** (`object`): Assign custom CSS classes to various elements of the alert for styling purposes.
 * - **timer** (`number`): Auto-close the alert after a specified number of milliseconds.
 * - **imageUrl** (`string`): Add a custom image to the alert.
 * - **buttonsStyling** (`boolean`): Apply default styling to buttons or use your own.
 * - **allowOutsideClick** (`boolean`): Dismiss the alert when the user clicks outside of it.
 *
 * For a full list of options, refer to the [SweetAlert2 Configuration](https://sweetalert2.github.io/#configuration) documentation.
 *
 * **Usage as a Confirmation Modal:**
 *
 * `CustomAlert` can be used as a confirmation modal to confirm user actions, such as deletions, submissions, or any critical operations. By utilizing the `showCancelButton` and handling the result, you can perform actions based on user confirmation.
 *
 * **Example - Confirmation Modal:**
 *
 * ```tsx
 * import CustomAlert from './CustomAlert';
 *
 * const handleDelete = async () => {
 *   const result = await CustomAlert({
 *     title: 'Delete Confirmation',
 *     text: 'Are you sure you want to delete this item?',
 *     icon: 'warning',
 *     showCancelButton: true,
 *     confirmButtonText: 'Yes, delete it!',
 *     cancelButtonText: 'No, keep it',
 *     reverseButtons: true,
 *   });
 *
 *   if (result.isConfirmed) {
 *     // Perform delete action
 *     await deleteItem();
 *     await CustomAlert({
 *       title: 'Deleted!',
 *       text: 'Your item has been deleted.',
 *       icon: 'success',
 *     });
 *   } else if (result.isDismissed) {
 *     // Handle dismissal (optional)
 *     CustomAlert({
 *       title: 'Cancelled',
 *       text: 'Your item is safe.',
 *       icon: 'info',
 *     });
 *   }
 * };
 * ```
 *
 * **Example - Confirmation Modal in a Component:**
 *
 * ```tsx
 * 'use client';
import React from 'react';
import { Button } from '@mui/material';
import CustomAlert from '@/components/alerts/CustomSweetAlert';

const deleteResource = async () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('Resource deleted!');
      resolve(true);
    }, 1000)
  );
};

const DeleteButton: React.FC = () => {
  const handleDeleteClick = async () => {
    try {
      const result = await CustomAlert({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
        reverseButtons: true, // Optional for better UX
      });

      if (result.isConfirmed) {
        // Proceed with deletion
        await deleteResource();
        await CustomAlert({
          title: 'Deleted!',
          text: 'The resource has been successfully deleted.',
          icon: 'success',
        });
      } else if (result.isDismissed) {
        // Handle dismissal
        await CustomAlert({
          title: 'Cancelled',
          text: 'The deletion was cancelled.',
          icon: 'info',
        });
      }
    } catch (error) {
      console.error('Error during deletion process:', error);
      await CustomAlert({
        title: 'Error',
        text: 'An error occurred while deleting the resource.',
        icon: 'error',
      });
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDeleteClick}>
      Delete
    </Button>
  );
};

export default DeleteButton;

 * ```
 *
 * @function CustomAlert
 * @param {SweetAlertOptions} options - An object containing configuration options for the alert.
 * @returns {Promise<SweetAlertResult<any>>} A promise that resolves to a `SweetAlertResult` object when the alert is closed.
 *
 * @see {@link https://sweetalert2.github.io/#examples|SweetAlert2 Official Examples}
 * @see {@link https://github.com/sweetalert2/sweetalert2-react-content|sweetalert2-react-content Documentation}
 */

const CustomAlert = (
  options: SweetAlertOptions
): Promise<SweetAlertResult<any>> => {
  const SwalWithReact = withReactContent(Swal);

  return SwalWithReact.fire(options);
};

export default CustomAlert;
