import moment from 'moment';

export const FUNC_GO_BACK = 'GO_BACK';
export const FUNC_CLOSE = 'CLOSE';

export const CHAT_MESSAGE = 'CHAT_MESSAGE';

export const FAKE_DATA = [
    {
        id: 'A0003',
        author: '航海王',
        avatar: 'avatar-3.png',
        message: '你好啊小帥哥，連名字都可以這麼威啊～',
        images: null,
        time: +moment()
    },
    {
        id: 'A0004',
        author: '烏魯魯',
        avatar: 'avatar-4.png',
        message: '就是啊！小明，你一定有很多朋友吧！👏👏',
        images: null,
        time: +moment()
    },
    {
        id: 'A0005',
        author: 'John',
        avatar: 'avatar-5.png',
        message: '連我都忍不住想要見你了～😊',
        images: null,
        time: +moment()
    },
    {
        id: 'A0006',
        author: 'Jim',
        avatar: 'avatar-6.png',
        message: '世界很美好❤️',
        images: null,
        time: +moment()
    }
];
