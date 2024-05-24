
const Activity = require("@models/activityModel");

const getAllActivity = async () => {
    try {
        return await Activity.findAll();
    } catch (err) {
        throw err;
    }
}

const getActivityWithId = async (id_activity) => {
    try {
        const activity = await Activity.findByPk(id_activity);
        if (!activity) {
            throw new Error('Activity not found');
            console.log("eror");
        }
        return activity;
    } catch (err) {
        throw err;
    }
}

const getActivityByIdGroup = async (id_grupo) => {
    try {
        const activity = await Activity.findOne({ where: { id_grupo: id_grupo } });
        if (!activity) {
            throw new Error('User not found');
        }
        return activity;
    } catch (err) {
        throw err;
    }
}


const editActivityPut = async (id_activity, updatedFields) => {
    try {
        const activity = await Activity.findByPk(id_activity);
        if (!activity) {
            throw new Error('Activity not found');
        }
        Object.keys(updatedFields).forEach(key => {
            if (updatedFields[key] !== undefined) {
                activity[key] = updatedFields[key];
            } else {
                throw new Error('All fields are required');
            }
        })
        return await activity.save();
    } catch (err) {
        throw err;
    }
}

const editActivityPatch = async (id_activity, updatedFields) => {
    try {
        const activity = await Activity.findByPk(id_activity);
        if (!activity) {
            throw new Error('activity not found');
        }
        Object.keys(updatedFields).forEach(key => {
            activity[key] = updatedFields[key];
        })
        return await activity.save();
    } catch (err) {
        throw err;
    }
}

const registerActivity = async ({ name, amount, type, date }) => {
    try {
        const newActivity = new Activity({ name, amount, type, date });
        return await newActivity.save();
    } catch (err) {
        console.log(err);
        console.log("err");
        throw err;
    }
}

module.exports = { getAllActivity, getActivityWithId, getActivityByIdGroup, editActivityPut, editActivityPatch, registerActivity };