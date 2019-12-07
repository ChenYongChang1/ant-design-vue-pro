import { request } from './Requests';

// 用户模块
export const User = (() => {
  let api = '/user';
  return {
    login: data => {
      return request(api + '/login', 'post', {}, data);
    },
  };
})();
