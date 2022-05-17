import express from 'express';
import fs from 'fs';
import { isLoggedIn, isSuperAdmin } from '../../helpers/middlewares';
import { ContestModel } from '../../models/contest/contest';
import { UserModel } from '../../models/user';
import { UserGroup } from '../../../interfaces/user';
import { SubmissionModel } from '../../models/contest/submission';
import { sendMessages } from '../../helpers/osuBot';
import { CriteriaModel } from '../../models/contest/criteria';
import { ContestStatus } from '../../../interfaces/contest/contest';


const adminContestsRouter = express.Router();

adminContestsRouter.use(isLoggedIn);
adminContestsRouter.use(isSuperAdmin);

const defaultContestPopulate = [
    {
        path: 'submissions',
        populate: [
            {
                path: 'evaluations',
                populate: {
                    path: 'screener',
                },
            },
            {
                path: 'creator',
                select: '_id osuId username',
            },
        ],
    },
    {
        path: 'screeners',
    },
    {
        path: 'judges',
    },
    {
        path: 'criterias',
    },
    {
        path: 'creator',
    },
];

/* GET retrieve all the contests info */
adminContestsRouter.get('/relevantInfo', async (req, res) => {
    const contests = await ContestModel
        .find({ creator: req.session.mongoId })
        .populate(defaultContestPopulate)
        .sort({ contestStart: -1 })
        .limit(4);

    res.json(contests);
});

/* POST update contest start date */
adminContestsRouter.post('/:id/updateContestStart', async (req, res) => {
    const newContestStart = new Date(req.body.date);

    if (!(newContestStart instanceof Date && !isNaN(newContestStart.getTime()))) {
        return res.json({ error: 'Invalid date' });
    }

    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    contest.contestStart = newContestStart;
    await contest.save();

    res.json(newContestStart);
});

/* POST update contest end date */
adminContestsRouter.post('/:id/updateContestEnd', async (req, res) => {
    const newContestEnd = new Date(req.body.date);

    if (!(newContestEnd instanceof Date && !isNaN(newContestEnd.getTime()))) {
        return res.json({ error: 'Invalid date' });
    }

    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    contest.contestEnd = newContestEnd;
    await contest.save();

    res.json(newContestEnd);
});

/* POST update contest status */
adminContestsRouter.post('/:id/updateStatus', async (req, res) => {
    const contest = await ContestModel
        .findByIdAndUpdate(req.params.id, { status: req.body.status })
        .populate(defaultContestPopulate)
        .orFail();

    res.json(contest.status);
});

/* POST update contest URL */
adminContestsRouter.post('/:id/updateUrl', async (req, res) => {
    const contest = await ContestModel
        .findByIdAndUpdate(req.params.id, { url: req.body.url })
        .populate(defaultContestPopulate)
        .orFail();

    res.json(contest.url);
});

/* POST update contest osu! contest listing URL */
adminContestsRouter.post('/:id/updateOsuContestListingUrl', async (req, res) => {
    const contest = await ContestModel
        .findByIdAndUpdate(req.params.id, { osuContestListingUrl: req.body.url })
        .populate(defaultContestPopulate)
        .orFail();

    res.json(contest.osuContestListingUrl);
});

/* POST update submissions download link */
adminContestsRouter.post('/:id/updateDownload', async (req, res) => {
    const download = req.body.download;

    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    contest.download = download;
    await contest.save();

    res.json(download);
});

/* POST delete a submission */
adminContestsRouter.post('/:id/submissions/:submissionId/delete', async (req, res) => {
    const submission = await SubmissionModel
        .findByIdAndRemove(req.params.submissionId)
        .orFail();

    res.json(submission);
});

