import { useContext, useState } from "react";
import { HomeSearchContainer } from "./HomeStyles";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton/IconButton";
import TextField from "@mui/material/TextField";
import PeriodToggleContainer from "../../components/PeriodToggle/PeriodToggleContainer";
import { useRouter } from "next/router";
import { ArticleSearchContext } from "../../context/ArticleSearchProvider";


const HomeSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState('Apple');
  const router = useRouter()
  const { onSearchArticle } = useContext(ArticleSearchContext);

  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const handlePressEnter = (e) => {
    if(e.keyCode == 13){
      onSearchArticle(inputValue);
   }
  }

  return (
    <HomeSearchContainer>
      <div>
        <TextField
          className="inputSearch"
          InputProps={{endAdornment: (
            <IconButton onClick={() => onSearchArticle(inputValue)}>
              <SearchIcon/>
            </IconButton>
          )}}
          onChange={(event) => handleChange(event.target.value)} 
          onKeyDownCapture={(event) => handlePressEnter(event)}
          label="Buscar Artigo" 
          variant="outlined" 
          value={inputValue}
        />
      </div>

      <PeriodToggleContainer />
    </HomeSearchContainer>
  );
}

export default HomeSearch;