import React from 'react';
import styles from './style.module.css';

interface HeaderProps {
  title: string;
  requestClose: () => void;
  className?: string;
}

const Header = ({ title, requestClose, className }: HeaderProps) => {
  return (
    <div className={className ?? styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <button
        type="button"
        className={styles.closeButton}
        onClick={requestClose}
      >
        ✖
      </button>
    </div>
  );
};

export default Header;
