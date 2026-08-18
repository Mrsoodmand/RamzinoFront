import { useMemo } from "react";
import { useRouter } from "next/router";
import ArticleGrid from "./ArticleGrid";
import Featured from "./Featured";
import PageHead from "./PageHead";
import Sidebar from "./Sidebar";
import { ALL_CATEGORY, deriveCategories, deriveLatestNews } from "./taxonomy";

function BlogsPage({ data }) {
  const router = useRouter();

  const blogs = useMemo(
    () => (Array.isArray(data?.blogs) ? data.blogs.filter(Boolean) : []),
    [data?.blogs],
  );

  // The API ships `news: []` and no categories endpoint, so both sidebar
  // panels are derived from the same array the grid renders.
  const news = useMemo(() => deriveLatestNews(blogs), [blogs]);
  const categories = useMemo(() => deriveCategories(blogs), [blogs]);

  const activeCategory = useMemo(() => {
    const raw = router.query?.category;
    const value = Array.isArray(raw) ? raw[0] : raw;
    return value ? String(value) : ALL_CATEGORY;
  }, [router.query?.category]);

  return (
    <>
      <PageHead />
      <Featured data={data?.slide} />

      <div className="container mt-8 sm:mt-12">
        <div className="flex flex-col items-start gap-5 lg:flex-row xl:gap-10">
          <main className="w-full min-w-0">
            <ArticleGrid
              blogs={blogs}
              categories={categories}
              active={activeCategory}
            />
          </main>
          <div className="w-full lg:w-[340px] lg:min-w-[340px]">
            <Sidebar
              news={news}
              categories={categories}
              activeCategory={activeCategory}
              promo={data?.["side-bar-slider"]?.[0]}
              tags={data?.tags}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
