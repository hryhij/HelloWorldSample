import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'boxicons';

export default function MoreButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget)

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton 
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
            <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem onClick={handleClose} sx={{ width: 200, maxWidth: '100%' }}><box-icon name='user-circle'></box-icon>&nbsp;&nbsp;Profile</MenuItem>
        <MenuItem onClick={handleClose}><box-icon name='edit-alt'></box-icon>&nbsp;&nbsp;Edit</MenuItem>
        <MenuItem onClick={handleClose}><box-icon name='bar-chart-square' ></box-icon>&nbsp;&nbsp;More</MenuItem>
      </Menu>
    </div>
  );
}