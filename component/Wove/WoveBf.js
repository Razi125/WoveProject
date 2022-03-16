import React from 'react'
import Grid from '@material-ui/core/Grid';
import WoveBf1 from './WoveBf.module.css'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const WoveBf = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            {isMobile ? <>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className={WoveBf1.left}>
                            <h5>Before Wove</h5>
                            <p>Silos that make it a nightmare to keep track, making you switch between<br /> tools back and forth</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img className={WoveBf1.Mainimages} src='./images/Group 5514.png' alt='' />
                    </Grid>
                </Grid>
            </>
                :
                <>
                    <Grid container style={{ marginTop: '8rem' }}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className={WoveBf1.left}>
                                <h5>Before Wove</h5>
                                <p>Silos that make it a nightmare to keep<br /> track, making you switch between tools<br /> back and forth</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img className={WoveBf1.Mainimages} src='./images/Group 5514.png' alt='' />
                        </Grid>

                    </Grid>
                </>

            }

        </>
    )
}

export default WoveBf
