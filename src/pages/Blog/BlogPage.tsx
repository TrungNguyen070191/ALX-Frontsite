import CardComponent from "../../components/Card/CardComponent";
import Layout from "../../components/Layout/Layout";
import "./BlogPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "../../components/CarouselItem/CarouselItem";
import { CarouselItemModel } from "../../models/carousel-item.model";
import image3 from "../../assets/images/image3.jpg";
import { CardModel } from "../../models/card.model";
import { useEffect, useState } from "react";
import { getArticles } from "../../services/Article/Article.service";

const carouselData = [
  { slug: "slug-1", text: "Thải độc và Thanh lọc Thân Tâm", imageSrc: image3 },
  { slug: "slug-2", text: "Thải độc và Thanh lọc Thân Tâm", imageSrc: image3 },
  { slug: "slug-3", text: "Thải độc và Thanh lọc Thân Tâm", imageSrc: image3 },
] as CarouselItemModel[];

const cardData = [
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-1",
  },
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-2",
  },
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-3",
  },
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-4",
  },
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-5",
  },
  {
    title: "The internet's Own boy",
    author: "Thầy Minh Cảnh",
    publishDate: "21/08/2022",
    type: "Tin tức",
    slug: "tin-tuc-5",
  },
] as CardModel[];

const DEFAULT_ITEM = 3;

const BlogPage = () => {
  const [articles, setArticles] = useState<CardModel[]>([]);
  const [limit, setLimit] = useState<number>(1);

  // useEffect(() => {
  //   fetchArticles();
  // }, [articles]);

  function fetchArticles() {
    getArticles()
      ?.then((res) => {
        const data: CardModel[] = res?.results;

        if (data?.length > 0) {
          const transformedData = transformArticleData(data);

          setArticles(transformedData);
        }
      })
      .catch((err) => console.log(err));
  }

  function transformArticleData(data: any[]): CardModel[] {
    const articles: CardModel[] = [];

    data.map((item) => {
      return articles.push({
        id: item._id,
        title: item.title,
        publishDate: item.createdAt,
        type: item.category,
        img: item.mainImage,
        author: item.author || "",
        content: item.content,
        slug: item.slug || "",
      });
    });

    return articles;
  }

  function calLimitItem() {
    if (hasShowMore()) {
      setLimit(limit + 1);
    }
  }

  function hasShowMore(): boolean {
    if (
      cardData.length > 3 &&
      limit < Math.ceil(cardData.length / DEFAULT_ITEM)
    ) {
      return true;
    }

    return false;
  }

  return (
    <Layout>
      <h1 className="text-sm text-center leading-7 font-normal text-primary sm:text-2xl md:leading-relaxed md:text-4xl mb-2 sm:mb-4 md:gap-10 md:mb-8">
        Lắng Nghe Sự Sống Bên Trong Bạn
      </h1>
      <Carousel
        className="alx-carousel"
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
      >
        {carouselData.map((x, idx: number) => (
          <CarouselItem {...x} key={idx} />
        ))}
      </Carousel>

      <div className="container mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 font-helvetica-neue grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mt-2 sm:4 md:mt-8">
          {cardData?.map((x: CardModel, idx: number) => {
            if (idx < DEFAULT_ITEM * limit) {
              return <CardComponent {...x} key={idx} />;
            }
          })}
        </div>

        {hasShowMore() ? (
          <div className="text-center">
            <button
              onClick={calLimitItem}
              type="button"
              className="text-white text-md uppercase font-medium font-helvetica-neue bg-primary hover:bg-primary-light focus:ring-4 focus:ring-secondary-light rounded-2xl focus:outline-none px-11 py-4"
            >
              Xem Thêm
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
