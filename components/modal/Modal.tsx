'use client';
// TODO: USE SCSS INSTEAD OF CSS
import React, { ReactNode, useEffect, useRef } from 'react';
import Header from './header/Header';
import Body from './body/Body';
// import styles from './style.module.scss';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import Footer from './footer/Footer';

/**
 * Modal Component
 *
 * A reusable and customizable modal component designed to handle complex modal behavior with ease.
 * This component supports accessibility features, customizable styles, and dynamic content rendering.
 *
 * @component
 * @param {ModalProps} props - The properties object for the Modal component.
 *
 * @property {boolean} isOpen - Determines if the modal is open or closed.
 * What it does: Toggles the visibility of the modal. When `true`, the modal is visible. When `false`, the modal is hidden.
 *
 * @property {string} [backdropClassName] - Custom class name for the backdrop.
 * What it does: Allows the consumer to override the default backdrop styles with a custom class.
 *
 * @property {string} [modalClassName] - Custom class name for the modal container.
 * What it does: Enables the consumer to customize the modal's container styles.
 *
 * @property {string} [bodyClassName] - Custom class name for the modal body.
 * What it does: Allows customization of the modal's body styles.
 *
 * @property {string} [headerClassName] - Custom class name for the modal header.
 * What it does: Lets the consumer apply custom styles to the modal header.
 *
 * @property {() => void} [onOpen] - Callback invoked when the modal is opened.
 * What it does: Provides a hook for the consumer to perform actions when the modal becomes visible.
 *
 * @property {() => void} [onClose] - Callback invoked when the modal is closed.
 * What it does: Provides a hook for the consumer to perform actions when the modal is hidden.
 *
 * @property {(title: string, requestClose: () => void) => ReactNode} [headerComponent] - Custom header component.
 * What it does: Overrides the default header with a custom implementation provided by the consumer.
 *
 * @property {(children: ReactNode, requestClose: () => void) => ReactNode} [bodyComponent] - Custom body component.
 * What it does: Overrides the default body with a custom implementation provided by the consumer.
 *
 * @property {string} [title=''] - Title text displayed in the modal header.
 * What it does: Specifies the text content for the modal header title, used only if the default header is rendered.
 *
 * @property {ReactNode} [children=null] - Content to display inside the modal.
 * What it does: Serves as the main content area of the modal. Can include text, elements, or React components.
 *
 * @property {() => void} [onRequestClose=() => null] - Callback invoked when the modal requests to close.
 * What it does: Central handler for closing the modal, triggered by backdrop click, ESC key press, or other events.
 *
 * @property {boolean} [requestCloseOnEscClick=true] - Determines if the modal can be closed by pressing the ESC key.
 * What it does: Enables or disables the ESC key functionality for closing the modal.
 *
 * @property {boolean} [requestCloseOnBackdropClick=true] - Determines if the modal can be closed by clicking on the backdrop.
 * What it does: Enables or disables the backdrop click functionality for closing the modal.
 *
 * @example
 * // Basic usage:
 * <Modal
 *   isOpen={true}
 *   title="My Modal"
 *   onRequestClose={() => console.log('Modal closed')}
 * >
 *   <p>Modal content goes here.</p>
 * </Modal>
 *
 * @example
 * // Customizing the header and body components:
 * <Modal
 *   isOpen={true}
 *   title="Custom Modal"
 *   headerComponent={(title, close) => (
 *     <div>
 *       <h1>{title}</h1>
 *       <button onClick={close}>Close</button>
 *     </div>
 *   )}
 *   bodyComponent={(children) => (
 *     <div>
 *       <p>{children}</p>
 *     </div>
 *   )}
 * >
 *   <p>Custom modal content</p>
 * </Modal>
 *
 * @example
 * // Listening to open and close events:
 * <Modal
 *   isOpen={isModalOpen}
 *   onOpen={() => console.log('Modal opened')}
 *   onClose={() => console.log('Modal closed')}
 *   onRequestClose={() => setModalOpen(false)}
 * >
 *   <p>Modal content</p>
 * </Modal>
 */

