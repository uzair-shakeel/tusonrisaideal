import React from "react";

const RelatedArticles = () => {
  return (
    <div className="px-2 md:px-5">
      <h4 className="text-[22px] font-[600] my-6 ">Related Articles</h4>
      <div className="space-y-[40px]">
        <div className="shadow-lg p-4 rounded-[20px] border border-[#DADADA] flex flex-col md:flex-row gap-[20px]">
          <div className="w-full rounded-[20px] h-full flex items-center justify-center overflow-hidden">
            <img
              src="/assets/Article1.png"
              className="object-cover h-full w-full"
            />
          </div>

          <div className="space-y-[17px] ">
            <p className="text-[18px] font-[500]">
              Understanding Tooth Pain: Causes, Symptoms, and Treatment
            </p>
            <p className="text-[18px] font-[400]">
              Tooth pain is a common ailment that affects people of all ages. It
              can range from a mild, occasional discomfort to a severe,
              persistent ache that disrupts daily life. Understanding the
              underlying causes, recognizing the symptoms, and knowing the
              available treatment options can help manage and alleviate tooth
              pain effectively. In this blog, we will explore the various
              reasons behind tooth pain, how to identify the symptoms, and the
              best practice...
            </p>
            <p className="text-[14px]">Dr Alex Carry</p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-[40px] overflow-x-auto md:overflow-hidden flex md:flex-none space-x-4 md:space-x-0">
          <div className="rounded-[20px] w-[300px] md:w-auto shadow-lg flex-shrink-0 md:flex-shrink">
            <div className="h-[196px] w-full overflow-hidden">
              <img
                src="/assets/Article2.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <p className="text-[18px] font-[500]">
                The Importance of Regular Dental Check-Ups
              </p>
              <p className="text-[14px] mt-5">Dr Alex Carry</p>
            </div>
          </div>

          <div className="rounded-[20px] w-[300px] md:w-auto shadow-lg flex-shrink-0 md:flex-shrink">
            <div className="h-[196px] w-full overflow-hidden">
              <img
                src="/assets/Article3.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <p className="text-[18px] font-[500]">
                Top Tips for Preventing Tooth Decay
              </p>
              <p className="text-[14px] mt-5">Dr Alex Carry</p>
            </div>
          </div>

          <div className="rounded-[20px] w-[300px] md:w-auto shadow-lg flex-shrink-0 md:flex-shrink">
            <div className="h-[196px] w-full overflow-hidden">
              <img
                src="/assets/Article4.png"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-3">
              <p className="text-[18px] font-[500]">
                Root Canal Can Make Your Life Better
              </p>
              <p className="text-[14px] mt-5">Dr Alex Carry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
