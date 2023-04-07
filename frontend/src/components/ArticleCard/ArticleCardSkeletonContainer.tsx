import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  ArticleSkeletonCardContainer } from './ArticleCardStyles';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';

const ArticleCardSkeleton: React.FC = () => {
  return (
    <ArticleSkeletonCardContainer>
       <Stack spacing={2} >
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width={60} height={60} />
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectangular"  height={170} />
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" height={120}  />
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rectangular"  height={30} />
      </Stack>
    </ArticleSkeletonCardContainer>
  );
}

export default ArticleCardSkeleton;