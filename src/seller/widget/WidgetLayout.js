import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import IconButton from '@mui/material/IconButton';

const WidgetLayout = ({ navComponent, children, title, ...props }) => {

  const styles = {
    root: { height: '100%', overflow: 'hidden' },
    topNav: {
      pl: 5,
      pr: 1,
      height: (theme) => theme.spacing(12),
      bgcolor: 'secondary.main',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }

  return (
    <Paper sx={styles.root}>
      <Box sx={styles.topNav}>
        <Typography variant={"h6"} color={"secondary.contrastText"}>{title}</Typography>
        {navComponent}
        <IconButton>
          <IosShareIcon sx={{color: "secondary.contrastText"}} />
        </IconButton>
      </Box>
      {children}
    </Paper>
  );
};

export default WidgetLayout;