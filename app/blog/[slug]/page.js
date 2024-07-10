import Breadcrumbs from "@/app/components/layouts/breadcrumbs";
import VideoPopup from "@/app/components/services/videoPopup";
import React from "react";

const newsDetails = () => {
  return (
    <>
      <Breadcrumbs
        pageTitle="The Home of the Future Could Bebes"
        parentPage="Blogs"
        parentPageUrl="/blog"
        bgImage="/images/blogs/bg-image-7.jpg"
      />
      <div className="md:py-20 py-5 bg-white px-5">
        <div className="container mx-auto justify-center items-center">
          <p className="para text-justify py-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            toitrrepeat predefined chunks.
          </p>

          <div style={{ textAlign: "-webkit-center" }} className="pt-5">
            <img src="/images/blogs/bl-big-01.jpg" alt="" />
          </div>

          <p className="para text-justify py-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            toitrrepeat predefined chunks.
          </p>
          <p className="para text-justify py-10">
            Necessary, making this the first true generator on the Internet. It
            re are many variations of passages of Lo rem Ipsum available, but
            the majority have suffered alteration in some form, by injectedeed
            eedhumour, or randomised words which don&apos;t look even slightly
            believable.
          </p>

          <h3 className="sub-title text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </h3>

          <p className="para text-justify py-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            toitrrepeat predefined chunks. Necessary, making this the first true
            generator on the Internet. It re are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injectedeed eedhumour, or randomised words which don&apos;t
            look even slightly believable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
            <div className="flex flex-col justify-center px-10">
              <img src="/images/blogs/blog-single-01.png" alt="" />
              <div className="py-3">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </div>
            <div>
              <p className="para text-justify mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo .
              </p>
              <p className="para">
                <span className="font-semibold text-2xl text-gray-700">
                  Ordered & Unordered Lists.
                </span>
              </p>
              <ul className="list-disc mt-5">
                <li className="py-2 para">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="py-2 para">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="py-2 para">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="py-2 para">Risus commodo viverra</li>
                <li className="py-2 para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
              <p className="para mt-5">
                <span className="font-semibold text-2xl text-gray-700">
                  Ordered & Unordered Lists.
                </span>
              </p>
              <ul className="list-disc mt-5">
                <li className="py-2 para">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="py-2 para">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="py-2 para">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="py-2 para">Risus commodo viverra</li>
              </ul>
            </div>
          </div>
          <p className="para text-justify py-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            toitrrepeat predefined chunks. Necessary, making this the first true
            generator on the Internet. It re are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injectedeed eedhumour, or randomised words which don&apos;t
            look even slightly believable.
          </p>

          <div style={{ textAlign: "-webkit-center" }} className="pt-5">
            <VideoPopup image="/images/blogs/bl-big-01.jpg" />
          </div>

          <p className="para text-justify py-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. You
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            toitrrepeat predefined chunks.
          </p>

          <div className="py-10">
            <h3 className="text-2xl font-semibold text-gray-700">
              Leave a Reply
            </h3>

            <form action="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div>
                  <div className="flex flex-col gap-4"> 
                    <input type="text" id="name" name="name" placeHolder="Name" className="border px-5 py-2"/>
                    <input type="email" id="email" name="email" placeHolder="Email" className="border px-5 py-2"/>
                    <input type="text" id="website" name="website" placeHolder="Website" className="border px-5 py-2"/>
                  </div>
                </div>
                <div>
                  <textarea name="comment" form="usrform" rows="6" className="border py-2 px-5 w-full" placeHolder="Comments"></textarea>
                </div>
              </div>

              <button className="px-5 py-2 border rounded-md hover:text-white hover:border-red-400 hover:bg-red-400"><input type="submit" value="Submit" /></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default newsDetails;
