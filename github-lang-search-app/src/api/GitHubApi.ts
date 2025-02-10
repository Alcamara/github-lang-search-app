import axios from "axios";
import { SearchResult } from "../models/searchModel";
const url = "http://localhost:5000"

async function getPopularJavaScriptRepos(): Promise<SearchResult[] | undefined> {
    try {
        const resp = await axios.get(`${url}/search`)   
        return resp.data
    } catch (err) {
        console.log(err);
    }
}

async function getPopularReposByLang(lang: string, reposPerPage: number): Promise<SearchResult[] | undefined> {
    try {
        const resp = await axios.get(`${url}/search/language?lang="${lang}"&reposPerPage=${reposPerPage}`)   
        return resp.data
    } catch (err) {
        console.log(err);
    }
}



export default {
    getPopularJavaScriptRepos,
    getPopularReposByLang
}