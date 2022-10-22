import { Children, ReactElement, ReactNode } from 'react';

export function getChildren(children?: ReactNode): ReactElement<unknown>[] {
  return Children.toArray(children)
    .filter((child) => typeof child === 'object')
    .map((child) => child as ReactElement<unknown>);
}
