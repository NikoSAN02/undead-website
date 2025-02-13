'use client';

import { useScreenSize } from '../hooks/useScreenSize';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

export default function LayoutWrapper() {
  const { isMobile, isClient } = useScreenSize();
  
  // Show a default layout (desktop) during server-side rendering
  if (!isClient) return <DesktopLayout />;
  
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}