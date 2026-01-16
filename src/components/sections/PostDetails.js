"use client";
import React from 'react';
import Link from 'next/link';

const PostDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="page-single-post">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Post Featured Image Start */}
            <div className="post-featured-image wow fadeInUp">
              <figure>
                <img src={data.image} alt={data.title} className="w-100" style={{ borderRadius: '20px' }} />
              </figure>
            </div>
            {/* Post Featured Image End */}

            {/* Post Single Content Start */}
            <div className="post-content">
              {/* Post Entry Start */}
              <div className="post-entry">
                <p className="wow fadeInUp">{data.description}</p>

                {/* Sub-items list (Specific to Products) */}
                {data.subItems && data.subItems.length > 0 && (
                  <div className="product-items-list">
                    <h3>Available Equipment & Solutions</h3>
                    <ul>
                      {data.subItems.map((item, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Blog content (Specific to Blog posts) */}
                {data.content && (
                  <div dangerouslySetInnerHTML={{ __html: data.content }} />
                )}
              </div>
              {/* Post Entry End */}

              {/* Back Link */}
              <div className="post-footer" style={{ marginTop: '40px' }}>
                <Link href="/products" className="btn-default">
                  <span>Back to Products</span>
                </Link>
              </div>
            </div>
            {/* Post Single Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

