import express from 'express';
import { UserService } from '../models/user';
import { UserGroup } from '../interfaces/user';

const faqRouter = express.Router();

/* GET faq */
faqRouter.get('/', async (req, res) => {
    let response: object = {
        title: 'Frequently Asked Questions',
        isFaq: true,
    };
    const u = await UserService.queryById(req.session?.mongoId);

    if (u && !UserService.isError(u)) {
        response = {
            ...response,
            loggedInAs: u.osuId,
            isNotSpectator: res.locals.userRequest.group != UserGroup.Spectator,
            userMongoId: req.session?.mongoId,
            userTotalPoints: u.totalPoints,
        };
    }

    res.render('faq', response);
});

export default faqRouter;
