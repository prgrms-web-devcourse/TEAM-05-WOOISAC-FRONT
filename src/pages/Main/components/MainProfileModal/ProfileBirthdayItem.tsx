import ProfileItemWrapper from './ProfileItemWrapper';
import { useProfileModal } from '~/pages/Main/hooks';

const ProfileBirthdayItem = () => {
  const { userInfo, handleInputChange, activeEdit } = useProfileModal();

  return (
    <ProfileItemWrapper label="birthday" title="생일">
      <input
        id="birthday"
        readOnly={!activeEdit}
        type="date"
        className="font-large input m-0 h-5 p-0 pl-1 focus:outline-none"
        value={userInfo.birthday}
        onChange={handleInputChange}
      />
    </ProfileItemWrapper>
  );
};

export default ProfileBirthdayItem;