import React from 'react'
import Footer1 from './Footer.module.css'
import Grid from '@material-ui/core/Grid';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <>
            <Grid container >
                {
                    isMobile ?
                        (<>
                            <div style={{ border: '1px solid #262626',width:'100%' }}></div>
                            <div className={Footer1.footerMobDiv}>
                                <div className={Footer1.footer}>
                                    <img src='./images/wove-logo-rgb.png' alt='' />
                                </div>
                                <div >
                                    <img className={Footer1.images} src='./images/twitter.png' />

                                </div>
                            </div>
                            <div style={{ border: '1px solid #262626',width:'100%' }}></div>
                        </>)
                        :
                        (<>
                            <div style={{ border: '1px solid #262626',width:'100%', marginTop:'4rem', }}></div>
                            <div className={Footer1.footerDiv}>
                                <div className={Footer1.footer}>
                                    <img src='./images/wove-logo-rgb.png' alt='' />
                                </div>
                                <div >
                                    <img className={Footer1.images} src='./images/twitter.png' />
                                    <img className={Footer1.images} src='./images/linkedin.png' />
                                    <img className={Footer1.images} src='./images/twitter.png' />
                                    <img className={Footer1.images} src='./images/email.png' />

                                </div>
                            </div>
                            <div style={{ width:'100%',border: '1px solid #262626' }}></div>
                        </>)
                }

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className={Footer1.footerBtn}>
                        <p>Privacy Policy | Terms and Conditions</p>
                        <h5>@ 2022 Wove Labs, Inc, All rights reserved.</h5>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer
