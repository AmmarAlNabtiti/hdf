'use client';

import React, { useState } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab, { TabProps } from '@mui/material/Tab';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export interface CustomTabItem {
  /**
   * The label of the tab.
   */
  label: string | React.ReactNode;
  /**
   * The content to display when this tab is active.
   */
  content: React.ReactNode;
  /**
   * Unique value to identify the tab.
   */
  value: string | number;
}

export interface CustomTabsProps extends TabsProps {
  /**
   * An array of tabs to render.
   */
  items: CustomTabItem[];
  /**
   * Inline styles for the tabs container.
   */
  containerStyle?: React.CSSProperties;
  /**
   * Props to pass to individual `Tab` components.
   * Refer to the MUI Tab API:
   * [Tab API](https://mui.com/material-ui/api/tab/)
   */
  tabProps?: TabProps;
  /**
   * Props to pass to the `Box` container wrapping the active tab's content.
   * Refer to the MUI Box API:
   * [Box API](https://mui.com/material-ui/api/box/)
   */
  boxProps?: BoxProps;
  /**
   * Set the layout direction of the tabs.
   * @default "horizontal"
   */
  direction?: 'horizontal' | 'vertical';
}

/**
 * ## Props:
 *
 * ### **`items`**
 * - **Type**: `CustomTabItem[]`
 * - **Description**: Array of tabs to render. Each item includes:
 *   - **`label`**: The label of the tab (string or `React.ReactNode`).
 *   - **`content`**: The content displayed when the tab is active (must be a `React.ReactNode`).
 *   - **`value`**: A unique value to identify the tab (string or number).
 *   - **`icon`**: The icon to display on the tab (React element or string).
 *   - **`iconPosition`**: The position of the icon relative to the label. One of:
 *     - `"top"` (default)
 *     - `"bottom"`
 *     - `"start"`
 *     - `"end"`
 *   - **`disabled`**: If true, disables the tab.
 *   - **`disableRipple`**: If true, disables the ripple effect on the tab.
 *   - **`disableFocusRipple`**: If true, disables the keyboard focus ripple effect.
 *   - **`wrapped`**: If true, allows the label to wrap to the next line.
 *
 * ### **`containerStyle`**
 * - **Type**: `React.CSSProperties`
 * - **Description**: Custom styles for the root container of the tabs.
 *
 * ### **`tabProps`**
 * - **Type**: `TabProps`
 * - **Description**: Props applied to individual `Tab` components.
 * - **Reference**: [Tab API](https://mui.com/material-ui/api/tab/).
 * - **Includes**:
 *   - **`disabled`**: If true, disables the tab.
 *   - **`disableRipple`**: If true, disables the ripple effect.
 *   - **`disableFocusRipple`**: If true, disables the keyboard focus ripple.
 *   - **`icon`**: An icon to display on the tab (React element or string).
 *   - **`iconPosition`**: Position of the icon relative to the label. Defaults to `"top"`.
 *   - **`label`**: The label for the tab.
 *   - **`sx`**: Custom styles using the system prop.
 *   - **`value`**: The unique value of the tab. Defaults to the child index if not specified.
 *   - **`wrapped`**: If true, allows the label to wrap.
 *
 * ### **`boxProps`**
 * - **Type**: `BoxProps`
 * - **Description**: Props applied to the `Box` that wraps the content of the active tab.
 * - **Reference**: [Box API](https://mui.com/material-ui/api/box/).
 *
 * ### **`direction`**
 * - **Type**: `"horizontal" | "vertical"`
 * - **Default**: `"horizontal"`
 * - **Description**: Determines the layout direction of the tabs. If `"vertical"`, tabs are displayed on the left with content on the right.
 *
 * ## Examples:
 *
 * ### **Horizontal Tabs (Default)**
 * ```tsx
 * <CustomTabs
 *   items={[
 *     { label: 'Tab 1', content: 'Content for Tab 1', value: 'tab1' },
 *     { label: 'Tab 2', content: 'Content for Tab 2', value: 'tab2' },
 *   ]}
 * />
 * ```
 *
 * ### **Vertical Tabs**
 * ```tsx
 * <CustomTabs
 *   items={[
 *     { label: 'Tab 1', content: 'Content for Tab 1', value: 'tab1' },
 *     { label: 'Tab 2', content: 'Content for Tab 2', value: 'tab2' },
 *   ]}
 *   direction="vertical"
 * />
 * ```
 *
 * ### **Customizing Tabs and Content**
 * ```tsx
 * <CustomTabs
 *   items={[
 *     {
 *       label: 'Tab 1',
 *       content: <div>Content for Tab 1</div>,
 *       value: 'tab1',
 *       icon: <HomeIcon />,
 *       iconPosition: 'start',
 *     },
 *     {
 *       label: 'Tab 2',
 *       content: <div>Content for Tab 2</div>,
 *       value: 'tab2',
 *       disabled: true,
 *     },
 *   ]}
 *   direction="vertical"
 *   tabProps={{ sx: { fontWeight: 'bold', textTransform: 'uppercase' } }}
 *   boxProps={{ sx: { padding: 2, backgroundColor: '#f4f4f4' } }}
 * />
 * ```
 */

const CustomTabs: React.FC<CustomTabsProps> = ({
  items,
  containerStyle,
  tabProps,
  boxProps,
  direction = 'horizontal',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState<string | number>(
    items[0]?.value || 0
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string | number
  ) => {
    setActiveTab(newValue);
  };

  const isVertical = direction === 'vertical';

  return (
    <Stack
      direction={isVertical ? 'row' : 'column'}
      spacing={2}
      style={containerStyle}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        orientation={isVertical ? 'vertical' : 'horizontal'}
        {...props}
      >
        {items.map((item) => (
          <Tab
            key={item.value}
            label={item.label}
            value={item.value}
            {...tabProps}
          />
        ))}
      </Tabs>
      <Box {...boxProps} sx={{ flex: 1, ...boxProps?.sx }}>
        {items.map(
          (item) =>
            item.value === activeTab && (
              <div key={item.value}>{item.content}</div>
            )
        )}
      </Box>
    </Stack>
  );
};

export default CustomTabs;
