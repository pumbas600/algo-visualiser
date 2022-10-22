import { createContext, useContext } from 'react';

export interface SidebarContextState {
  isExpanded: boolean;
  setIsExpanded(isExpanded: boolean): void;
}

export const SidebarContext = createContext<SidebarContextState>({
  isExpanded: false,
  setIsExpanded: () => {
    throw new Error('This function has not been implemented yet');
  },
});

const useSidebarContext = () => useContext(SidebarContext);

export default useSidebarContext;
