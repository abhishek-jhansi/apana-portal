import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600 text-justify">
                            I am a skilled web developer. Currently I am working in Altm digital as a weh designer from last 6 month.
                            Before this job I was learning skills from a well known institute in noida sec 63 named Ducate and a another institute Tech Altum.
                 
                        </p>
                        <p className="mt-4 text-gray-600 text-justify">
                        I am seeking an opportunity with strong willingness exhibit my proficiency in react js and node js to establish my career as a web developer and also interested in Ai and machine learning.
                            I do freelance on dynamic and static website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}