/* POST add a screener to the list */
adminContestsRouter.post('/:id/screeners/add', async (req, res) => {
    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    const osuId = parseInt(req.body.screenerInput, 10);

    let user;

    if (isNaN(osuId)) {
        let regexp;

        if (req.body.screenerInput.indexOf('[') >= 0 || req.body.screenerInput.indexOf(']') >= 0) {
            regexp = new RegExp('^\\' + req.body.screenerInput + '$', 'i');
        } else {
            regexp = new RegExp('^' + req.body.screenerInput + '$', 'i');
        }

        user = await UserModel
            .findOne({ username: regexp })
            .orFail();
    } else {
        user = await UserModel
            .findOne({ osuId })
            .orFail();
    }

    if (contest.screeners.includes(user._id)) {
        return res.json({ error: 'User is already a screener!' });
    }

    contest.screeners.push(user._id);
    await contest.save();

    res.json(user);
});

/* POST remove a screener from the list */
adminContestsRouter.post('/:id/screeners/remove', async (req, res) => {
    const [contest, user] = await Promise.all([
        ContestModel
            .findById(req.params.id)
            .orFail(),

        UserModel
            .findById(req.body.screenerId)
            .orFail(),
    ]);

    if (!contest.screeners.includes(user._id)) {
        return res.json({ error: 'User is not a screener!' });
    }

    await ContestModel
        .findByIdAndUpdate(contest._id, { $pull: { screeners: user._id } })
        .orFail();

    res.json(user);
});

/* POST add a judge to the list */
adminContestsRouter.post('/:id/judges/add', async (req, res) => {
    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    const osuId = parseInt(req.body.judgeInput, 10);

    let user;

    if (isNaN(osuId)) {
        let regexp;

        if (req.body.judgeInput.indexOf('[') >= 0 || req.body.judgeInput.indexOf(']') >= 0) {
            regexp = new RegExp('^\\' + req.body.judgeInput + '$', 'i');
        } else {
            regexp = new RegExp('^' + req.body.judgeInput + '$', 'i');
        }

        user = await UserModel
            .findOne({ username: regexp })
            .orFail();
    } else {
        user = await UserModel
            .findOne({ osuId })
            .orFail();
    }

    if (contest.judges.includes(user._id)) {
        return res.json({ error: 'User is already a judge!' });
    }

    contest.judges.push(user._id);
    await contest.save();

    res.json(user);
});

/* POST remove a judge from the list */
adminContestsRouter.post('/:id/judges/remove', async (req, res) => {
    const [contest, user] = await Promise.all([
        ContestModel
            .findById(req.params.id)
            .orFail(),

        UserModel
            .findById(req.body.judgeId)
            .orFail(),
    ]);

    if (!contest.judges.includes(user._id)) {
        return res.json({ error: 'User is not a judge!' });
    }

    await ContestModel
        .findByIdAndUpdate(contest._id, { $pull: { judges: user._id } })
        .orFail();

    res.json(user);
});

/* POST update judging threshold */
adminContestsRouter.post('/:id/updateJudgingThreshold', async (req, res) => {
    const newJudgingThreshold = parseInt(req.body.judgingThreshold);

    if (isNaN(newJudgingThreshold)) {
        return res.json({ error: 'Invalid number' });
    }

    const contest = await ContestModel
        .findById(req.params.id)
        .orFail();

    contest.judgingThreshold = newJudgingThreshold;
    await contest.save();

    console.log(contest.judgingThreshold);

    res.json(newJudgingThreshold);
});













/* GET retrieve all criterias */
adminContestsRouter.get('/criterias', async (req, res) => {
    const criterias = await CriteriaModel.find({});

    res.json({ criterias });
});

/* POST create a contest */
adminContestsRouter.post('/create', async (req, res) => {
    if (!req.body.name) {
        return res.json({ error: 'Missing contest name' });
    }

    const contest = new ContestModel();
    contest.name = req.body.name.trim();
    await contest.save();

    res.json(contest);
});

/* POST add criteria */
adminContestsRouter.post('/addCriteria', async (req, res) => {
    const { name, maxScore } = req.body;

    if (!name || !name.length) {
        return res.json({ error: 'Invalid name' });
    }

    if (isNaN(maxScore)) {
        return res.json({ error: 'Invalid maxScore' });
    }

    const criteria = new CriteriaModel();
    criteria.name = name;
    criteria.maxScore = maxScore;
    await criteria.save();

    const allCriteria = await CriteriaModel.find({});

    res.json(allCriteria);
});

