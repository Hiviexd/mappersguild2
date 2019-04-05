const config = require('../../config.json');
const mongoose = require('mongoose');
const qatDb = mongoose.createConnection(config.qat.connection, { useNewUrlParser: true });
const users = require('../models/qatUser');

const vetoesSchema = new mongoose.Schema({
    sender: { type: 'ObjectId', ref: 'QatUser', required: true },
    mode: { type: String, enum: ['osu', 'taiko', 'catch', 'mania'] },
    beatmapLink: { type: String, required: true },
    beatmapId: { type: String },
    beatmapTitle: { type: String },
    beatmapMapper: { type: String },
    reasonLink: { type: String, required: true },
    status: { type: String, enum: ['available', 'wip', 'upheld', 'withdrawn'], default: 'available' },
    debaters: [{ type: 'ObjectId', ref: 'QatUser' }],
    mediator: { type: 'ObjectId', ref: 'QatUser' },
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

vetoesSchema.pre('findByIdAndUpdate', function (next) {
    this.populate('mediator', 'username osuId', users.QatUser);
    this.populate('debaters', 'username osuId', users.QatUser);
    next();
});

const Veto = qatDb.model('Veto', vetoesSchema);

class VetoService
{
    async query(params, populate, sorting, getAll) {
        let query;

        if (getAll) {
            query = Veto.find(params);
        } else {
            query = Veto.findOne(params);
        }

        if (populate) {
            for (let i = 0; i < populate.length; i++) {
                const p = populate[i];
                query.populate(p.populate, p.display, p.model);
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
            return await Veto.findByIdAndUpdate(id, update, { 'new': true });
        } catch(error) {
            return { error: error._message };
        }
    }

    async create(sender, beatmapLink, beatmapId, beatmapTitle, beatmapMapper, reasonLink, mode) {
        try {
            return await Veto.create({ 
                sender: sender, 
                beatmapLink: beatmapLink, 
                beatmapId: beatmapId, 
                beatmapTitle: beatmapTitle, 
                beatmapMapper: beatmapMapper,
                reasonLink: reasonLink, 
                mode: mode 
            });
        } catch(error) {
            return { error: "could not create veto" }
        }
    }
}

const service = new VetoService();

module.exports = { service, Veto };