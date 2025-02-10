import { Router, Request, Response } from "express";

const router = Router()

router.get("/", async (req: Request, res: Response) => {

    const response = await getPopulationRepoByLanguage("JavaScript", 1, 30);
    
    const results = response?.data.items?.map((repo) =>  ({
        id: repo.id,
        name: repo.name,
        ownerName: repo.owner?.name,
        ownerProfile: repo.owner?.html_url,
        starCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        issueCount: repo?.open_issues_count,
        url: repo.html_url,
        description: repo.description,
        licenseInfo: repo.license?.name || "n/a",
    })) ?? []
    
    res.send(results)
})

router.get("/language", async (req: Request, res: Response) => {
    const lang  = req.query.lang
    const reposPerPage = parseInt(req.query.reposPerPage as string)

    if(lang == null){
        res.sendStatus(400)
    }

    const l = `${lang}`


    const response = await getPopulationRepoByLanguage(l, 1, reposPerPage);
    const results = response?.data.items?.map((repo) =>  ({
        id: repo.id,
        name: repo.name,
        ownerProfile: repo.owner?.html_url,
        starCount: repo.stargazers_count,
        forkCount: repo.forks_count,
        issueCount: repo?.open_issues_count,
        url: repo.html_url,
        description: repo.description,
        licenseInfo: repo.license?.name || "n/a",
    })) ?? []
    
    res.send(results)
})

async function OctokitInit(){
    try {
    
    const Octokit = (await import('octokit')).Octokit
    return new Octokit({})
        
    } catch (err) {
        console.error(err)
    }
}

async function getPopulationRepoByLanguage(lang: string, numPage: number, numPerPage: number ) {
    try {
      const octokit = await OctokitInit()
      return await octokit?.request(`GET /search/repositories`, {
        q: `language:${lang}`,
        sort: "stars",
        order: "desc",
        per_page: numPerPage,
        page: numPage,
      });
    } catch (err) {
      console.log(err);
    }
  }  


export default router