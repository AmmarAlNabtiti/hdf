'use client';

import React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import AccordionDetails, {
  AccordionDetailsProps,
} from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface CustomAccordionItem {
  /**
   * The title of the accordion item. Can be a string or a ReactNode.
   */
  title: string | React.ReactNode;
  /**
   * The content of the accordion item. Must be a ReactNode.
   */
  content: React.ReactNode;
  /**
   * Whether this item is initially expanded.
   * @default false
   */
  defaultExpanded?: boolean;
}

export interface CustomAccordionProps extends Omit<AccordionProps, 'children'> {
  /**
   * An array of accordion items to render. Each item contains a `title`, `content`, and optional `defaultExpanded`.
   */
  items: CustomAccordionItem[];
  /**
   * Inline styles for the root accordion container.
   */
  containerStyle?: React.CSSProperties;
  /**
   * Props to pass to the `AccordionSummary` component.
   * Refer to the MUI AccordionSummary API for available props:
   * [AccordionSummary API](https://mui.com/material-ui/api/accordion-summary/)
   */
  accordionSummary?: AccordionSummaryProps;
  /**
   * Props to pass to the `AccordionDetails` component.
   * Refer to the MUI AccordionDetails API for available props:
   * [AccordionDetails API](https://mui.com/material-ui/api/accordion-details/)
   */
  accordionDetails?: AccordionDetailsProps;
}

/**
 * A fully customizable Accordion component built using MUI's Accordion.
 * Supports dynamic content, styling options, and toggle callbacks.
 *
 * ## Installation:
 * To use this component, ensure the following dependencies are installed:
 *
 * - **Material-UI Core**:
 *   ```bash
 *   npm install @mui/material @emotion/react @emotion/styled
 *   ```
 * - **Material-UI Icons**:
 *   ```bash
 *   npm install @mui/icons-material
 *   ```
 *
 * ## References:
 * For more information, check out the MUI APIs:
 * - [Accordion API](https://mui.com/material-ui/api/accordion/)
 * - [AccordionSummary API](https://mui.com/material-ui/api/accordion-summary/)
 * - [AccordionDetails API](https://mui.com/material-ui/api/accordion-details/)
 *
 * ## Props:
 * - **`children`**: This prop is required we can workaround it be add `children={<></>}`.
 * - **`items`**: Array of accordion items, each with a `title`, `content`, and optional `defaultExpanded`.
 * - **`containerStyle`**: Inline styles for the root accordion container.
 * - **`accordionSummary`**: Props to pass to the `AccordionSummary` component.
 * - **`accordionDetails`**: Props to pass to the `AccordionDetails` component.
 *
 * ## Examples:
 *
 * ### Basic Usage:
 * ```tsx
 * <CustomAccordion
 *   items={[
 *     { title: 'Section 1', content: 'Content for section 1' },
 *     { title: 'Section 2', content: 'Content for section 2' },
 *   ]}
 * />
 * ```
 *
 * ### Using React.ReactNode for Title and Content:
 * ```tsx
 * <CustomAccordion
 *   items={[
 *     {
 *       title: (
 *         <div style={{ display: 'flex', alignItems: 'center' }}>
 *           <img src="/icon1.png" alt="Icon" style={{ marginRight: 8 }} />
 *           <span>Section with Icon</span>
 *         </div>
 *       ),
 *       content: (
 *         <div>
 *           <h3>Custom Content Header</h3>
 *           <p>This is a custom paragraph inside the accordion.</p>
 *           <button onClick={() => alert('Button Clicked!')}>Click Me</button>
 *         </div>
 *       ),
 *     },
 *     {
 *       title: (
 *         <Typography variant="h6" color="primary">
 *           Styled Title
 *         </Typography>
 *       ),
 *       content: (
 *         <Typography variant="body1">
 *           This is another section with styled content. You can use any MUI or custom components here.
 *         </Typography>
 *       ),
 *     },
 *   ]}
 * />
 * ```
 *
 * ### Customizing Props for Summary and Details:
 * ```tsx
 * <CustomAccordion
 *   items={[
 *     { title: 'Section 1', content: 'Content for section 1' },
 *     { title: 'Section 2', content: 'Content for section 2' },
 *   ]}
 *   accordionSummary={{ sx: { backgroundColor: '#f0f0f0' } }}
 *   accordionDetails={{ sx: { padding: '16px' } }}
 * />
 * ```
 *
 */

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items,
  containerStyle,
  accordionSummary,
  accordionDetails,
  ...props
}) => {
  return (
    <div style={containerStyle}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          defaultExpanded={item.defaultExpanded}
          {...props}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            {...accordionSummary}
          >
            <div>{item.title}</div>
          </AccordionSummary>
          <AccordionDetails {...accordionDetails}>
            <div>{item.content}</div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CustomAccordion;
