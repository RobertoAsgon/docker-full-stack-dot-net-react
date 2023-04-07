import React, { createContext, useCallback, useEffect, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ArticleService } from '../services/ArticleService';
import { GetArticleParams, IArticle } from '../services/ArticleModel';
import dayjs from 'dayjs'
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface IRootContainerProps {
  isLoading: boolean;
  totalPage: number;
  currentPage: number;
  articleList: IArticle[];
  onSearchArticle: (term: string) => void;
  onChangePeriod: (period: PeriodInterval) => void;
  onChangeCurrentPage: (page: number) => void;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
}

const ArticleSearchContext = createContext<Partial<IRootContainerProps>>({})

interface Props {
    children: React.ReactNode;
}

export enum PeriodInterval {
  THIRTY_DAYS = 30,
  SIXTY_DAYS = 60,
  NINETY_DAIYS = 90
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArticleSearchProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackBar] = useState(false);
  const [term, setTerm] = useState('Apple');
  const [periodInterval, setPeriodInterval] = useState(PeriodInterval.THIRTY_DAYS);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(12);
  const [articleList, setArticleList] = useState<IArticle[]>([]);

  console.log('currentPage',currentPage)
  const onChangePeriod = (period: PeriodInterval) => {
    setPeriodInterval(period);
  }

  const onChangeCurrentPage = (page: number) => {
    setCurrentPage(page);
  }

  const onSearchArticle = (term: string) => {
    setTerm(term);
  }

  const handleOpenDialog = () => {
    setOpen(true);
  };

  console.log('term',term);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCloseSnack = () => {
    setOpenSnackBar(false);
  }

  const getArticles = useCallback(async () => {
    const initialDate = dayjs(new Date()).subtract(periodInterval, 'day').toISOString().split('T')[0];
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await new ArticleService().getAllArticles(
        new GetArticleParams({
          Term: term, 
          CurrentPage: currentPage, 
          FromDate: initialDate, 
          ItensPerPage: 12
        })
      )
      setIsLoading(false);
      setArticleList(response);
      console.log('response', response)
    } catch(error) {
      setArticleList([]);
      setOpenSnackBar(true);
    } finally  {
      setIsLoading(false);
    }
  },[term, currentPage, periodInterval]);

  useEffect(() => {
    AOS.init({duration: 1500});
  }, [])

  useEffect(() => {
    getArticles();
  }, [term, currentPage, periodInterval])

  return (
    <ArticleSearchContext.Provider
      value={{ 
        isLoading, 
        totalPage,
        currentPage,
        articleList,
        onSearchArticle, 
        onChangePeriod, 
        onChangeCurrentPage, 
        handleOpenDialog, 
        handleCloseDialog 
      }}
    >
      {children}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
          Não foi encontrado nenhum artigo, pesquise novamente!
        </Alert>
      </Snackbar>
    </ArticleSearchContext.Provider>
  )
}

export { ArticleSearchProvider, ArticleSearchContext }

