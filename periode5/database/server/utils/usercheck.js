const {db_findone} = require("./database")

/**
 * returns privilage level
 * @param {object} req this is from express, req is short for request
 * @returns privilage
 */
async function usercheck(req){
    console.log(`checking token ${req.body.token}`)

    const result = await db_findone('users',{"token": parseInt(req.body.token)})
    console.log(result)
    // returns the permission status of a user
    return parseInt(result.permission)
}
exports.usercheck = usercheck