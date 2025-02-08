import { Grid } from "gridjs-react"
import "gridjs/dist/theme/mermaid.css";
import "./SearchPage.css"
import { h } from "gridjs";

function SearchPage() {
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
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                placeholder="Select Language"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                            />
                        </div>

                        <button
                        type="submit"
                        className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
                        >
                        <span className="text-sm font-medium"> Search </span>
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
                                    className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                                    onClick: () => alert(`Test`)
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