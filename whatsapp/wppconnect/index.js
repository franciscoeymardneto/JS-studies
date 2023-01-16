const { create } = require('@wppconnect-team/wppconnect')

create()
    .then((wpp) => start(wpp))
    .catch((error) => console.log(error));

const start = (wpp) => {
    wpp.onMessage(async (message) => {
        console.log(message.body)
       
        wpp.sendMessage(message.from, response);
    });
}