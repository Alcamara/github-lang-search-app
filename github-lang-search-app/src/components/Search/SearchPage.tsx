import { useEffect, useState } from "react";
import { Grid } from "gridjs-react"
import { useNavigate } from "react-router-dom";
import GitHubApi from '.././../api/GitHubApi'
import "gridjs/dist/theme/mermaid.css";
import "./SearchPage.css"
import { h } from "gridjs";
import { SearchResult } from "../../models/searchModel";

function SearchPage() {
    const [tableData, setTableData] = useState<SearchResult[]>([])
    const [selectedLang, setSelectedLang] = useState('javascript')
    const [selectedReposPerPage, setReposPerPage] = useState(0);
    const [searchResultMap, setSearchResultMap] = useState<Map<number, SearchResult>>(new Map())

    const navigate = useNavigate()
    const handleClick = (repoDetail: SearchResult) => {
        navigate(`/detail/${repoDetail.id}`, {
            state: repoDetail
        })
    }
    const onLangSelect = (event: any) => setSelectedLang(event.target.value)
    const onRepoNumSelect = (event: any) => setReposPerPage(event.target.value)
    
    const onRepoSearch = async () => {
        try {
            if (selectedReposPerPage === 0) {
                return
            }
            
            const repos = await GitHubApi.getPopularReposByLang(selectedLang, selectedReposPerPage)
            if (repos != undefined) {
                setSearchResultMap(() => {
                    const newMap = new Map()
                    repos.forEach((r) => newMap.set(r.id,r))
                    return newMap
                })
                setTableData(repos)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const fetchDefaultData = async () => {
        try {
            const repos = await GitHubApi.getPopularJavaScriptRepos()
            if(repos != undefined ) {
                setSearchResultMap((prevMap) => {
                    const newMap = new Map(prevMap)
                    repos.forEach((r) => newMap.set(r.id,r))
                    return newMap
                })

                setTableData(repos)
            }
        } catch (error) {
            console.log(error);
            
        }
           
    }

    useEffect(() => {
        fetchDefaultData()    
    },[])

    return (
    <>
        <section className="bg-gray-50">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24"> 
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Find Popular Github Repos
                        <strong className="font-extrabold text-red-700 sm:block"> By Lanaguage </strong>
                    </h1>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form 
                        onSubmit={ async (event) => {
                            event.preventDefault()
                            await onRepoSearch()
                        }} 
                        className="sm:flex sm:gap-4"
                        >
                        <div className="bg-white sm:flex-1">
                            <select
                                value={selectedLang}
                                onChange={onLangSelect}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border-gray-300 bg-white text-gray-700 sm:text-sm"
                            >
                                <option value="javascript">Javascript</option>
                                <option value="csharp">C#</option>
                                <option value="typeScript">TypeScript</option>
                            </select>
                        </div>

                        <div className="bg-white  sm:flex-1">
                            <select
                                value={selectedReposPerPage}
                                onChange={onRepoNumSelect}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border-gray-300 bg-white text-gray-700 sm:text-sm"
                            >
                                <option value={0}>Select Top ...</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={25}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium">Search</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
        <section className="search_grid grid">
            <div className=" h-32 rounded-lg bg-gray-200">
                <Grid
                    data={tableData}
                    columns={[
                        {
                            name: "ID",
                            hidden: 1
                        },
                        {
                            name: "URL",
                            formatter: (cell, row) => {
                                return h("a", {
                                    onClick: () => window.open(cell?.toString(), "_blank")
                                }, cell)
                            }
                        },
                        {
                            name: "Star Count",
                            sort: {
                                compare: (a: number, b: number) => {
                                    if (a > b) {
                                        return 1;
                                      } else if (b > a) {
                                        return -1;
                                      } else {
                                        return 0;
                                    }
                                }
                            },
                            hidden: 1 
                        },
                        "Description",
                        {
                            name: "Action",
                            formatter: (cell, row) => {
                                return h('button', {
                                    className: 'py-2 mb-4 px-4 border rounded-md text-white bg-rose-600',
                                    onClick: () => {
                                        const id = row.cells[0].data
                                        const repo = searchResultMap.get(id)

                                        if (repo != undefined) {
                                            handleClick(repo)   
                                        }
                                    }
                                }, "Details")
                            }
                        }
                    ]}
                    search={false}
                    pagination={{
                        limit: 10
                    }}
                /> 
            </div>
        </section>
    </>
    )
}


export default SearchPage