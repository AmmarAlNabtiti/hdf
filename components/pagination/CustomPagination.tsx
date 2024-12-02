'use client';

import React from 'react';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import PaginationItem, {
  PaginationItemProps,
} from '@mui/material/PaginationItem';
import Stack, { StackProps } from '@mui/material/Stack';

export interface CustomPaginationProps extends PaginationProps {
  /**
   * The total number of pages.
   */
  count: number;
  /**
   * The current page number.
   * Controlled by the parent component.
   */
  page: number;
  /**
   * Callback triggered when the page changes.
   * @param event The event source of the callback.
   * @param value The new page number.
   */
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  /**
   * Props applied to individual `PaginationItem` components.
   * Refer to MUI's [PaginationItem API](https://mui.com/material-ui/api/pagination-item/).
   */
  itemProps?: PaginationItemProps;
  /**
   * Props applied to the `Stack` container wrapping the Pagination component.
   * Refer to MUI's [Stack API](https://mui.com/material-ui/api/stack/).
   */
  stackProps?: StackProps;
}

/**
 * A fully customizable Pagination component built using Material-UI.
 * Supports dynamic styling, page navigation, and item customization.
 *
 * ## Installation:
 * To use this component, ensure the following dependencies are installed:
 *
 * - **Material-UI Core**:
 *   ```bash
 *   npm install @mui/material @emotion/react @emotion/styled
 *   ```
 *
 * ## References:
 * For more information, check out the MUI APIs:
 * - [Pagination API](https://mui.com/material-ui/api/pagination/)
 * - [PaginationItem API](https://mui.com/material-ui/api/pagination-item/)
 * - [Stack API](https://mui.com/material-ui/api/stack/)
 *
 * ## Props:
 *
 * ### **`count`**
 * - **Type**: `number`
 * - **Description**: The total number of pages.
 *
 * ### **`page`**
 * - **Type**: `number`
 * - **Description**: The current page number. Controlled by the parent component.
 *
 * ### **`onChange`**
 * - **Type**: `(event: React.ChangeEvent<unknown>, value: number) => void`
 * - **Description**: Callback triggered when the page changes.
 *   - **`event`**: The event source of the callback.
 *   - **`value`**: The new page number.
 *
 * ### **`itemProps`**
 * - **Type**: `PaginationItemProps`
 * - **Description**: Props applied to individual `PaginationItem` components.
 * - **Reference**: [PaginationItem API](https://mui.com/material-ui/api/pagination-item/).
 *
 * ### **`stackProps`**
 * - **Type**: `StackProps`
 * - **Description**: Props applied to the `Stack` container wrapping the Pagination component.
 * - **Reference**: [Stack API](https://mui.com/material-ui/api/stack/).
 *
 * ## Examples:
 *
 * ### **Basic Usage**
 * ```tsx
 * <CustomPagination
 *   count={10}
 *   page={1}
 *   onChange={(event, value) => console.log(`Page changed to ${value}`)}
 * />
 * ```
 *
 * ### **Customizing Pagination Items**
 * ```tsx
 * <CustomPagination
 *   count={10}
 *   page={2}
 *   onChange={(event, value) => console.log(`Page changed to ${value}`)}
 *   itemProps={{
 *     sx: { fontWeight: 'bold', color: '#007bff' },
 *   }}
 * />
 * ```
 *
 * ### **Customizing Stack Props**
 * ```tsx
 * <CustomPagination
 *   count={10}
 *   page={3}
 *   onChange={(event, value) => console.log(`Page changed to ${value}`)}
 *   stackProps={{ direction: 'column', spacing: 3, justifyContent: 'center' }}
 * />
 * ```
 */

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  page,
  onChange,
  itemProps,
  stackProps,
  ...props
}) => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" {...stackProps}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        renderItem={(item) => <PaginationItem {...item} {...itemProps} />}
        {...props}
      />
    </Stack>
  );
};

export default CustomPagination;
