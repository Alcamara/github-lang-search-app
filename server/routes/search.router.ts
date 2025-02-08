import { Router, Request, Response } from "express";


const router = Router()

router.get("/lang", async (req: Request, res: Response) => {
    const result = await getPopulationRepoByLanguage();
    console.log(result?.data.items);
    
    res.send("Golang")
})

async function OctokitInit(){
    try {
    
    const Octokit = (await import('octokit')).Octokit
    return new Octokit({})
        
    } catch (err) {
        console.error(err)
    }
}

async function getPopulationRepoByLanguage() {
    try {
      const language = "javascript";
      const octokit = await OctokitInit()
      return await octokit?.request(`GET /search/repositories`, {
        q: `language:${"c#"}`,
        sort: "stars",
        order: "desc",
        per_page: 10,
        page: 10,
      });
    } catch (err) {
      console.log(err);
    }
  }  


export default router