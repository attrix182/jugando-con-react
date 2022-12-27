import { User } from '../../models/User.model';

export const setUser = (user: User): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = (): User | string => {
  let user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return 'No found user';
};
