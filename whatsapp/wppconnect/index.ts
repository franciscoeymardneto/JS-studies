const { create } = require('@wppconnect-team/wppconnect')
import { retext } from 'retext';
import retextEmoji from 'retext-emoji';
import retextProfanities from 'retext-profanities';


create()
    .then((wpp: any) => start(wpp))
    .catch((error: any) => console.log(error));

const start = (wpp: any) => {
    wpp.onMessage(async (message: any) => {
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