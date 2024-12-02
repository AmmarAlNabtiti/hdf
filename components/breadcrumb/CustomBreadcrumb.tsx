'use client';

import React, { useEffect, useState } from 'react';
import Breadcrumbs, { BreadcrumbsProps } from '@mui/material/Breadcrumbs';
import MuiTypography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import Link, { LinkProps } from 'next/link';

/**
 * Interface representing a single breadcrumb item.
 */
export interface BreadcrumbItem {
  /**
   * The label to display for the breadcrumb item.
   * Can be a string or a React node for custom content.
   */
  label: React.ReactNode;
  /**
   * The URL for the breadcrumb item. If undefined, the item will render as plain text.
   */
  href?: string;
  /**
   * Props to pass to the Next.js Link component.
   */
  linkProps?: Omit<LinkProps, 'href'>;
}

/**
 * Props for the `CustomBreadcrumb` component.
 */
export interface CustomBreadcrumbProps
  extends Omit<BreadcrumbsProps, 'children'> {
  /**
   * An array of breadcrumb items to render.
   */
  items: BreadcrumbItem[];
  /**
   * A custom separator to display between breadcrumb items.
   * @default '/'
   */
  separator?: React.ReactNode;
  /**
   * Inline styles for the root breadcrumb container.
   */
  containerStyle?: React.CSSProperties;
  /**
   * Inline styles for each breadcrumb link or text.
   */
  linkStyle?: React.CSSProperties;
  /**
   * Specifies the maximum number of breadcrumb items to display.
   * When exceeded, items are collapsed with an ellipsis.
   * @default 8
   */
  maxItems?: number;
  /**
   * The number of items to show before the ellipsis when collapsing.
   * Only applies if `maxItems` is set and exceeded.
   * @default 1
   */
  itemsBeforeCollapse?: number;
  /**
   * The number of items to show after the ellipsis when collapsing.
   * Only applies if `maxItems` is set and exceeded.
   * @default 1
   */
  itemsAfterCollapse?: number;
  /**
   * Custom text for the expand button used when items are collapsed.
   * @default 'Show path'
   */
  expandText?: string;
}

/**
 * **CustomBreadcrumb Component**
 *
 * A fully customizable Breadcrumb component built using MUI's `Breadcrumbs` and Next.js navigation.
 * It supports advanced features like item collapsing, custom separators, and styling options.
 *
 * @remarks
 * This component ensures proper accessibility and SEO practices by using correct semantic elements and Next.js `Link` handling.
 *
 * **Note on `label` Prop:**
 *
 * - The `label` can be a string or any ReactNode.
 * - **Avoid using block-level elements** like `<div>` inside `label` to maintain valid HTML structure.
 * - If block-level elements are necessary, the component adjusts the rendering to prevent invalid nesting.
 *   However, it's recommended to use inline elements for labels.
 *
 * @param props - Props for the `CustomBreadcrumb` component.
 * @returns A rendered Breadcrumbs component.
 *
 * @example
 * **Basic Usage:**
 * ```tsx
 * <CustomBreadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Category', href: '/category' },
 *     { label: 'Product' },
 *   ]}
 * />
 * ```
 *
 * @example
 * **Collapsed Items:**
 * ```tsx
 * <CustomBreadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Category', href: '/category' },
 *     { label: 'Subcategory', href: '/subcategory' },
 *     { label: 'Product' },
 *   ]}
 *   maxItems={3}
 *   itemsBeforeCollapse={1}
 *   itemsAfterCollapse={1}
 * />
 * ```
 *
 * @example
 * **Custom Separator:**
 * ```tsx
 * <CustomBreadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Blog', href: '/blog' },
 *     { label: 'Post' },
 *   ]}
 *   separator=">"
 * />
 * ```
 *
 * @example
 * **Styling the Container and Links:**
 * ```tsx
 * <CustomBreadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Settings', href: '/settings' },
 *     { label: 'Profile' },
 *   ]}
 *   containerStyle={{ margin: '16px 0', padding: '8px', backgroundColor: '#f0f0f0' }}
 *   linkStyle={{ color: '#0070f3', textDecoration: 'none' }}
 * />
 * ```
 *
 * @see [MUI Breadcrumbs API](https://mui.com/material-ui/api/breadcrumbs/)
 * @see [Next.js Link Component](https://nextjs.org/docs/api-reference/next/link)
 *
 * @dependencies
 * Ensure you have installed the necessary dependencies:
 * ```bash
 * npm install @mui/material @emotion/react @emotion/styled
 * npm install next react react-dom
 * ```
 */
const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  items,
  separator = '/',
  containerStyle,
  linkStyle,
  maxItems = 8,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  expandText = 'Show path',
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component knows it's on the client side
  }, []);

  if (!items || items.length === 0) {
    console.warn(
      'CustomBreadcrumb: "items" prop is empty. Breadcrumb will not render.'
    );
    return null;
  }

  if (!isMounted) {
    // Prevents rendering mismatched content between SSR and client-side
    return null;
  }

  return (
    <Breadcrumbs
      separator={separator}
      style={containerStyle}
      maxItems={maxItems}
      itemsBeforeCollapse={itemsBeforeCollapse}
      itemsAfterCollapse={itemsAfterCollapse}
      expandText={expandText}
      aria-label="breadcrumb"
      {...props}
    >
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        const key = `breadcrumb-item-${index}`;

        if (item.href && !isLastItem) {
          return (
            <Link key={key} href={item.href} passHref {...item.linkProps}>
              <MuiLink
                component={'span'}
                underline="hover"
                color="inherit"
                style={linkStyle}
              >
                {item.label}
              </MuiLink>
            </Link>
          );
        } else {
          return (
            <MuiTypography
              key={key}
              color="text.primary"
              component="div"
              style={{ display: 'inline', ...linkStyle }}
            >
              {item.label}
            </MuiTypography>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumb;
