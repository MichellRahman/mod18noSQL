const mongoose = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format("MMM D, YYYY, h:mm a" )
    }
},{
    id: false
})
const thoughtSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format("MMM D, YYYY, h:mm a" )
    },
    reactions: [reactionSchema],
})

thoughtSchema.virtual('reactionCount').get(() => {
    return this.reactions.length
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought