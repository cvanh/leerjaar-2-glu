const {usercheck} = require("./usercheck")
const {catchAsyncErrors} = require("./catchAsyncErrors")

module.exports = [
    usercheck,
    catchAsyncErrors,
]