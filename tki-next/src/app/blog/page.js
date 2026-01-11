import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: "Latest Post - Toplax",
  description: "Latest Post - Toplax Factory & Industry",
};

export default function Blog() {
  return (
    <>
      <PageHeader title={<>Latest <span>post</span></>} activePage="blog" />

      {/* Page Blog Start */}
      <div className="page-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-1.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">Sustainable Practices Reducing Waste in Industrial Production</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-2.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">Advanced Robotics Revolutionizing Industrial Workflows</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-3.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">Top Benefits of the Robotics in Manufacturing</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-4.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">Leveraging Data Analytics for Smarter Production</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-5.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">Reducing Operational Costs Through Automation</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <div className="post-item wow fadeInUp" data-wow-delay="1s">
                {/* Post Featured Image Start*/}
                <div className="post-featured-image">
                  <figure>
                    <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                      <Image src="/images/post-6.jpg" alt="" width={600} height={400} style={{ width: '100%', height: 'auto' }} />
                    </Link>
                  </figure>
                </div>
                {/* Post Featured Image End */}

                {/* Post Item Body Start */}
                <div className="post-item-body">
                  {/* Post Item Content Start */}
                  <div className="post-item-content">
                    <h2><Link href="/blog-single">The Advantages of Customized Manufacturing Solutions</Link></h2>
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Readmore Button Start */}
                  <div className="post-readmore-btn">
                    <Link href="/blog-single">Read more</Link>
                  </div>
                  {/* Post Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </div>
              {/* Post Item End */}
            </div>

            <div className="col-lg-12">
              {/* Page Pagination Start */}
              <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
                <ul className="pagination">
                  <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
                </ul>
              </div>
              {/* Page Pagination End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Blog End */}
    </>
  );
}
