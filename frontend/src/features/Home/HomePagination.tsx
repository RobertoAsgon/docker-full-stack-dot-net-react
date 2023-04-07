import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { PaginationWrapper } from './HomeStyles';
import { ArticleSearchContext } from '../../context/ArticleSearchProvider';

const PaginationControlled: React.FC = () => {
  const { onChangeCurrentPage, totalPage, articleList, currentPage} = React.useContext(ArticleSearchContext);
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangeCurrentPage(value);
  };

  return articleList.length > 0 && (
    <Stack spacing={2} >
      <PaginationWrapper >
        <Pagination count={totalPage} page={currentPage} onChange={handleChange} />
      </PaginationWrapper>
    </Stack>
  );
}

export default PaginationControlled;