const Modal = ({
  isOpen,
  backdropClassName,
  modalClassName,
  bodyClassName,
  headerClassName,
  footerClassName,
  onOpen,
  onClose,
  headerComponent,
  bodyComponent,
  footerComponent,
  isConfirmationModal = false,
  onConfirm = () => null,
  onCancel = () => null,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  title = '',
  children = null,
  onRequestClose = () => null,
  requestCloseOnEscClick = true,
  requestCloseOnBackdropClick = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen && onClose) {
      onClose();
    }

    if (isOpen && onOpen) {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const closeListener = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape' && requestCloseOnEscClick) {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', closeListener);
    return () => document.removeEventListener('keydown', closeListener);
  }, [isOpen, requestCloseOnEscClick, onRequestClose]);

  const header = headerComponent ? (
    headerComponent(title, onRequestClose)
  ) : (
    <Header
      className={headerClassName}
      title={title}
      requestClose={onRequestClose}
    />
  );

  const body = bodyComponent ? (
    bodyComponent(children, onRequestClose)
  ) : (
    <Body className={bodyClassName}>{children}</Body>
  );

  const footer = footerComponent ? (
    footerComponent(onConfirm, onCancel)
  ) : isConfirmationModal ? (
    <Footer
      className={footerClassName}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
    />
  ) : null;

  return (
    isOpen &&
    typeof window !== 'undefined' &&
    createPortal(
      <div className={styles.modalComponent}>
        <div
          className={`${backdropClassName ?? styles.backdrop}`}
          aria-hidden="true"
          onClick={() => requestCloseOnBackdropClick && onRequestClose()}
        />
        <div className={`${modalClassName ?? styles.modal}`} ref={modalRef}>
          {header}
          {body}
          {footer}
        </div>
      </div>,
      document.body
    )
  );
};

export default Modal;

/**
 * ModalProps Interface
 *
 * Defines the props for the Modal component.
 */
export interface ModalProps {
  /**
   * Determines if the modal is open or closed.
   * @type {boolean}
   * @required
   */
  isOpen: boolean;

  /**
   * Custom class name for the backdrop.
   * Defaults to a predefined style in `style.module.scss`.
   * @type {string}
   * @optional
   */
  backdropClassName?: string;

  /**
   * Custom class name for the modal container.
   * Defaults to a predefined style in `style.module.scss`.
   * @type {string}
   * @optional
   */
  modalClassName?: string;

  /**
   * Custom class name for the modal body.
   * Defaults to a predefined style in `style.module.scss`.
   * @type {string}
   * @optional
   */
  bodyClassName?: string;

  /**
   * Custom class name for the modal header.
   * Defaults to a predefined style in `style.module.scss`.
   * @type {string}
   * @optional
   */
  headerClassName?: string;

  /**
   * Custom class name for the modal footer.
   * Defaults to a predefined style in `style.module.scss`.
   * @type {string}
   * @optional
   */
  footerClassName?: string;

  /**
   * Callback invoked when the modal is opened.
   * @type {() => void}
   * @optional
   */
  onOpen?: () => void;

  /**
   * Callback invoked when the modal is closed.
   * @type {() => void}
   * @optional
   */
  onClose?: () => void;

  /**
   * Custom header component. Overrides the default header.
   * @type {(title: string, requestClose: () => void) => ReactNode}
   * @optional
   */
  headerComponent?: (title: string, requestClose: () => void) => ReactNode;

  /**
   * Custom body component. Overrides the default body.
   * @type {(children: ReactNode, requestClose: () => void) => ReactNode}
   * @optional
   */
  bodyComponent?: (children: ReactNode, requestClose: () => void) => ReactNode;

  /**
   * Custom footer component. Overrides the default footer.
   * @type {(onConfirm?: () => void, onCancel?: () => void) => ReactNode}
   * @optional
   */
  footerComponent?: (
    onConfirm?: () => void,
    onCancel?: () => void
  ) => ReactNode;

  /**
   * Determines if the modal should display a default footer with confirmation and cancellation buttons.
   * Defaults to `false`.
   * @type {boolean}
   * @optional
   */
  isConfirmationModal?: boolean;

  /**
   * Callback invoked when the confirmation button is clicked.
   * @type {() => void}
   * @optional
   */
  onConfirm?: () => void;

  /**
   * Callback invoked when the cancellation button is clicked.
   * @type {() => void}
   * @optional
   */
  onCancel?: () => void;

  /**
   * Label text for the confirmation button in the default footer.
   * Defaults to `'Confirm'`.
   * @type {string}
   * @optional
   */
  confirmLabel?: string;

  /**
   * Label text for the cancellation button in the default footer.
   * Defaults to `'Cancel'`.
   * @type {string}
   * @optional
   */
  cancelLabel?: string;

  /**
   * Title text displayed in the modal header.
   * Defaults to an empty string.
   * @type {string}
   * @optional
   */
  title?: string;

  /**
   * Content to display inside the modal.
   * Can be any valid ReactNode (text, elements, components).
   * Defaults to `null`.
   * @type {ReactNode}
   * @optional
   */
  children?: ReactNode;

  /**
   * Callback invoked when the modal requests to close.
   * Typically triggered by backdrop click or ESC key press.
   * @type {() => void}
   * @optional
   */
  onRequestClose?: () => void;

  /**
   * Determines if the modal can be closed by pressing the ESC key.
   * Defaults to `true`.
   * @type {boolean}
   * @optional
   */
  requestCloseOnEscClick?: boolean;

  /**
   * Determines if the modal can be closed by clicking on the backdrop.
   * Defaults to `true`.
   * @type {boolean}
   * @optional
   */
  requestCloseOnBackdropClick?: boolean;
}
