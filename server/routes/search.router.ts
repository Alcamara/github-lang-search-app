import { Router } from "express";
import { createRequire } from "module";
import { Octokit } from '@octokit/rest'


const router = Router()

router.get("/lang", (req, res) => {
    res.send("JavaScript")
})


const loadOctokit = async () => await import('@octokit/rest')

export default router