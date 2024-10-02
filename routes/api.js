const router = require('express').Router();
const apiUserRouter = require('@routes/api/userRoutes');
const apiAuthRouter = require('@routes/api/authRoutes');
const apiActivityRouter = require('@routes/api/activityRoutes');
const apiGroupRouter = require("@routes/api/groupRoutes");
const apiuserHasActivityRouter = require("@routes/api/userhasActivityRoutes");

router.use('/user', apiUserRouter);
router.use('/auth', apiAuthRouter);
router.use('/activity', apiActivityRouter);
router.use("/group", apiGroupRouter);
router.use("/userHasActivity", apiuserHasActivityRouter);

module.exports = router;
