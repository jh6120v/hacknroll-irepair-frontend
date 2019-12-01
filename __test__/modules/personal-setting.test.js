import each from 'jest-each';
import personalSettingReducer, { personalSettingSet } from '../../src/modules/personal-setting';

describe('test personal-setting modules.', () => {
    each([
        [
            'personalSettingSet',
            personalSettingSet,
            {
                type: '@@PERSONAL_SETTING/SETTING_SET',
                payload: {}
            }
        ]
    ]).it('should dispatch %s action to change personal-setting.', (name, actionCreator, expected) => {
        expect(actionCreator()).toEqual(expected);
    });

    it('should merge personalSettingSet and remove duplicated property when action is dispatched.', () => {
        const result = personalSettingReducer({
            id: 'id',
            author: 'author',
            avatar: 'avatar'
        }, personalSettingSet({
            id: 'testId',
            author: 'testAuthor',
            avatar: 'testAvatar'
        }));

        expect(result).toEqual({
            id: 'testId',
            author: 'testAuthor',
            avatar: 'testAvatar'
        });
    });
});
