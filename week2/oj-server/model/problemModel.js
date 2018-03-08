// const mongoose = require('mongoose');
// const problemSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   desc: String,
//   difficulty: String
// });
// const problemModel = mongoose.model('problemModel', problemSchema);
// module.export = problemModel;
const mongoose = require('mongoose');
const ProblemSchema = mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    difficulty: String
});
const ProblemModel = mongoose.model('ProblemModel', ProblemSchema);
module.exports = ProblemModel;