import HomeCardList from './HomeCardList';
import HomeRegister from './HomeRegister';
import {  HomeContainerBg} from './HomeStyles';
import dynamic from 'next/dynamic'
import HomePagination from './HomePagination';
import { ArticleSearchProvider } from '../../context/ArticleSearchProvider';
import axios from 'axios';

const HomeSearch = dynamic(import("./HomeSearch"), { ssr: false }) 

const HomeContainer: React.FC = () => {
  return (
    <ArticleSearchProvider>
      <HomeContainerBg>
        <HomeRegister />
        <HomeSearch />
        <HomeCardList />
        <HomePagination />
      </HomeContainerBg>
    </ArticleSearchProvider>
  );
}

export default HomeContainer;