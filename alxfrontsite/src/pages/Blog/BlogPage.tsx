import CardComponent from "../../components/Card/CardComponent";
import ControlledCarousel from "../../components/ControlledCarousel/ControlledCarousel";
import Layout from "../../components/Layout/Layout";

import "./BlogPage.scss";

const BlogPage = () => {
  return (
    <Layout>
      <h1 className="sub-title">Lắng Nghe Sự Sống Bên Trong Bạn</h1>

      <ControlledCarousel />

      <CardComponent />
    </Layout>
  );
};

export default BlogPage;
