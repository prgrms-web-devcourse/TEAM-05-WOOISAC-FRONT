import { ChangeEvent, MouseEventHandler, useContext } from 'react';
import { personalColors } from '~/constants';
import { ProfileModalContext } from '../contexts';
import useEditProfile from './useEditProfile';

const useProfileModal = () => {
  const profileModalContext = useContext(ProfileModalContext);
  const { mutate: editProfile } = useEditProfile();

  if (!profileModalContext) throw new Error('Cannot find ProfileModalProvider');

  const {
    userInfo,
    activeEdit,
    setActiveEdit,
    editUserInfo,
    setEditUserInfo,
    modalId,
  } = profileModalContext;

  const handleActiveEdit = () => {
    if (!activeEdit) {
      setActiveEdit(true);
      setEditUserInfo(userInfo);

      return;
    }

    editProfile({ data: editUserInfo, userId: modalId });
    setActiveEdit(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setEditUserInfo({
      ...editUserInfo,
      [id]: value,
    });
  };

  const handleColorChange: MouseEventHandler<HTMLDivElement> = (event) => {
    const { id: color } = event.currentTarget;

    setEditUserInfo({
      ...editUserInfo,
      calendarColor: personalColors[color as keyof typeof personalColors],
    });
  };

  const handleAvatarChange = (file: File) => {
    setEditUserInfo({
      ...editUserInfo,
      imageUrl: file,
    });
  };

  const getNewMBTI = (value: string) => {
    let newMBTI = '';

    if (['E', 'I'].includes(value)) {
      newMBTI = value + editUserInfo.mbti.slice(1);
    } else if (['S', 'N'].includes(value)) {
      newMBTI =
        editUserInfo.mbti.slice(0, 1) + value + editUserInfo.mbti.slice(2);
    } else if (['T', 'F'].includes(value)) {
      newMBTI =
        editUserInfo.mbti.slice(0, 2) + value + editUserInfo.mbti.slice(3);
    } else if (['J', 'P'].includes(value)) {
      newMBTI = editUserInfo.mbti.slice(0, 3) + value;
    } else {
      newMBTI = editUserInfo.mbti as string;
    }

    return newMBTI;
  };

  const handleMBTIChange: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.target instanceof HTMLButtonElement)) return;

    const { value } = event.target;

    if (editUserInfo.mbti.includes(value)) return;

    const newMBTI = getNewMBTI(value);

    setEditUserInfo({
      ...editUserInfo,
      mbti: newMBTI,
    });
  };

  return {
    activeEdit,
    handleActiveEdit,
    editUserInfo,
    handleInputChange,
    handleColorChange,
    handleMBTIChange,
    handleAvatarChange,
    userInfo,
  };
};

export default useProfileModal;
