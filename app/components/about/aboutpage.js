import React from 'react'
import OurFunFacts from '../home/ourFunFacts'
import Testimonials from '../home/testimonials'
import BrandsSection from '../home/brands'
import SkilledTeam from './skilledTeam'

const Aboutpage = () => {
  return (
    <>
    <div className="bg-white">
      <div className="container mx-auto py-5 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
          <div className="flex justify-center">
            <img
              src="/images/about/about-3.jpg"
              alt="about"
              className="ounded-lg"
            />
          </div>
          <div className="px-5 md:px-0">
            <h1 className="text-[#1f1f25] text-[60px] font-[700] mb-2">About</h1>
            <p className="text-[#717173] text-xl mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              <div>
                <h2 className="text-3xl font-[500] mb-5">Who we are</h2>
                <p className="text-xl text-[#717173]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-[500] mb-5">What we do</h2>
                <p className="text-xl text-[#717173]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <OurFunFacts/>
    <SkilledTeam/>
    <Testimonials/>
    <BrandsSection/>
  </>
  )
}

export default Aboutpage