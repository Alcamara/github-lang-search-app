import React from 'react'
import { useLocation } from 'react-router-dom'
import { SearchResult } from '../../models/searchModel'

function SearchDetailPage() {
    const location = useLocation()
    const repoDetail: SearchResult = location.state


    return (
        <>
            <div className="search-detail">
                <div className="search-detail_card">
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{repoDetail.name}</h2>

                            <p className="mt-4 text-gray-500 sm:text-xl">{repoDetail.description}</p>
                        </div>

                        <dl className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                            <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Star Count</dt>

                            <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">{repoDetail.starCount}</dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Fork Count</dt>

                            <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">{repoDetail.forkCount}</dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500">Issue Count</dt>

                            <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">{repoDetail.issueCount}</dd>
                            </div>

                            <div className="flex flex-col px-4 py-8 text-center">
                            <dt className="order-last text-lg font-medium text-gray-500"> Licence</dt>

                            <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">{repoDetail.licenseInfo}</dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>
        </>
    )
}


export default SearchDetailPage