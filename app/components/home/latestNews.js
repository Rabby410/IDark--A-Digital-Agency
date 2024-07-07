import React from "react";

const latestNews = [
  {
    id: 1,
    category: "Development",
    title: "Getting tickets to the big show",
    image: "/images/home/our-works/portfolio-1.jpg",
    url: "#",
  },
  {
    id: 2,
    category: "Management",
    title: "A big ticket gone to be an interesting ",
    image: "/images/home/our-works/portfolio-2.jpg",
    url: "#",
  },
  {
    id: 3,
    category: "Design",
    title: "The Home of the Future Could Bebes",
    image: "/images/home/our-works/portfolio-3.jpg",
    url: "#",
  },
];

const LatestNews = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="title">Latest News</h1>
          <div className="flex mx-auto justify-between items-baseline">
            <p className="para max-w-3xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <div className="mb-3">
              <span className="inline-block whitespace-nowrap border-b-2 border-red-500 nborder-bottom hover:text-red-500">
                View All News
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestNews.map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative overflow-hidden bg-white shadow-lg rounded-lg"
            >
              <div
                className="h-96 bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: `url(${newsItem.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={newsItem.url}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm uppercase font-bold mb-2">
                  {newsItem.category}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {newsItem.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
