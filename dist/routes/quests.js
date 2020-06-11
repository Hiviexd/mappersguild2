"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../helpers/middlewares");
const party_1 = require("../models/party");
const points_1 = require("../helpers/points");
const helpers_1 = require("../helpers/helpers");
const beatmap_1 = require("../models/beatmap/beatmap");
const beatmap_2 = require("../interfaces/beatmap/beatmap");
const quest_1 = require("../models/quest");
const quest_2 = require("../interfaces/quest");
const log_1 = require("../models/log");
const log_2 = require("../interfaces/log");
const discordApi_1 = require("../helpers/discordApi");
const user_1 = require("../models/user");
const invite_1 = require("../models/invite");
const invite_2 = require("../interfaces/invite");
const featuredArtist_1 = require("../models/featuredArtist");
const spentPoints_1 = require("../models/spentPoints");
const spentPoints_2 = require("../interfaces/spentPoints");
const points_2 = require("../helpers/points");
const questsRouter = express_1.default.Router();
questsRouter.use(middlewares_1.isLoggedIn);
const beatmapPopulate = [
    { path: 'tasks', populate: { path: 'mappers' } },
];
const pointsPopulate = [
    { path: 'members', select: 'osuId username rank easyPoints normalPoints hardPoints insanePoints expertPoints storyboardPoints questPoints modPoints hostPoints contestParticipantPoints contestJudgePoints contestVotePoints spentPoints' },
    { path: 'leader', select: 'osuId username' },
];
const cannotFindUserMessage = 'Cannot find user!';
function updatePartyInfo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = yield party_1.PartyService.queryById(id, {
            populate: [{ path: 'members', select: 'rank osuPoints taikoPoints catchPoints maniaPoints' }],
        });
        let rank = 0;
        const modes = [];
        if (!p || party_1.PartyService.isError(p)) {
            return helpers_1.defaultErrorMessage;
        }
        p.members.forEach(user => {
            rank += user.rank;
            if (!modes.includes(user.mainMode)) {
                modes.push(user.mainMode);
            }
        });
        p.rank = Math.round(rank / p.members.length);
        p.modes = modes;
        yield party_1.PartyService.saveOrFail(p);
        const updatedParty = yield party_1.PartyService.queryById(id);
        if (!updatedParty || party_1.PartyService.isError(updatedParty)) {
            return helpers_1.defaultErrorMessage;
        }
        return { success: 'ok' };
    });
}
questsRouter.get('/', (req, res) => {
    var _a, _b;
    res.render('quests', {
        title: 'Quests',
        script: 'quests.js',
        isQuests: true,
        loggedInAs: (_a = req.session) === null || _a === void 0 ? void 0 : _a.osuId,
        userMongoId: (_b = req.session) === null || _b === void 0 ? void 0 : _b.mongoId,
        pointsInfo: res.locals.userRequest.pointsInfo,
    });
});
questsRouter.get('/relevantInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const openQuests = yield quest_1.QuestService.queryAll({
        query: { modes: res.locals.userRequest.mainMode, status: 'open', expiration: { $gt: new Date() } },
        useDefaults: true,
    });
    res.json({
        openQuests,
        userMongoId: (_a = req.session) === null || _a === void 0 ? void 0 : _a.mongoId,
        group: res.locals.userRequest.group,
        rank: res.locals.userRequest.rank,
        mainMode: res.locals.userRequest.mainMode,
        availablePoints: res.locals.userRequest.availablePoints,
    });
}));
questsRouter.get('/searchOnLoad/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const urlQuest = yield quest_1.QuestService.queryById(req.params.id, { defaultPopulate: true });
    if (!urlQuest) {
        return res.json({ error: 'Quest ID does not exist!' });
    }
    res.json(urlQuest);
}));
questsRouter.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let quests;
    if (req.query.mode != 'any') {
        quests = yield quest_1.QuestService.queryAll({
            query: { modes: req.query.mode, status: { $ne: 'hidden' } },
            useDefaults: true,
        });
    }
    else {
        quests = yield quest_1.QuestService.queryAll({
            query: { status: { $ne: 'hidden' } },
            useDefaults: true,
        });
    }
    res.json({ quests });
}));
questsRouter.post('/createParty/:id', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const p = yield party_1.PartyService.createOrFail((_b = req.session) === null || _b === void 0 ? void 0 : _b.mongoId, res.locals.userRequest.mainMode);
    yield updatePartyInfo(p._id);
    yield quest_1.QuestService.update(req.params.id, { $push: { parties: p._id } });
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.id, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `created a party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/deleteParty/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const p = yield party_1.PartyService.removeOrFail(req.params.partyId);
    yield quest_1.QuestService.updateOrFail(req.params.questId, { $pull: { parties: p._id } });
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `deleted a party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/togglePartyLock/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield party_1.PartyService.updateOrFail(req.params.partyId, { lock: !req.body.lock });
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `toggled lock on party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/togglePartyMode/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const p = yield party_1.PartyService.queryByIdOrFail(req.params.partyId);
    if (p.modes.includes(req.body.mode)) {
        yield party_1.PartyService.update(req.params.partyId, { $pull: { modes: req.body.mode } });
    }
    else {
        yield party_1.PartyService.update(req.params.partyId, { $push: { modes: req.body.mode } });
    }
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `toggled "${req.body.mode}" mode on party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/joinParty/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    yield party_1.PartyService.updateOrFail(req.params.partyId, { $push: { members: (_c = req.session) === null || _c === void 0 ? void 0 : _c.mongoId } });
    yield updatePartyInfo(req.params.partyId);
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `joined party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/leaveParty/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    yield party_1.PartyService.updateOrFail(req.params.partyId, { $pull: { members: (_d = req.session) === null || _d === void 0 ? void 0 : _d.mongoId } });
    yield updatePartyInfo(req.params.partyId);
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `left party for ${q.name}`, log_2.LogCategory.Party);
    if (q.associatedMaps) {
        for (let i = 0; i < q.associatedMaps.length; i++) {
            let valid = true;
            const b = yield beatmap_1.BeatmapService.queryByIdOrFail(q.associatedMaps[i]._id, { populate: beatmapPopulate });
            b.tasks.forEach(task => {
                task.mappers.forEach(mapper => {
                    if (mapper.id == req.session.mongoId) {
                        valid = false;
                    }
                });
            });
            if (!valid) {
                yield beatmap_1.BeatmapService.update(q.associatedMaps[i]._id, { quest: null });
            }
        }
    }
})));
questsRouter.post('/inviteToParty/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inviteError = 'Invite not sent: ';
    let u;
    if (req.body.username.indexOf('[') >= 0 || req.body.username.indexOf(']') >= 0) {
        u = yield user_1.UserService.queryOneOrFail({
            query: { username: new RegExp('^\\' + req.body.username + '$', 'i') },
        }, inviteError + cannotFindUserMessage);
    }
    else {
        u = yield user_1.UserService.queryOneOrFail({
            query: { username: new RegExp('^' + req.body.username + '$', 'i') },
        }, inviteError + cannotFindUserMessage);
    }
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    const currentParties = yield party_1.PartyService.queryAll({ query: { members: u._id } });
    if (!party_1.PartyService.isError(currentParties)) {
        const duplicate = q.parties.some(questParty => {
            return currentParties.some(userParty => questParty.id == userParty.id);
        });
        if (duplicate) {
            return res.json({ error: inviteError + 'User is already in a party for this quest!' });
        }
    }
    if (u.availablePoints < q.price) {
        return res.json({ error: inviteError + 'User does not have enough points to accept this quest!' });
    }
    res.json({ success: 'Invite sent!' });
    invite_1.InviteService.createPartyInvite(u._id, req.session.mongoId, req.params.partyId, `wants you to join their party`, invite_2.ActionType.Join, req.params.partyId, req.params.questId);
})));
questsRouter.post('/transferPartyLeader/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userId.length) {
        return res.json({ error: cannotFindUserMessage });
    }
    const u = yield user_1.UserService.queryByIdOrFail(req.body.userId, {}, cannotFindUserMessage);
    yield party_1.PartyService.updateOrFail(req.params.partyId, { leader: u._id });
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `transferred party leader in party for ${q.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/kickPartyMember/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userId.length) {
        return res.json({ error: cannotFindUserMessage });
    }
    const u = yield user_1.UserService.queryByIdOrFail(req.body.userId, {}, cannotFindUserMessage);
    yield party_1.PartyService.updateOrFail(req.params.partyId, { $pull: { members: u._id } });
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    res.json(q);
    log_1.LogService.create(req.session.mongoId, `kicked member from party for ${q.name}`, log_2.LogCategory.Party);
    if (q.associatedMaps) {
        for (let i = 0; i < q.associatedMaps.length; i++) {
            const b = yield beatmap_1.BeatmapService.queryById(q.associatedMaps[i]._id, { populate: beatmapPopulate });
            if (b && !beatmap_1.BeatmapService.isError(b)) {
                let valid = true;
                b.tasks.forEach(task => {
                    task.mappers.forEach(mapper => {
                        if (mapper.id == u.id) {
                            valid = false;
                        }
                    });
                });
                if (!valid) {
                    yield beatmap_1.BeatmapService.update(q.associatedMaps[i]._id, { quest: null });
                }
            }
        }
    }
})));
questsRouter.post('/acceptQuest/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const p = yield party_1.PartyService.queryByIdOrFail(req.params.partyId, { populate: pointsPopulate }, `Party doesn't exist!`);
    if (!p.modes.length) {
        return res.json({ error: 'Your party has no modes selected!' });
    }
    const q = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    p.members.forEach(member => {
        if (member.availablePoints < q.price) {
            return res.json({ error: 'Someone in your party does not have enough points to accept the quest!' });
        }
    });
    if (p.members.length < q.minParty
        || p.members.length > q.maxParty
        || p.rank < q.minRank
        || q.isExpired) {
        return res.json({ error: 'Something went wrong!' });
    }
    for (let i = 0; i < p.modes.length; i++) {
        const mode = p.modes[i];
        const invalidQuest = yield quest_1.QuestService.queryOne({
            query: {
                name: q.name,
                modes: mode,
                $or: [
                    { status: quest_2.QuestStatus.WIP },
                    { status: quest_2.QuestStatus.Done },
                ],
            },
            defaultPopulate: true,
        });
        if (invalidQuest) {
            return res.json({ error: 'Quest already exists for selected mode(s)!' });
        }
        if (mode != 'osu') {
            return res.json({ error: 'MBC quests do not support modes other than osu!' });
        }
    }
    let newQuest;
    if (q.modes.length == p.modes.length) {
        q.accepted = new Date();
        q.status = quest_2.QuestStatus.WIP;
        q.deadline = new Date(new Date().getTime() + q.timeframe);
        q.parties = [];
        q.currentParty = p._id;
        yield quest_1.QuestService.saveOrFail(q);
    }
    else {
        for (let i = 0; i < p.modes.length; i++) {
            const mode = p.modes[i];
            yield quest_1.QuestService.update(q._id, {
                $pull: { modes: mode },
            });
        }
        yield quest_1.QuestService.update(q._id, {
            $pull: { parties: p._id },
        });
        newQuest = yield quest_1.QuestService.create({
            creator: q.creator,
            name: q.name,
            price: q.price,
            descriptionMain: q.descriptionMain,
            timeframe: q.timeframe,
            minParty: q.minParty,
            maxParty: q.maxParty,
            minRank: q.minRank,
            art: q.art,
            isMbc: q.isMbc,
            modes: p.modes,
            accepted: new Date(),
            status: quest_2.QuestStatus.WIP,
            deadline: new Date(new Date().getTime() + q.timeframe),
            currentParty: p._id,
            requiredMapsets: q.requiredMapsets,
        });
    }
    p.members.forEach(member => {
        spentPoints_1.SpentPointsService.create(spentPoints_2.SpentPointsCategory.AcceptQuest, member._id, q._id);
        points_2.updateUserPoints(member.id);
    });
    const allQuests = yield quest_1.QuestService.queryAll({
        query: {},
        useDefaults: true,
    });
    res.json({ quests: allQuests, availablePoints: res.locals.userRequest.availablePoints - q.price });
    let modeList = '';
    for (let i = 0; i < p.modes.length; i++) {
        modeList += p.modes[i];
        if (i != p.modes.length - 1) {
            modeList += ', ';
        }
    }
    log_1.LogService.create(req.session.mongoId, `party accepted quest "${q.name}" for mode${p.modes.length > 1 ? 's' : ''} "${modeList}"`, log_2.LogCategory.Quest);
    let memberList = '';
    for (let i = 0; i < p.members.length; i++) {
        const user = p.members[i];
        memberList += `[**${user.username}**](https://osu.ppy.sh/users/${user.osuId})`;
        if (i + 1 < p.members.length) {
            memberList += ', ';
        }
    }
    let url = `https://assets.ppy.sh/artists/${q.art}/cover.jpg`;
    if (q.isMbc) {
        url = 'https://mappersguild.com/images/mbc-icon.png';
    }
    discordApi_1.webhookPost([{
            author: {
                name: `${p.leader.username}'s party`,
                url: `https://osu.ppy.sh/users/${p.leader.osuId}`,
                icon_url: `https://a.ppy.sh/${p.leader.osuId}`,
            },
            description: `Accepted quest: [**${q.name}**](https://mappersguild.com/quests?id=${newQuest ? newQuest.id : q.id}) [**${p.modes.join(', ')}**]`,
            color: discordApi_1.webhookColors.green,
            thumbnail: {
                url,
            },
            fields: [
                {
                    name: 'Party members',
                    value: memberList,
                },
            ],
        }]);
})));
questsRouter.post('/dropQuest/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [p, q] = yield Promise.all([
        party_1.PartyService.queryByIdOrFail(req.params.partyId, { defaultPopulate: true }, `Party doesn't exist!`),
        quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true }),
    ]);
    if (!q.currentParty || q.currentParty.id != p.id) {
        return res.json({ error: 'Invalid request!' });
    }
    if (q.associatedMaps) {
        for (let i = 0; i < q.associatedMaps.length; i++) {
            yield beatmap_1.BeatmapService.update(q.associatedMaps[i]._id, { quest: null });
        }
    }
    const openQuest = yield quest_1.QuestService.queryOne({
        query: {
            name: q.name,
            status: quest_2.QuestStatus.Open,
        },
    });
    if (openQuest && !quest_1.QuestService.isError(openQuest)) {
        yield Promise.all([
            quest_1.QuestService.update(openQuest._id, {
                $push: { modes: q.modes },
            }),
            quest_1.QuestService.update(req.params.questId, { status: 'hidden' }),
        ]);
    }
    else {
        yield quest_1.QuestService.update(req.params.questId, {
            status: quest_2.QuestStatus.Open,
            currentParty: null,
        });
    }
    const allQuests = yield quest_1.QuestService.queryAll({ useDefaults: true });
    res.json(allQuests);
    let modeList = '';
    for (let i = 0; i < q.modes.length; i++) {
        modeList += q.modes[i];
        if (i != q.modes.length - 1) {
            modeList += ', ';
        }
    }
    log_1.LogService.create(req.session.mongoId, `party dropped quest "${q.name}" for mode${q.modes.length > 1 ? 's' : ''} "${modeList}"`, log_2.LogCategory.Quest);
    let memberList = '';
    for (let i = 0; i < p.members.length; i++) {
        const user = p.members[i];
        memberList += `[**${user.username}**](https://osu.ppy.sh/users/${user.osuId})`;
        if (i + 1 < p.members.length) {
            memberList += ', ';
        }
    }
    let url = `https://assets.ppy.sh/artists/${q.art}/cover.jpg`;
    if (q.isMbc) {
        url = 'https://mappersguild.com/images/mbc-icon.png';
    }
    discordApi_1.webhookPost([{
            author: {
                name: `${p.leader.username}'s party`,
                url: `https://osu.ppy.sh/users/${p.leader.osuId}`,
                icon_url: `https://a.ppy.sh/${p.leader.osuId}`,
            },
            color: discordApi_1.webhookColors.red,
            description: `Dropped quest: [**${q.name}**](https://mappersguild.com/quests?id=${openQuest && !quest_1.QuestService.isError(openQuest) ? openQuest.id : q.id}) [**${p.modes.join(', ')}**]`,
            thumbnail: {
                url,
            },
            fields: [{
                    name: 'Party members',
                    value: memberList,
                }],
        }]);
    party_1.PartyService.remove(req.params.partyId);
})));
questsRouter.post('/reopenQuest/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quest = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    if (res.locals.userRequest.availablePoints < (quest.price * 0.5 + 25)) {
        return res.json({ error: `You don't have enough points to re-open this quest!` });
    }
    const openQuest = yield quest_1.QuestService.queryOne({
        query: {
            name: quest.name,
            status: quest_2.QuestStatus.Open,
        },
    });
    const newExpiration = new Date();
    newExpiration.setDate(newExpiration.getDate() + 90);
    if (req.body.status == quest_2.QuestStatus.Open) {
        if (openQuest && !quest_1.QuestService.isError(openQuest) && !openQuest.isExpired) {
            yield Promise.all([
                quest_1.QuestService.update(openQuest._id, {
                    $push: { modes: quest.modes },
                    expiration: newExpiration,
                }),
                quest_1.QuestService.update(req.params.questId, { status: 'hidden' }),
            ]);
        }
        else {
            yield quest_1.QuestService.update(req.params.questId, {
                expiration: newExpiration,
            });
        }
    }
    spentPoints_1.SpentPointsService.create(spentPoints_2.SpentPointsCategory.ReopenQuest, req.session.mongoId, quest._id);
    points_2.updateUserPoints(req.session.mongoId);
    const allQuests = yield quest_1.QuestService.queryAll({ useDefaults: true });
    res.json({ quests: allQuests, availablePoints: res.locals.userRequest.availablePoints });
    log_1.LogService.create(req.session.mongoId, `re-opened quest "${quest.name}"`, log_2.LogCategory.Quest);
    let url = `https://assets.ppy.sh/artists/${quest.art}/cover.jpg`;
    if (quest.isMbc) {
        url = 'https://mappersguild.com/images/mbc-icon.png';
    }
    discordApi_1.webhookPost([{
            author: {
                name: req.session.username,
                url: `https://osu.ppy.sh/users/${req.session.osuId}`,
                icon_url: `https://a.ppy.sh/${req.session.osuId}`,
            },
            color: discordApi_1.webhookColors.white,
            description: `Quest re-opened: [**${quest.name}**](https://mappersguild.com/quests?id=${quest.id})`,
            thumbnail: {
                url,
            },
            fields: [{
                    name: 'Objective',
                    value: `${quest.descriptionMain}`,
                }],
        }]);
})));
questsRouter.post('/extendDeadline/:partyId/:questId', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const party = yield party_1.PartyService.queryByIdOrFail(req.params.partyId, { populate: pointsPopulate }, `Party doesn't exist!`);
    let quest = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    const notEnoughPoints = party.members.some(m => m.availablePoints < 10);
    if (notEnoughPoints) {
        return res.json({ error: 'One or more of your party members do not have enough points to extend the deadline!' });
    }
    party.members.forEach(member => {
        spentPoints_1.SpentPointsService.create(spentPoints_2.SpentPointsCategory.ExtendDeadline, member.id, quest.id);
        points_2.updateUserPoints(member.id);
    });
    const deadline = new Date(quest.deadline);
    deadline.setDate(deadline.getDate() + 30);
    quest.deadline = deadline;
    yield quest_1.QuestService.saveOrFail(quest);
    quest = yield quest_1.QuestService.queryByIdOrFail(req.params.questId, { defaultPopulate: true });
    const user = yield user_1.UserService.queryByIdOrFail(req.session.mongoId);
    res.json({ quest, availablePoints: user.availablePoints });
    log_1.LogService.create(req.session.mongoId, `extended deadline for ${quest.name}`, log_2.LogCategory.Party);
})));
questsRouter.post('/submitQuest', middlewares_1.isNotSpectator, helpers_1.canFail((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f, _g, _h, _j;
    req.body.modes = [beatmap_2.BeatmapMode.Osu, beatmap_2.BeatmapMode.Taiko, beatmap_2.BeatmapMode.Catch, beatmap_2.BeatmapMode.Mania];
    req.body.minRank = 0;
    req.body.status = 'pending';
    req.body.creator = (_f = (_e = req) === null || _e === void 0 ? void 0 : _e.session) === null || _f === void 0 ? void 0 : _f.mongoId;
    const artist = yield featuredArtist_1.FeaturedArtistService.queryOne({ query: { osuId: req.body.art } });
    if (!artist || featuredArtist_1.FeaturedArtistService.isError(artist)) {
        req.body.art = 0;
    }
    const quest = yield quest_1.QuestService.create(req.body);
    if (quest_1.QuestService.isError(quest)) {
        return res.json({ error: 'Quest could not be created!' });
    }
    const points = points_1.findCreateQuestPointsSpent(quest.art, quest.requiredMapsets);
    const user = yield user_1.UserService.queryByIdOrFail((_h = (_g = req) === null || _g === void 0 ? void 0 : _g.session) === null || _h === void 0 ? void 0 : _h.mongoId, {}, cannotFindUserMessage);
    if (user.availablePoints < points) {
        quest_1.QuestService.remove(quest.id);
        return res.json({ error: 'Not enough points to perform this action!' });
    }
    spentPoints_1.SpentPointsService.create(spentPoints_2.SpentPointsCategory.CreateQuest, req.session.mongoId, quest._id);
    points_2.updateUserPoints(req.session.mongoId);
    res.json(true);
    log_1.LogService.create((_j = req.session) === null || _j === void 0 ? void 0 : _j.mongoId, `submitted quest for approval`, log_2.LogCategory.Quest);
})));
exports.default = questsRouter;
