import Layout from "../../components/Layout/Layout";
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import './BlogPage.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import calendarIcon from '../../assets/images/calendar-icon.svg';
import clockIcon from '../../assets/images/clock-icon.svg';
const BlogPage = () => {
  return (
    <Layout>
      <h1 className="text-sm text-center leading-7 font-normal text-primary sm:text-2xl md:leading-relaxed md:text-4xl mb-2 sm:mb-4 md:gap-10 md:mb-8">Lắng Nghe Sự Sống Bên Trong Bạn</h1>
      <Carousel
        className="alx-carousel"
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        autoPlay={false}>
        <div>
          <img src={image1} className="rounded-3xl" alt="Item 1" />
          <Link to="/article/this-is-link" >
            <span className="cursor-pointer bg-none absolute top-1/2 left-1/2 text-sm sm:text-2xl md:text-5xl hover:text-primary -translate-x-1/2 -translate-y-1/2 text-white">Thải độc và Thanh lọc Thân tâm</span>
          </Link>
        </div>
        <div>
          <img src={image2} className="rounded-3xl" alt="Item 2" />
          <span className="cursor-pointer bg-none absolute top-1/2 left-1/2 text-sm sm:text-2xl md:text-5xl hover:text-primary -translate-x-1/2 -translate-y-1/2 text-white">Thải độc và Thanh lọc Thân tâm</span>
        </div>
        <div>
          <img src={image3} className="rounded-3xl" alt="Item 3" />
          <span className="cursor-pointer bg-none absolute top-1/2 left-1/2 text-sm sm:text-2xl md:text-5xl hover:text-primary -translate-x-1/2 -translate-y-1/2 text-white">Thải độc và Thanh lọc Thân tâm</span>
        </div>
      </Carousel>
      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 font-helvetica-neue grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mt-2 sm:4 md:mt-8">
          <div className="bg-white shadow-lg rounded-3xl border border-neutral-n20 p-3 sm:p-4 md:p-6 flex flex-col gap-6">
            <div className="text-sm text-neutral-n40 flex justify-between">
              <span className="flex items-center">
                <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>21/08/2022</time>
              </span>
              <span className="flex items-center">
                <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>2 phút</time>
              </span>
            </div>
            <img src={image4} className="rounded-3xl" alt="" />
            <div className="flex flex-col flex-grow gap-4">
              <div>
                <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">Tin Tức</span>
              </div>
              <h5 className="flex-grow font-medium text-lg text-secondary mb-3 cursor-pointer hover:text-primary">The internet's Own boy</h5>
              <p className="text-sm text-neutral-n40">Thầy Minh Cảnh</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl border border-neutral-n20 p-3 sm:p-4 md:p-6 flex flex-col gap-6">
            <div className="text-sm text-neutral-n40 flex justify-between">
              <span className="flex items-center">
                <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>21/08/2022</time>
              </span>
              <span className="flex items-center">
                <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>2 phút</time>
              </span>
            </div>
            <img src={image4} className="rounded-3xl" alt="" />
            <div className="flex flex-col flex-grow gap-4">
              <div>
                <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">Tin Tức</span>
              </div>
              <h5 className="flex-grow font-medium text-lg text-secondary mb-3 cursor-pointer hover:text-primary">The internet's Own boy</h5>
              <p className="text-sm text-neutral-n40">Thầy Minh Cảnh</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-3xl border border-neutral-n20 p-3 sm:p-4 md:p-6 flex flex-col gap-6">
            <div className="text-sm text-neutral-n40 flex justify-between">
              <span className="flex items-center">
                <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>21/08/2022</time>
              </span>
              <span className="flex items-center">
                <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
                <time>2 phút</time>
              </span>
            </div>
            <img src={image4} className="rounded-3xl" alt="" />
            <div className="flex flex-col flex-grow gap-4">
              <div>
                <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">Tin Tức</span>
              </div>
              <h5 className="flex-grow font-medium text-lg text-secondary mb-3 cursor-pointer hover:text-primary">The internet's Own boy</h5>
              <p className="text-sm text-neutral-n40">Thầy Minh Cảnh</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="button"
            className="text-white font-medium font-helvetica-neue bg-primary hover:bg-primary-light focus:ring-4 focus:ring-secondary-light rounded-lg focus:outline-none px-11 py-4">
            Xem Thêm
          </button>
        </div>
      </div>
    </Layout >
  );
};

export default BlogPage;
