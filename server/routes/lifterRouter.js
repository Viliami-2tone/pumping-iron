const express = require("express");
const router = express.Router();
const lifterRepository = require("../data-access/lifterRepository");


router.get("/:page", async (req, res, next) => {
    try {
        const fuck = req.params.page;
        const lifters = await lifterRepository.getLifters(fuck);
        res.json(lifters);
    } catch (err) {
        next(err)
    }
});

router.get("/", async (req, res, next) => {
    try {
        const lifters = await lifterRepository.getFullList();
        res.json(lifters);
    } catch (err) {
        next(err)
    }
});

module.exports = router;