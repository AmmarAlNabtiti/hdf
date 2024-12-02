'use client';

import React from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

export interface CustomTooltipProps extends TooltipProps {
  /**
   * The content to be displayed inside the tooltip.
   */
  title: string | React.ReactNode;
}

/**
 * **CustomTooltip Component**
 *
 * A fully customizable Tooltip component built using Material-UI.
 * Provides support for dynamic content, flexible positioning, and custom styles.
 *
 * ## Installation
 * To use this component, ensure the following dependencies are installed:
 *
 * ```bash
 * npm install @mui/material @emotion/react @emotion/styled
 * ```
 *
 * ## References
 * For more information, check out the MUI APIs:
 * - [Tooltip API](https://mui.com/material-ui/api/tooltip/)
 * - [Stack API](https://mui.com/material-ui/api/stack/)
 *
 * ## Props
 *
 * ### `title`
 * - **Type**: `string | React.ReactNode`
 * - **Description**: The content to be displayed inside the tooltip.
 *
 * ### `children`
 * - **Type**: `React.ReactNode`
 * - **Description**: The element the tooltip is attached to.
 *
 * ### Other Props
 * - Accepts all additional props supported by MUI's `Tooltip` component.
 * - **Reference**: [Tooltip API](https://mui.com/material-ui/api/tooltip/)
 *
 * ## Examples
 *
 * ### **Basic Usage**
 * ```tsx
 * <CustomTooltip title="This is a tooltip">
 *   <button>Hover over me</button>
 * </CustomTooltip>
 * ```
 *
 * ### **Using React.ReactNode for Tooltip Content**
 * ```tsx
 * <CustomTooltip
 *   title={
 *     <div>
 *       <h3>Tooltip Header</h3>
 *       <p>This is some detailed information inside the tooltip.</p>
 *     </div>
 *   }
 * >
 *   <span>Hover over this text</span>
 * </CustomTooltip>
 * ```
 *
 * ### **Customizing Tooltip**
 * ```tsx
 * <CustomTooltip
 *   title="Custom styled tooltip"
 *   placement="bottom"
 * >
 *   <button>Hover here</button>
 * </CustomTooltip>
 * ```
 */
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <Tooltip title={title} {...props}>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
