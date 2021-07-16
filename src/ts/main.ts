import PubSub from 'pubsub-js';
import '../components/sample/sample';

class Main {
    onDOMContentLoaded = () => {
        PubSub.publish('sample', 'data sample');
    };
}

const main = new Main();
document.addEventListener('DOMContentLoaded', main.onDOMContentLoaded);
