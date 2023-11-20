import { DdayModalProvider } from '../../contexts';
import { useMain, useProfile } from '../../hooks';
import MainDdayModal from '../MainDdayModal/MainDdayModal';
import MainProfileModal from '../MainProfileModal/MainProfileModal';
import { Button } from '~/components/common';

const MainModalButtons = () => {
  const { coupleMode, coupleProfile } = useMain();
  const { handleOpenProfileModal, openDdayModal } = useProfile();

  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        onClick={() => handleOpenProfileModal(coupleProfile.boyId)}
        size="medium"
        className="border border-grey-200 bg-base-white font-bold text-grey-400"
      >
        프로필 수정
      </Button>
      <MainProfileModal />
      {coupleMode && (
        <>
          <Button
            onClick={openDdayModal}
            size="medium"
            className="border border-grey-200 bg-base-white font-bold text-grey-400"
          >
            디데이 수정
          </Button>
          <DdayModalProvider>
            <MainDdayModal />
          </DdayModalProvider>
        </>
      )}
    </div>
  );
};

export default MainModalButtons;