const config = require('../../config.json');
const mongoose = require('mongoose');
const qatDb = mongoose.createConnection(config.qat.connection, { useNewUrlParser: true });
const evals = require('./evaluation.js');
const users = require('./qatUser.js');

const bnAppSchema = new mongoose.Schema({
    applicant: {type: 'ObjectId', ref: 'QatUser', required: true},
    mode: { type: String, enum: ['osu', 'taiko', 'catch', 'mania'], required: true },
    mods: [{ type: String, required: true }],
    evaluations: [{type: 'ObjectId', ref: 'Evaluation'}],
    consensus: { type: String, enum: ["accepted", "rejected"]}
    //testResult: [{ type: 'ObjectId', ref: 'rcTest'}],

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

const BnApp = qatDb.model('BnApp', bnAppSchema);

class BnAppService
{
    async query(params, populate, sorting, getAll) {
        let query;

        if (getAll) {
            query = BnApp.find(params);
        } else {
            query = BnApp.findOne(params);
        }

        if (populate) {
            for (let i = 0; i < populate.length; i++) {
                const p = populate[i];

                if (p.innerPopulate) {
                    query.populate({ path: p.innerPopulate, populate: p.populate }, 
                        p.model == 'QatUser' ? users.QatUser : evals.Evaluation);
                } else {
                    query.populate(p.populate, p.display, 
                        p.model == 'QatUser' ? users.QatUser : evals.Evaluation);
                }
            }
        }

        if (sorting) {
            query.sort(sorting);
        }

        try {
            return await query.exec();
        } catch(error) {
            return { error: error._message };
        }
    }

    async update(id, update) {
        try {
            return await BnApp.findByIdAndUpdate(id, update, { 'new': true });
        } catch(error) {
            return { error: error._message };
        }
    }

    async create(userId, mode, mods) {
        try {
            return await BnApp.create({ applicant: userId, mode: mode, mods: mods });
        } catch(error) {
            return { error: error._message }
        }
    }
}

const service = new BnAppService();

module.exports = { service };