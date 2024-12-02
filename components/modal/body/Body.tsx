import React, { ReactNode } from 'react';
import styles from './style.module.css';

interface BodyProps {
  children: ReactNode;
  className?: string;
}

const Body = ({ children, className }: BodyProps) => (
  <div className={className ?? styles.body}>{children}</div>
);

export default Body;
