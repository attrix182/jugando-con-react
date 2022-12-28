import { AvatarModel } from './Avatar.model';

export const saveAvatar = (avatar: AvatarModel): void => {
  let avatars:AvatarModel[] = []
  avatars = localStorage.getItem('avatars') ? JSON.parse(localStorage.getItem('avatars') || '[]') : [];
  avatars.push(avatar);
  localStorage.setItem('avatars', JSON.stringify(avatars));
};

export const getAvatars = (): AvatarModel[] => {
  let avatars = localStorage.getItem('avatars');
  if(!avatars) return [{nickname: '', color: ''}];
    return JSON.parse(avatars);
};
