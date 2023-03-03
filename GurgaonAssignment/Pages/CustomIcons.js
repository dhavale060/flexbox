import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './CustomIcons.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons() {
  return (
    <Stack spacing={2} className="text-light">
      <Pagination
        count={10}
        variant="outlined" color = "secondary"
        renderItem={(item) => (
          <PaginationItem className='text-light for_hover' 
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}