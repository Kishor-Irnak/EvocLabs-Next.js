import React from "react";

const StatLabel = () => {
  const stats = [
    {
      value: "100%",
      label: "managed — ads, logistics & tech",
      dotColor: "bg-[#00e576]", // Vibrant green
      lineColor: "from-[#00e576]/40 to-transparent",
    },
    {
      value: "48hrs",
      label: "to get your store live",
      dotColor: "bg-[#d838e0]", // Vibrant magenta/purple
      lineColor: "from-[#d838e0]/40 to-transparent",
    },
    {
      value: "4%",
      label: "all we earn, per order",
      dotColor: "bg-[#ff6b00]", // Vibrant orange
      lineColor: "from-[#ff6b00]/40 to-transparent",
    },
  ];

  return (
    <section className="bg-white border-b border-black/[0.08] py-16 lg:py-24">
      <div className="max-w-[1150px] mx-auto px-6 lg:px-12">
        <h2 className="text-[24px] lg:text-[28px] font-medium text-[#111] mb-12 tracking-tight">
          Measurable results from day one
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative pl-5 md:pl-6">
              {/* Vertical line with dot */}
              <div className="absolute left-0 top-1 bottom-[-10px] flex flex-col items-center">
                <div
                  className={`w-[5px] h-[5px] rounded-[1px] ${stat.dotColor}`}
                />
                <div
                  className={`w-px h-full bg-gradient-to-b ${stat.lineColor} mt-2`}
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-[44px] md:text-[48px] lg:text-[56px] leading-none text-[#051811] tracking-tight font-medium">
                  {stat.value}
                </div>
                <div className="text-[13px] md:text-[14px] text-gray-500 leading-[1.4] max-w-[130px] font-light">
                  {stat.label.split("—").length > 1 ? (
                    <>
                      <span className="font-normal text-gray-800">
                        {stat.label.split("—")[0]}
                      </span>
                      —<br />
                      {stat.label.split("—")[1].trim()}
                    </>
                  ) : (
                    stat.label
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatLabel;
