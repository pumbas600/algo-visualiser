import { Children, JSXElementConstructor, ReactElement, ReactNode } from 'react';

export function getChildren(children?: ReactNode): ReactElement<unknown>[] {
  return Children.toArray(children)
    .filter((child) => typeof child === 'object')
    .map((child) => child as ReactElement<unknown>);
}

export function isComponent<P>(
  type: JSXElementConstructor<P>,
  c:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
): c is ReactElement<P> {
  return typeof c === 'object' && (c as ReactElement<unknown>).type === type;
}
