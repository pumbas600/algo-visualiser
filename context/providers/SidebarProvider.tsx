import { ReactNode, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const SidebarProvider = ({ children }: { children?: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
