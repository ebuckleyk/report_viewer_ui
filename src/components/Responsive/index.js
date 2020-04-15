import { useMediaQuery } from 'react-responsive';

// export function () => isDesktop = useMediaQuery({minWidth: 1025});
export function isDesktop() {
  return useMediaQuery({minWidth: 1025});
}
export function isTablet() {
  return useMediaQuery({minWidth: 768, maxWidth: 1024});
}
export function isMobile() {
  return useMediaQuery({maxWidth: 767});
}
export function isNotMobile() {
  return useMediaQuery({minWidth: 768});
}

export const Desktop = ({children}) => {
  return isDesktop() ? children : null;
}

export const Tablet = ({children}) => {
  return isTablet() ? children : null;
}

export const Mobile = ({children}) => {
  return isMobile() ? children : null;
}

export const Default = ({children}) => {
  return isNotMobile() ? children : null;
}

export const TabletOrDesktop = ({children}) => {
  return (isTablet() || isDesktop()) ? children : null;
}