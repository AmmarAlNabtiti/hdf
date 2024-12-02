import React from 'react';
import styles from './style.module.css';

interface FooterProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
}

const Footer = ({
  onConfirm = () => null,
  onCancel = () => null,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  className,
}: FooterProps) => (
  <div className={className ?? styles.footer}>
    <button type="button" className={styles.confirmButton} onClick={onConfirm}>
      {confirmLabel}
    </button>
    <button type="button" className={styles.cancelButton} onClick={onCancel}>
      {cancelLabel}
    </button>
  </div>
);

export default Footer;
