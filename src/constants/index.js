export const FUNC_GO_BACK = 'GO_BACK';
export const FUNC_CLOSE = 'CLOSE';

export const CHAT_MESSAGE = 'CHAT_MESSAGE';

export const CHAT_ROOM_ID = '20191116001';

// wss://nchan.iphpo.com/pubsub?id=
export const WEBSOCKET_URL = 'wss://nchan.iphpo.com/pubsub?id=';
// export const WEBSOCKET_URL = 'wss://dxl9ub4w15.execute-api.us-west-2.amazonaws.com/stage';

export const CHAT_INITIAL_MESSAGE = {
    message: [
        {
            id: 'A001',
            author: 'iRepair',
            avatar: 'avatar-1.png',
            message: null,
            images: 'data:image/png;base64,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',
            time: 1573568899283
        },
        {
            id: 'A001',
            author: 'iRepair',
            avatar: 'avatar-1.png',
            message: '安安你好，歡迎來到自信補給站，在這裡你將會獲得無比的自信心，趕緊跟大家介紹一下自己吧！',
            images: null,
            time: 1573568899285
        }
    ]
};
