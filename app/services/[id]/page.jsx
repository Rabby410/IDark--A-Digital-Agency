import Breadcrumbs from "@/app/components/layouts/breadcrumbs";
import VideoPopup from "@/app/components/services/videoPopup";
import React from "react";

const ServiceDetails = () => {
  return (
    <>
      <Breadcrumbs
        pageTitle="Website Development"
        parentPage="Home"
        parentPageUrl="/"
        bgImage="/images/services/bg-image-5.jpg"
      />
      <div className="bg-white py-10">
        <div className="container mx-auto justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
            <div>
              <img
                src="/images/services/service-01.png"
                alt="service-idark"
                className="px-5"
              />
            </div>
            <div className="px-5">
              <p className="para text-justify">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators tend toitrrepeat predefined chunks. Necessary, making
                this the first true generator on the Internet.
              </p>
              <h3 className="sub-title my-5">Proceess of metel</h3>
              <ul className="para list-disc">
                <li className="my-3 mx-5">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="my-3 mx-5">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="my-3 mx-5">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="my-3 mx-5">Risus commodo viverra</li>
                <li className="my-3 mx-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="px-5">
              <p className="para text-justify">
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn&apos;t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators
                tend toitrrepeat predefined chunks. Necessary, making this the
                first true generator on the Internet.
              </p>
              <h3 className="sub-title my-5">Proceess of metel</h3>
              <ul className="para list-disc">
                <li className="my-3 mx-5">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="my-3 mx-5">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="my-3 mx-5">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="my-3 mx-5">Risus commodo viverra</li>
                <li className="my-3 mx-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
            </div>
            <div className="px-5">
              <VideoPopup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
