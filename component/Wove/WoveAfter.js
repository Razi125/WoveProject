import React from 'react'
import Grid from '@material-ui/core/Grid';
import WoveBf1 from './WoveBf.module.css'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const WoveAfter = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            {isMobile ? <>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className={WoveBf1.left}>
                            <h5>After Wove</h5>
                            <p>Fluid collaboration and visibility across your entire work stack. It’s like your<br /> apps all talk to each other.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img className={WoveBf1.Mainimages} src='./images/Group 5527.svg' alt='' />
                    </Grid>

                </Grid>
            </>
                :
                <>
                    <Grid container style={{ marginTop: '8rem' }}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className={WoveBf1.left}>
                                <h5>After Wove</h5>
                                <p>Fluid collaboration and visibility across<br /> your entire work stack. It’s like your apps<br /> all talk to each other.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img className={WoveBf1.Mainimages} src='./images/Group 5527.svg' alt='' />
                        </Grid>

                    </Grid>
                </>
            }
        </>
    )
}

export default WoveAfter
