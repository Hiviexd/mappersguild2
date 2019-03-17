const querystring = require('querystring');
const config = require('../../config.json');
const users = require('./qatUser.js');
const axios = require('axios');

async function getToken(code) {
    const postData = querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: config.qat.redirect,
        client_id: config.qat.id,
        client_secret: config.qat.secret
    });

    const options = {
        method: 'post',
        url: 'https://osu.ppy.sh/oauth/token',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: postData
    };

    try {
        const res = await axios(options);
        return res.data;
    } catch (error) {
        return { error: error };
    }
}

async function refreshToken(refreshToken) {
    const postData = querystring.stringify({
        grant_type: 'refresh_token',
        client_id: config.qat.id,
        client_secret: config.qat.secret,
        refresh_token: refreshToken
    });

    const options = { 
        method: 'POST', 
        url: 'https://osu.ppy.sh/oauth/token',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: postData
    };

    try {
        const res = await axios(options);
        return res.data;
    } catch (error) {
        return { error: error };
    }
}

async function getUserInfo(token) {
    const options = { 
        method: 'GET',
        url: 'https://osu.ppy.sh/api/v2/me',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    try {
        const res = await axios(options);
        return res.data;
    } catch (error) {
        return { error: error };
    }
}

async function isLoggedIn(req, res, next) {
    if (req.session.qatMongoId) {
        const u = await users.service.query({ _id: req.session.qatMongoId });
        
        // If hidden, shouldn't be able to do anything
        if (!u || u.group == 'hidden') {
            return res.redirect('/qat');
        }

        // Refresh if less than 30 sec left
        if (req.session.cookie.maxAge < 30000) {
            const response = await refreshToken();
            req.session.cookie.maxAge = response.expires_in * 1000;
            req.session.qatAccessToken = response.access_token;
            req.session.qatRefreshToken = response.refresh_token;
        }

        res.locals.userRequest = u;
        next();
    } else {
        res.redirect('/qat');
    }
}

async function isBnOrQat(req, res, next) {
    const u = res.locals.userRequest;
    
    if (u.group == 'bn' || u.group == 'qat') {
        next();
    } else {
        res.redirect('/qat');
    }
}

async function isQat(req, res, next) {
    const u = res.locals.userRequest;
    
    if (u.group == 'qat') {
        next();
    } else {
        res.redirect('/qat');
    }
}

module.exports = { isLoggedIn, getToken, getUserInfo, isBnOrQat, isQat };