/* POST create a submission entry */
adminContestsRouter.post('/:id/submissions/create', async (req, res) => {
    const osuId = parseInt(req.body.osuId, 10);
    const [contest, user] = await Promise.all([
        ContestModel
            .findById(req.params.id)
            .orFail(),

        UserModel
            .findOne({ osuId })
            .orFail(),
    ]);
    const submission = new SubmissionModel();
    submission.name = req.body.name;
    submission.creator = user._id;
    await submission.save();
    contest.submissions.push(submission);
    await contest.save();
    await submission.populate({
        path: 'creator',
        select: '_id osuId username',
    }).execPopulate();

    res.json(submission);
});

/* POST create submissions from CSV file */
adminContestsRouter.post('/:id/submissions/createFromCsv', async (req, res) => {
    const contest = await ContestModel.findById(req.params.id).orFail();

    // read masking csv
    const buffer = fs.readFileSync('contest.csv');
    const csv = buffer.toString();

    if (!csv) {
        return res.json(`couldn't read csv`);
    }

    const data = csv.split('\r\n');

    for (const unsplitSubmission of data) {
        const splitSubmission = unsplitSubmission.split(',');
        const username = splitSubmission[0];
        const osuId = parseInt(splitSubmission[1], 10);
        const mask = splitSubmission[2];
        console.log(username);

        const submission = new SubmissionModel();

        submission.name = mask;

        const user = await UserModel.findOne({ osuId });

        if (user) {
            submission.creator = user._id;
        } else {
            const newUser = new UserModel();
            newUser.osuId = osuId;
            newUser.username = username;
            newUser.group = UserGroup.Spectator;
            await newUser.save();

            submission.creator = newUser._id;
        }

        await submission.save();
        contest.submissions.push(submission);
    }

    await contest.save();
    await contest.populate(defaultContestPopulate).execPopulate();

    res.json(contest.submissions);
});

/* POST update criterias */
adminContestsRouter.post('/:id/toggleCriteria', async (req, res) => {
    const contest = await ContestModel
        .findById(req.params.id)
        .populate(defaultContestPopulate)
        .orFail();

    const newCriteriaId = req.body.criteriaId;
    const criteriaIds = contest.criterias.map(c => c.id);
    const i = criteriaIds.findIndex(c => c === newCriteriaId);

    if (i >= 0) {
        criteriaIds.splice(i, 1);
    } else {
        criteriaIds.push(newCriteriaId);
    }

    const newContest = await ContestModel
        .findByIdAndUpdate(req.params.id, { criterias: criteriaIds })
        .populate(defaultContestPopulate)
        .orFail();

    res.json(newContest.criterias);
});

/* POST send messages */
adminContestsRouter.post('/:id/sendMessages', async (req, res) => {
    const contest = await ContestModel
        .findById(req.params.id)
        .populate(defaultContestPopulate)
        .orFail();

    if (contest.status !== ContestStatus.Complete) {
        return res.json({ error: 'Contest must be set as complete!' });
    }

    let messages;

    req.body.users.push({ osuId: req.session.osuId });

    for (const user of req.body.users) {
        messages = await sendMessages(user.osuId, req.body.messages);
    }

    if (messages !== true) {
        return res.json({ error: `Messages were not sent.` });
    }

    res.json({ success: 'Messages sent!' });
});

/* POST send all results messages to contest's participants */
adminContestsRouter.post('/:id/sendAllMessages', async (req, res) => {
    const contest = await ContestModel
        .findById(req.params.id)
        .populate(defaultContestPopulate)
        .orFail();

    if (contest.status !== ContestStatus.Complete) {
        return res.json({ error: 'Contest must be set as complete!' });
    }

    for (const submission of contest.submissions) {
        const messages: string[] = [];

        messages.push(`hello! thank you for participating in ${contest.name}!`);
        messages.push(`screening/judging details for your submission can be found here: https://mappersguild.com/contestresults?submission=${submission.id}`);
        messages.push(`a news post including the full results will be published soon!`);

        await sendMessages(submission.creator.osuId, messages);
    }

    res.json({ success: 'Messages sent! A copy was sent to you for confirmation' });
});

export default adminContestsRouter;
