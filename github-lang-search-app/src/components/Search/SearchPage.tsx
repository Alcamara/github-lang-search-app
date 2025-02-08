import { Grid } from "gridjs-react"
import { useNavigate } from "react-router-dom";
import "gridjs/dist/theme/mermaid.css";
import "./SearchPage.css"
import { h } from "gridjs";

function SearchPage() {
    const navigate = useNavigate()
    const handleClick = () => navigate('/detail')

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
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="javascript">Javascript</option>
                                <option value="csharp">C#</option>
                                <option value="typeScript">TypeScript</option>
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
                    data={
                        [
                            ["Link", "Description", "Action"],
                            ["Link", "Description", "Action"]
                        ]
                    }
                    columns={[
                        "Link",
                        "Description",
                        {
                            name: "Action",
                            formatter: (cell, row) => {
                                return h('button', {
                                    className: 'py-2 mb-4 px-4 border rounded-md text-white bg-rose-600',
                                    onClick: () => handleClick()
                                }, "Details")
                            }
                        }
                    ]}
                    search={false}
                    pagination={{
                        limit: 1
                    }}
                /> 
            </div>
        </section>
    </>
    )
}


export default SearchPage