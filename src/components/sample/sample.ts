import $ from 'jquery';
import PubSub from 'pubsub-js';

PubSub.subscribe('sample', (msg: string, data: string) => {
    console.log(msg, data);
});
