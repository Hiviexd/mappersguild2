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
Object.defineProperty(exports, "__esModule", { value: true });
const quest_1 = require("../interfaces/quest");
const beatmap_1 = require("../interfaces/beatmap/beatmap");
const beatmap_2 = require("../models/beatmap/beatmap");
const task_1 = require("../interfaces/beatmap/task");
const task_2 = require("../models/beatmap/task");
const contest_1 = require("../models/contest/contest");
const submission_1 = require("../models/contest/submission");
const spentPoints_1 = require("../models/spentPoints");
const user_1 = require("../models/user");
const helpers_1 = require("./helpers");
function findLengthNerf(length) {
    const lengthNerf = 125;
    let newLength;
    if (length <= 90) {
        newLength = length;
    }
    else if (length <= 150) {
        newLength = ((length - 90) / 2) + 90;
    }
    else if (length <= 210) {
        newLength = ((length - 150) / 3) + 120;
    }
    else if (length <= 270) {
        newLength = ((length - 210) / 4) + 140;
    }
    else {
        newLength = ((length - 270) / 5) + 155;
    }
    return newLength / lengthNerf;
}
exports.findLengthNerf = findLengthNerf;
function findDifficultyPoints(taskName, totalMappers) {
    const difficultyPointsObject = {
        Easy: 5,
        Normal: 6,
        Hard: 7,
        Insane: 8,
        Expert: 8,
    };
    return difficultyPointsObject[taskName] / totalMappers;
}
exports.findDifficultyPoints = findDifficultyPoints;
function findQuestPoints(deadline, questCompletedDate, rankedDate) {
    const lateness = +deadline - +questCompletedDate;
    if (lateness > 0 && +rankedDate > +new Date('2019-03-01')) {
        return 7;
    }
    else {
        return 0;
    }
}
exports.findQuestPoints = findQuestPoints;
function findQuestBonus(status, deadline, rankedDate, totalMappers) {
    let questBonus = 0;
    if (status == quest_1.QuestStatus.Done) {
        const lateness = (+deadline - +rankedDate) / (24 * 3600 * 1000);
        if (lateness > 0) {
            questBonus = 2;
        }
        else if (lateness > -20) {
            questBonus = 1.5;
        }
        else if (lateness > -40) {
            questBonus = 1;
        }
        else {
            questBonus = 0.5;
        }
    }
    return questBonus / totalMappers;
}
exports.findQuestBonus = findQuestBonus;
function findStoryboardPoints(storyboardQuality) {
    if (!storyboardQuality) {
        return 0;
    }
    else if (storyboardQuality == 2) {
        return 7.5;
    }
    else {
        return (storyboardQuality * storyboardQuality + 1);
    }
}
exports.findStoryboardPoints = findStoryboardPoints;
function findReopenQuestPoints(price) {
    return price * 0.5 + 25;
}
exports.findReopenQuestPoints = findReopenQuestPoints;
function findCreateQuestPointsSpent(questArtist, requiredMapsets) {
    let points = 100;
    if (!questArtist) {
        points += 50;
    }
    if (requiredMapsets < 1) {
        points = 727;
    }
    else if (requiredMapsets == 1) {
        points += 300;
    }
    else if (requiredMapsets == 2) {
        points += 200;
    }
    else if (requiredMapsets < 10) {
        points += (10 - requiredMapsets) * 15 - 5;
    }
    return points;
}
exports.findCreateQuestPointsSpent = findCreateQuestPointsSpent;
function updateUserPoints(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const [ownTasks, hostedBeatmaps, moddedBeatmaps, submittedContests, judgedContests, ownSpentPoints] = yield Promise.all([
            task_2.TaskService.queryAll({
                query: { mappers: userId },
                select: '_id',
            }),
            beatmap_2.BeatmapService.queryAll({
                query: {
                    status: beatmap_1.BeatmapStatus.Ranked,
                    host: userId,
                },
                populate: [
                    { path: 'host', select: '_id osuId username' },
                ],
            }),
            beatmap_2.BeatmapService.queryAll({
                query: {
                    status: beatmap_1.BeatmapStatus.Ranked,
                    modders: userId,
                },
                populate: [
                    { path: 'modders', select: '_id osuId username' },
                ],
            }),
            submission_1.SubmissionService.queryAll({
                query: {
                    $and: [
                        { creator: userId },
                        { creator: { $ne: '5c6e135359d335001922e610' } },
                    ],
                },
            }),
            contest_1.ContestService.queryAll({
                query: {
                    judges: userId,
                },
            }),
            spentPoints_1.SpentPointsService.queryAll({
                query: { user: userId },
                populate: [
                    { path: 'quest', select: 'price art requiredMapsets' },
                ],
            }),
        ]);
        const userBeatmaps = yield beatmap_2.BeatmapService.queryAll({
            query: {
                status: beatmap_1.BeatmapStatus.Ranked,
                tasks: {
                    $in: ownTasks,
                },
            },
            populate: [
                { path: 'host', select: '_id osuId username' },
                { path: 'modders', select: '_id osuId username' },
                { path: 'quest', select: '_id name status price completed deadline' },
                { path: 'tasks', populate: { path: 'mappers' } },
            ],
        });
        if (!ownTasks || task_2.TaskService.isError(ownTasks) ||
            !hostedBeatmaps || beatmap_2.BeatmapService.isError(hostedBeatmaps) ||
            !moddedBeatmaps || beatmap_2.BeatmapService.isError(moddedBeatmaps) ||
            !submittedContests || submission_1.SubmissionService.isError(submittedContests) ||
            !judgedContests || contest_1.ContestService.isError(judgedContests) ||
            !ownSpentPoints || spentPoints_1.SpentPointsService.isError(ownSpentPoints) ||
            !userBeatmaps || beatmap_2.BeatmapService.isError(userBeatmaps)) {
            return helpers_1.defaultErrorMessage;
        }
        const pointsObject = {
            Easy: 0,
            Normal: 0,
            Hard: 0,
            Insane: 0,
            Expert: 0,
            Storyboard: 0,
            Mod: 0,
            Host: 0,
            QuestReward: 0,
            SpentPoints: 0,
            Rank: 0,
            osu: 0,
            taiko: 0,
            catch: 0,
            mania: 0,
            ContestParticipant: 0,
            ContestJudge: 0,
            ContestVote: 0,
            Quests: [],
        };
        userBeatmaps.forEach(beatmap => {
            let questParticipation = false;
            const lengthNerf = findLengthNerf(beatmap.length);
            beatmap.tasks.forEach(task => {
                task.mappers.forEach(mapper => {
                    if (mapper.id == userId) {
                        if (task.name != task_1.TaskName.Storyboard) {
                            let questBonus = 0;
                            if (beatmap.quest)
                                questBonus = findQuestBonus(beatmap.quest.status, beatmap.quest.deadline, beatmap.rankedDate, task.mappers.length);
                            questParticipation = Boolean(questBonus);
                            const taskPoints = findDifficultyPoints(task.name, task.mappers.length);
                            const finalPoints = ((taskPoints + questBonus) * lengthNerf);
                            pointsObject[task.name] += finalPoints;
                            pointsObject[task.mode] += finalPoints;
                        }
                        else {
                            const taskPoints = findStoryboardPoints(task.sbQuality);
                            pointsObject[task.name] += taskPoints;
                        }
                    }
                });
            });
            if (questParticipation) {
                if (pointsObject['Quests'].indexOf(beatmap.quest._id) < 0 && beatmap.quest.status == quest_1.QuestStatus.Done) {
                    pointsObject['Quests'].push(beatmap.quest._id);
                    pointsObject['QuestReward'] += findQuestPoints(beatmap.quest.deadline, beatmap.quest.completed, beatmap.rankedDate);
                }
            }
        });
        pointsObject['Host'] = hostedBeatmaps.length * 5;
        pointsObject['Mod'] = moddedBeatmaps.length;
        pointsObject['ContestParticipant'] = submittedContests.length * 5;
        if (userId != '5c6e135359d335001922e610')
            pointsObject['ContestJudge'] = judgedContests.length;
        ownSpentPoints.forEach(spentPoints => {
            if (spentPoints.category == 'acceptQuest') {
                pointsObject['SpentPoints'] += spentPoints.quest.price;
            }
            else if (spentPoints.category == 'extendDeadline') {
                pointsObject['SpentPoints'] += 10;
            }
            else if (spentPoints.category == 'reopenQuest') {
                pointsObject['SpentPoints'] += findReopenQuestPoints(spentPoints.quest.price);
            }
            else if (spentPoints.category == 'createQuest') {
                pointsObject['SpentPoints'] += findCreateQuestPointsSpent(spentPoints.quest.art, spentPoints.quest.requiredMapsets);
            }
        });
        const totalPoints = pointsObject['Easy'] +
            pointsObject['Normal'] +
            pointsObject['Hard'] +
            pointsObject['Insane'] +
            pointsObject['Expert'] +
            pointsObject['Storyboard'] +
            pointsObject['Mod'] +
            pointsObject['Host'] +
            pointsObject['QuestReward'] +
            pointsObject['ContestParticipant'] +
            pointsObject['ContestJudge'] +
            pointsObject['ContestVote'];
        if (totalPoints < 100) {
            pointsObject['Rank'] = 0;
        }
        else if (totalPoints < 250) {
            pointsObject['Rank'] = 1;
        }
        else if (totalPoints < 500) {
            pointsObject['Rank'] = 2;
        }
        else {
            pointsObject['Rank'] = 3;
        }
        user_1.UserService.update(userId, {
            easyPoints: pointsObject['Easy'],
            normalPoints: pointsObject['Normal'],
            hardPoints: pointsObject['Hard'],
            insanePoints: pointsObject['Insane'],
            expertPoints: pointsObject['Expert'],
            storyboardPoints: pointsObject['Storyboard'],
            modPoints: pointsObject['Mod'],
            hostPoints: pointsObject['Host'],
            questPoints: pointsObject['QuestReward'],
            spentPoints: pointsObject['SpentPoints'],
            rank: pointsObject['Rank'],
            osuPoints: pointsObject['osu'],
            taikoPoints: pointsObject['taiko'],
            catchPoints: pointsObject['catch'],
            maniaPoints: pointsObject['mania'],
            contestParticipantPoints: pointsObject['ContestParticipant'],
            contestJudgePoints: pointsObject['ContestJudge'],
            contestVotePoints: pointsObject['ContestVote'],
            completedQuests: pointsObject['Quests'],
        });
        return (totalPoints);
    });
}
exports.updateUserPoints = updateUserPoints;