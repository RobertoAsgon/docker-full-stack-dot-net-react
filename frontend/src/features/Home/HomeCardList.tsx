import { useContext } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCardContainer";
import ArticleCardSkeleton from "../../components/ArticleCard/ArticleCardSkeletonContainer";
import { HomeCardsContainer } from "./HomeStyles";
import { ArticleSearchContext } from "../../context/ArticleSearchProvider";

const HomeCardList: React.FC = () => {
  const { isLoading, articleList } = useContext(ArticleSearchContext);

  console.log('articleList',articleList)
  return !isLoading ? (
    <HomeCardsContainer data-aos="slide-up">
      {articleList?.map((article) => 
        <ArticleCard 
          author={article.author}
          date={article.publishedAt}
          description={article.description}
          imgLink={article.urlToImage}
          />
      )}
    </HomeCardsContainer>
  ) : (
    <HomeCardsContainer data-aos="slide-up">
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
    </HomeCardsContainer>
  );
}

export default HomeCardList;