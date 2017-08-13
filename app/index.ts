import { Stats } from './stats';
import * as stats from './stats';
import * as mailgun from 'mailgun-js';

var privateInfo = require('../../NEVER_COMMIT/private.json');

var statsInfo: Stats = stats.getStat();
var statsString: string = JSON.stringify(statsInfo, null, 2);
console.log(statsString);

console.log(privateInfo);

var mailInit = { apiKey: privateInfo.mailgun.api_key, domain: privateInfo.mailgun.domain };
console.log(mailInit);
var mailGunInit = mailgun(mailInit);

var data = {
    from: privateInfo.mailgun.from_email,
    to: privateInfo.mail.to,
    subject: "Current stats",
    text: statsString
}

mailGunInit.messages().send(data, function (error, body) {
    if (error) {
        console.error(error);
    }

    console.log("Message body: ")
    console.error(body);
});