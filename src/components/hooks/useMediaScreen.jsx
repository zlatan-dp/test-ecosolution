import { useMediaQuery } from 'react-responsive';

export const useMediaScreen = () => {
  const isMob = useMediaQuery({ maxWidth: 767.9 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isTabletOnly = useMediaQuery({ minWidth: 768, maxWidth: 1279.9 });

  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return { isMob, isTablet, isTabletOnly, isDesktop };
};
