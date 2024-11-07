import * as types from './type';

export const plusActionCreator = (currCount) => ({
  type: types.CHANGE_COUNT,
  payload: (currCount + 1),
});

