import Link from "next/link";
import React from "react";

const blogList = [
  {
    id: 1,
    image: "/images/blogs/blog-01.jpg",
    title: "Getting Tickets to the Big Show",
    category: "Development",
    buttonUrl: "/blog/blog-details",
  },
  {
    id: 2,
    image: "/images/blogs/blog-02.jpg",
    title: "A Big Ticket Gone to be Interesting",
    category: "Management",
    buttonUrl: "/blog/blog-details",
  },
  {
    id: 3,
    image: "/images/blogs/blog-03.jpg",
    title: "The Home of the Future Could Bebes",
    category: "Design",
    buttonUrl: "/blog/blog-details",
  },
  {
    id: 4,
    image: "/images/blogs/blog-04.jpg",
    title: "Getting Tickets to the Big Show",
    category: "Design",
    buttonUrl: "/blog/blog-details",
  },
  {
    id: 1,
    image: "/images/blogs/blog-01.jpg",
    title: "Getting Tickets to the Big Show",
    category: "Development",
    buttonUrl: "/blog/blog-details",
  },
  {
    id: 2,
    image: "/images/blogs/blog-02.jpg",
    title: "A Big Ticket Gone to be Interesting",
    category: "Management",
    buttonUrl: "/blog/blog-details",
  },
];

const Blogs = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-xl overflow-hidden bg-no-repeat bg-center bg-cover min-h-[550px] relative shadow-xl"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col justify-end h-full p-6">
                <p className="text-white text-sm mb-2">{blog.category}</p>
                <h3 className="text-lg font-semibold text-white mb-4">{blog.title}</h3>
                  <Link href={blog.buttonUrl} className="hidden group-hover:flex justify-center items-center bg-red-500 text-white py-2 px-4 rounded transition duration-300">
                    Read More
                  </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20">
            <div className="flex justify-center item-center gap-5">
                <p className="border-4 bg-red-400 border-red-400 text-white text-lg font-semibold p-3 items-center rounded-lg">1</p>
                <p className="border-4 hover:bg-red-400 hover:border-red-400 hover:text-white text-lg font-semibold p-3 items-center rounded-lg">2</p>
                <p className="border-4 hover:bg-red-400 hover:border-red-400 hover:text-white text-lg font-semibold p-3 items-center rounded-lg">3</p>
                <p className="border-4 hover:bg-red-400 hover:border-red-400 hover:text-white text-lg font-semibold p-3 items-center rounded-lg">4</p>
                <p className="border-4 hover:bg-red-400 hover:border-red-400 hover:text-white text-lg font-semibold p-3 items-center rounded-lg">5</p>
                <p className="border-4 hover:bg-red-400 hover:border-red-400 hover:text-white text-lg font-semibold p-3 items-center rounded-lg">{">"}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
