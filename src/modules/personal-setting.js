import { createActionCreator, getRandomAvatar, getRandomID } from '../commons/utils';
import { createReducer } from '../store/reducers';

// Actions
const actionCreator = createActionCreator('@@PERSONAL_SETTING');
const personalSettingSet = actionCreator('SETTING_SET');

export { personalSettingSet };


// Reducers
const initialState = {
    id: getRandomID(),
    author: 'Guest',
    avatar: getRandomAvatar()
};

const handlers = {
    [personalSettingSet.type]: (state, { payload }) => ({
        ...state,
        ...payload
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
