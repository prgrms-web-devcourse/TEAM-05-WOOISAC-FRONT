import { memo } from 'react';
import { useMain } from '../../hooks';
import CoupleProfile from './CoupleProfile';
import SoloProfile from './SoloProfile';

const MainProfile = memo(() => {
  const { coupleMode } = useMain();

  return coupleMode ? <CoupleProfile /> : <SoloProfile />;
});

export default MainProfile;
