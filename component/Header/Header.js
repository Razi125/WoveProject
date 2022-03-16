import React from 'react'
import Grid from '@material-ui/core/Grid';
import header from './Header.module.css'
const Header = () => {
  return (
    <>
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <div className={header.header}>
            <img src='./images/wove-logo-rgb.png' alt='' />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Header
