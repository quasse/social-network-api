const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //TODO getter method for formatting date
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //TODO getter for formatting date
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
