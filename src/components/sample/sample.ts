import PubSub from 'pubsub-js'

PubSub.subscribe('sample', (sample: string) => {
    console.log(sample)
})