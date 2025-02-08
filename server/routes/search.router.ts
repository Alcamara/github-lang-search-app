import { Router } from "express";
import { Octokit } from 'octokit';

const router = Router()

router.get("/lang", (req, res) => {
    res.send("JavaScript")
})

module.exports = router