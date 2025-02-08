import { Router } from "express";
const router = Router();
router.get("/lang", (req, res) => {
    res.send("JavaScript");
});
const loadOctokit = async () => await import('@octokit/rest');
export default router;
