import React from "react";
import { blog_home_five } from "@/data/blog-data";
import BlogItemTwo from "./blog-item/blog-item-2";

export default function BlogOne() {
  const blog_items = [...blog_home_five];
  return (
    <div className="tp-blog-area pb-70 blogOnemain">
      <div className=" container-1775 mx-auto">
        <div className="blog_sec"><h2 className="text-center">Our Blog</h2>
        <p>Check the best marketing resources and the latest blogs about our
              company.
            </p>
            </div>
        <div className="row">
          {blog_items.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
              <BlogItemTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
