import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from 'next/router';
import { PeriodToggleWrapper } from './PeriodToggleStyles';
import { Grid } from '@mui/material';
import { ArticleSearchContext, PeriodInterval } from '../../context/ArticleSearchProvider';
import { useState } from 'react';

export default function PeriodToggleContainer() {
  const [alignment, setAlignment] = useState<PeriodInterval>(PeriodInterval.THIRTY_DAYS);
  const { onChangePeriod } = React.useContext(ArticleSearchContext);

  const handleChange = (
    newAlignment: PeriodInterval,
  ) => {
    setAlignment(newAlignment);
    onChangePeriod(newAlignment);
  };

  return (
      <Grid container alignItems="center">
          <Grid item style={{marginLeft: "12px"}}>
            Periodo: 
          </Grid>
          <Grid item>
            <PeriodToggleWrapper 
              onClick={() => handleChange(PeriodInterval.THIRTY_DAYS)} 
              $isSelected={alignment == PeriodInterval.THIRTY_DAYS} 
              value={PeriodInterval.THIRTY_DAYS}>
                30  Dias.
            </PeriodToggleWrapper>
          </Grid>
          <Grid item>
            <PeriodToggleWrapper 
              onClick={() => handleChange(PeriodInterval.SIXTY_DAYS)} 
              $isSelected={alignment == PeriodInterval.SIXTY_DAYS} 
              value={PeriodInterval.SIXTY_DAYS}>
                60  Dias.
            </PeriodToggleWrapper>
          </Grid>
          <Grid item>
            <PeriodToggleWrapper 
              onClick={() => handleChange(PeriodInterval.NINETY_DAIYS)} 
              $isSelected={alignment == PeriodInterval.NINETY_DAIYS} 
              value={PeriodInterval.NINETY_DAIYS}>
                90  Dias.
            </PeriodToggleWrapper>
          </Grid>
      </Grid>
  );
}