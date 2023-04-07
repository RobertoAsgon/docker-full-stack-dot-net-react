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
import { ArticleCardContainer } from './ArticleCardStyles';
import { ArticleSearchContext } from '../../context/ArticleSearchProvider';
import { useContext } from 'react';
import { TextWrapper } from './Styles';


interface ArticleCardProps {
  author: string,
  imgLink: string,
  description: string,
  date: string,
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    author,
    date,
    description,
    imgLink
  }) => {
  const { handleOpenDialog } = useContext(ArticleSearchContext);
  
  return (
    <ArticleCardContainer onClick={() => handleOpenDialog()}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgLink}
        alt="Paella dish"
      />
      <CardContent>
        <TextWrapper>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </TextWrapper>
      </CardContent>
      <CardActions disableSpacing style={{position: 'relative', bottom: '18px'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </ArticleCardContainer>
  );
}

export default ArticleCard;