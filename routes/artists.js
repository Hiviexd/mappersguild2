var express = require('express');
var featuredArtists = require('../models/featuredArtists.js');
var api = require('../models/api.js');

var router = express.Router();

router.use(api.isLoggedIn);
router.use(api.isAdmin);


//population
const defaultPopulate = [
    { populate: 'songs', display: 'artist title' },
]

/* GET parties page. */
router.get('/', async (req, res, next) => {
    res.render('artists', {
        title: 'Artists',
        script: '../javascripts/artists.js',
        loggedInAs: req.session.osuId,
        userTotalPoints: res.locals.userRequest.totalPoints,
        userParty: res.locals.userRequest.currentParty ? res.locals.userRequest.currentParty.name : null,
    });
});

router.get('/relevantInfo', async (req, res, next) => {
    let a = await featuredArtists.service.query({}, defaultPopulate, {updatedAt: -1}, true);
    res.json({artists: a});
});

/* POST new artist. */
router.post('/create', async (req, res) => {
    let a = await featuredArtists.service.createArtist(req.body.name);
    res.json(a);
});

/* POST toggle isContacted */
router.post('/toggleIsContacted/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isContacted: req.body.value});
    res.json(a);
});

/* POST toggle isResponded */
router.post('/toggleisResponded/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isResponded: req.body.value});
    res.json(a);
});

/* POST toggle tracksSelected */
router.post('/toggleTracksSelected/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {tracksSelected: req.body.value});
    res.json(a);
});

/* POST toggle isRejected */
router.post('/toggleisRejected/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isRejected: req.body.value});
    res.json(a);
});

/* POST toggle contractSent */
router.post('/toggleContractSent/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {contractSent: req.body.value});
    res.json(a);
});

/* POST toggle contractSigned */
router.post('/toggleContractSigned/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {contractSigned: req.body.value});
    res.json(a);
});

/* POST toggle contractPaid */
router.post('/toggleContractPaid/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {contractPaid: req.body.value});
    res.json(a);
});

/* POST toggle songsTimed */
router.post('/toggleSongsTimed/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {songsTimed: req.body.value});
    res.json(a);
});

/* POST toggle contractPaid */
router.post('/toggleAssetsReceived/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {assetsReceived: req.body.value});
    res.json(a);
});

/* POST toggle bioWritten */
router.post('/toggleBioWritten/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {bioWritten: req.body.value});
    res.json(a);
});

/* POST toggle isReady */
router.post('/toggleIsReady/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isReady: req.body.value});
    res.json(a);
});

/* POST toggle isUpToDate */
router.post('/toggleIsUpToDate/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isUpToDate: req.body.value});
    a = await featuredArtists.service.update(req.params.id, {isPendingUpdate: !req.body.value});
    res.json(a);
});

/* POST toggle isPendingUpdate */
router.post('/toggleIsPendingUpdate/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {isPendingUpdate: req.body.value});
    a = await featuredArtists.service.update(req.params.id, {isUpToDate: !req.body.value});
    res.json(a);
});

/* POST update projectedRelease */
router.post('/updateProjectedRelease/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {projectedRelease: req.body.date});
    res.json(a);
});

/* POST update notes */
router.post('/updateNotes/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {notes: req.body.notes});
    res.json(a);
});

/* POST reset progress */
router.post('/reset/:id', async (req, res) => {
    let a = await featuredArtists.service.update(req.params.id, {
        isResponded: false, 
        tracksSelected: false, 
        isRejected: false, 
        isStalled: false, 
        contractSent: false, 
        contractSigned: false, 
        contractPaid: false, 
        songsTimed: false, 
        assetsReceived: false, 
        bioWritten: false, 
        isReady: false, 
        isUpToDate: false, 
        isPendingUpdate: false});
    res.json(a);
});

/* POST delete artist */
router.post('/deleteArtist/:id', async (req, res) => {
    let a = await featuredArtists.service.remove(req.params.id);
    res.json(a);
});


module.exports = router;