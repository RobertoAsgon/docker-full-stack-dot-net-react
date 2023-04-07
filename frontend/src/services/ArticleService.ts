import axios from "axios";
import { ArticleResponse, GetArticleParams, IArticle } from "./ArticleModel";
import { BASE_URL, GET_ARTICLE_ERROR } from "./Constants";

class ArticleService {
  public async getAllArticles(params: GetArticleParams): Promise<IArticle[]> {
    try {

      const { data } = await axios.get( `${BASE_URL}articles`, { params });

      return data;
    } catch (error) {
      throw new Error(GET_ARTICLE_ERROR);
    }
  }
}

export { ArticleService }