import axios from 'axios';
// import { loadProgressBar } from 'axios-progress-bar';

export const getChatMessage = () => {
    const instance = axios.create();

    // loadProgressBar({
    //     showSpinner: false
    // }, instance);

    return instance({
        url: 'https://my-json-server.typicode.com/jh6120v/json-server-online-test/message',
        method: 'get',
        responseType: 'json',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
};
