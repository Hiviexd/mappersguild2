const express = require('express');
const api = require('../models/api.js');
const users = require('../models/qatUser.js');

const router = express.Router();

router.use(api.isLoggedIn);

/* GET bn app page */
router.get('/', async (req, res, next) => {
    res.render('qatusers', { 
        title: 'BN/QAT Listing', 
        script: '../javascripts/qatUsers.js', 
        isQatUsers: true, 
        layout: 'qatlayout',
        isBnOrQat: res.locals.userRequest.group == 'bn' || res.locals.userRequest.group == 'qat',
        isQat: res.locals.userRequest.group == 'qat' });
});


/* GET applicant listing. */
router.get('/relevantInfo', async (req, res, next) => {
    let u = await users.service.query({$or: [{group: 'qat'}, {group: 'bn'}]}, {}, {createdAt: 1}, true );
    res.json({ users: u, userId: req.session.qatMongoId, userGroup: req.session.qatGroup });
});


/* POST submit or edit eval */
router.post('/switchMediator/', api.isLoggedIn, async (req, res) => {
    let u = await users.service.update(req.session.qatMongoId, { vetoMediator: !res.locals.userRequest.vetoMediator });
    res.json(u);
});

/* POST switch usergroup */
router.post('/switchGroup/:id', api.isLoggedIn, async (req, res) => {
    let u = await users.service.update(req.params.id, { group: req.body.group });
    u = await users.service.update(req.params.id, {probation: []});
    res.json(u);
});


/* POST switch usergroup */
router.post('/tempCreate/', api.isLoggedIn, async (req, res) => {
    let u = await users.service.create(req.body.osuId, req.body.username, req.body.group);
    console.log(u)
    await users.service.update(u.id, {$push: {modes: req.body.mode}});
    if(req.body.probation.length){
        await users.service.update(u.id, {$push: {probation: req.body.probation}});
    }
    res.json(u);
});


/* POST switch usergroup */
router.post('/tempUpdate/', api.isLoggedIn, async (req, res) => {
    let u;
    if(req.body.username.indexOf("[") >= 0 || req.body.username.indexOf("]") >= 0){
        u = await users.service.query({ username: new RegExp('^\\' + req.body.username + '$', 'i') });
    }else{
        u = await users.service.query({ username: new RegExp('^' + req.body.username + '$', 'i') });
    }
    if(req.body.mode.length){
        await users.service.update(u.id, {$push: {modes: req.body.mode}});
    }
    if(req.body.probation.length){
        await users.service.update(u.id, {$push: {probation: req.body.probation}});
    }
    if(req.body.date){
        if(req.body.group == 'bn') await users.service.update(u.id, {$push: {bnDuration: req.body.date}});
        if(req.body.group == 'qat') await users.service.update(u.id, {$push: {qatDuration: req.body.date}});  
    }
    res.json(u);
});

module.exports = router;
