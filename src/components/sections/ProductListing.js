"use client";
import React from 'react';
import Link from 'next/link';
import blogData from '@/data/blog';
import productsData from '@/data/products';

const ProductListing = ({ filterType }) => {
  // Combine all items
  const combinedData = [
    ...blogData.map(item => ({ ...item, type: 'blog' })),
    ...productsData.map(item => ({ ...item, type: 'product' }))
  ];

  // Apply filter if provided
  let displayData = combinedData;
  
  if (filterType) {
    const matchedItem = combinedData.find(item => item.slug === filterType);
    if (matchedItem && matchedItem.subItems && matchedItem.subItems.length > 0) {
      // Expand sub-items into cards
      displayData = matchedItem.subItems.map((sub, idx) => ({
        id: `${matchedItem.id}-sub-${idx}`,
        title: sub,
        image: matchedItem.image, // Use parent image for now
        category: matchedItem.title,
        slug: matchedItem.slug, // Link back to parent detail page
        type: 'product-subitem'
      }));
    } else {
      displayData = combinedData.filter(item => item.slug === filterType);
    }
  }
  return (
    <div className="page-blog">
      <div className="container">
        <div className="row">
          {displayData.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              {/* Post Item Start */}
              <div 
                className="post-item wow fadeInUp" 
                data-wow-delay={`${(index % 3) * 0.2}s`}
              >
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href={`/products/${post.slug}`} className="image-anime" data-cursor-text="View">
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2>
                      <Link href={`/products/${post.slug}`}>{post.title}</Link>
                    </h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href={`/products/${post.slug}`}>Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}

          <div className="col-lg-12">
            {/* Page Pagination Start */}
            <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
              <ul className="pagination">
                <li><Link href="#"><i className="fa-solid fa-angle-left"></i></Link></li>
                <li className="active"><Link href="#">1</Link></li>
                <li><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li><Link href="#"><i className="fa-solid fa-angle-right"></i></Link></li>
              </ul>
            </div>
            {/* Page Pagination End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
