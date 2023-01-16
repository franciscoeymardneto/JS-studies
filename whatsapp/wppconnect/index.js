const { create } = require('@wppconnect-team/wppconnect')
const { retext } = require('retext')

create()
    .then((wpp) => start(wpp))
    .catch((error) => console.log(error));

const start = (wpp) => {
    wpp.onMessage(async (message) => {
        console.log(message.body)

        retext()
            .use(retextProfanities)
            .use(retextEmoji, { convert: 'encode' })
            .process(message.body)
            .then((file) => {
                wpp.sendMessage(message.from, 'Retext:')
                wpp.sendMessage(message.from, String(file))
            })

        
    });
}