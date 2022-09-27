import Layout from "../../components/Layout/Layout";
import calendarIcon from "../../assets/images/calendar-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";
import { useEffect, useState } from "react";
import { getArticle } from "../../services/Article/Article.service";
import { useParams } from "react-router-dom";
import { CardModel } from "../../models/card.model";

const Article = () => {
  const [article, setArticle] = useState<CardModel>();

  const { id } = useParams();

  useEffect(() => {
    fetchArticle();
  }, []);

  function transformArticleData(data: any): CardModel {
    return {
      id: data.hash,
      title: data.title,
      publishDate: data.createdAt,
      type: data.category,
      img: data.mainImage,
      author: data.author || "",
      content: data.content,
      slug: data.slug || "",
    };
  }

  async function fetchArticle() {
    const data = await getArticle(id || "").then((res) => res.data);

    if (data) {
      const transformedData = transformArticleData(data);

      setArticle(transformedData);
    }
  }

  return (
    <Layout>
      <div className="font-helvetica-neue flex flex-col gap-8 max-w-[770px] mx-auto">
        <div className="text-sm text-neutral-n40 flex justify-between">
          <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">
            {article?.type}
          </span>
          <div className="flex gap-8">
            <span className="flex items-center">
              <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
              <time>{article?.publishDate}</time>
            </span>
            <span className="flex items-center">
              <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
              <time>2 phút</time>
            </span>
          </div>
        </div>
        <h1 className="text-secondary text-2xl">{article?.title}</h1>
        <p className="text-sm text-neutral-n40">{article?.author}</p>
        <article className="prose lg:prose-xl max-w-full">
          <div
            id="html-content"
            dangerouslySetInnerHTML={{ __html: article?.content || "" }}
          ></div>
        </article>
      </div>
    </Layout>
  );
};
export default Article;
