import CardComponent from "../../components/Card/CardComponent";
import Layout from "../../components/Layout/Layout";
import './BlogPage.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { CarouselItemModel } from "../../models/carousel-item.model";
import image3 from '../../assets/images/image3.jpg';
import { CardModel } from "../../models/card.model";

const carouselData = [
  { slug: 'slug-1', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: image3 },
  { slug: 'slug-2', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: image3 },
  { slug: 'slug-3', text: 'Thải độc và Thanh lọc Thân Tâm', imageSrc: image3 },
] as CarouselItemModel[];

const cardData = [{
  title: 'The internet\'s Own boy',
  author: 'Thầy Minh Cảnh',
  publishDate: '21/08/2022',
  type: 'Tin tức',
  slug: 'tin-tuc-1'
},
{
  title: 'The internet\'s Own boy',
  author: 'Thầy Minh Cảnh',
  publishDate: '21/08/2022',
  type: 'Tin tức',
  slug: 'tin-tuc-2'
},
{
  title: 'The internet\'s Own boy',
  author: 'Thầy Minh Cảnh',
  publishDate: '21/08/2022',
  type: 'Tin tức',
  slug: 'tin-tuc-3'
}] as CardModel[];

const BlogPage = () => {


  return (
    <Layout>
      <h1 className="text-sm text-center leading-7 font-normal text-primary sm:text-2xl md:leading-relaxed md:text-4xl mb-2 sm:mb-4 md:gap-10 md:mb-8">
        Lắng Nghe Sự Sống Bên Trong Bạn
      </h1>
      <Carousel
        className="alx-carousel"
        showThumbs={false}
        autoPlay={true}
        showStatus={false}>
        {carouselData.map(x => <CarouselItem {...x} />)}
      </Carousel>

      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 font-helvetica-neue grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mt-2 sm:4 md:mt-8">
          {cardData.map(x => <CardComponent {...x} />)}
        </div>
        <div className="text-center">
          <button type="button"
            className="text-white text-md uppercase font-medium font-helvetica-neue bg-primary hover:bg-primary-light focus:ring-4 focus:ring-secondary-light rounded-2xl focus:outline-none px-11 py-4">
            Xem Thêm
          </button>
        </div>
      </div>
    </Layout >
  );
};

export default BlogPage;
