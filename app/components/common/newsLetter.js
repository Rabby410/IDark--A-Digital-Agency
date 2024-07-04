import React from 'react'

export default function NewsLetter() {
    return (
        <div className="py-28 bg-[url('/images/banner.png')] bg-cover bg-center">
            <div className="mx-auto container px-4 text-black">
                <h3 className="font-[700] leading-[48px] text-primary text-[40px]">Subscribe to newsletter!</h3>
                <p className="text-[24px] font-[700] leading-[32px] max-w-[424px]">Receive all the latest News, Tips and Deals
                    from PokerAffiliateWare</p>
                <div className="mt-5">
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:gap-2 max-w-[524px]">
                        <div className="relative w-full border rounded-xl">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope text-black" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                </svg>
                            </span>
                            <input type="email" placeholder="Enter your email" className="pl-12 pr-4 py-3 w-full rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-black" />
                        </div>
                        <button className="hover:bg-red-600 bg-red-500 hover:shadow-lg duration-200 bg-primary text-black hover:text-white px-4 py-3 rounded-md flex items-center justify-center sm:mt-0 mt-2 w-full sm:w-auto">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-2">Subscribe</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}