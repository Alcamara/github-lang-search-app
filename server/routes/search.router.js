"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const response = await getPopulationRepoByLanguage("JavaScript", 1, 10);
    const results = response?.data.items?.map((repo) => ({
        name: repo.name,
        ownerProfile: repo.owner?.html_url,
        starCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        issueCount: repo?.open_issues_count,
        url: repo.html_url,
        description: repo.description,
        licenseInfo: repo.license?.name || "n/a",
    })) ?? [];
    res.send(results);
});
router.get("/language", async (req, res) => {
    const { lang } = req.query;
    if (lang == null) {
        res.sendStatus(400);
    }
    const l = `${lang}`;
    const response = await getPopulationRepoByLanguage(l, 1, 10);
    const results = response?.data.items?.map((repo) => ({
        name: repo.name,
        ownerProfile: repo.owner?.html_url,
        starCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        issueCount: repo?.open_issues_count,
        url: repo.html_url,
        description: repo.description,
        licenseInfo: repo.license?.name || "n/a",
    })) ?? [];
    res.send(results);
});
async function OctokitInit() {
    try {
        const Octokit = (await import('octokit')).Octokit;
        return new Octokit({});
    }
    catch (err) {
        console.error(err);
    }
}
async function getPopulationRepoByLanguage(lang, numPage, numPerPage) {
    try {
        const octokit = await OctokitInit();
        return await octokit?.request(`GET /search/repositories`, {
            q: `language:${lang}`,
            sort: "stars",
            order: "desc",
            per_page: numPerPage,
            page: numPage,
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.default = router;
