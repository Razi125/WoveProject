import React, { useState, useEffect } from 'react';
import window from 'global'
import Grid from '@material-ui/core/Grid';
import Main from './MainContainer.module.css'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TabGroup from '../TabTest/TabGroup';

const MainContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <>
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className={Main.main} style={{ backgroundImage: `url("/images/backgroundImage.png")`, backgroundRepeat: 'no-repeat', height: '50rem', }}>
                        <h1 className={Main.heading}>The Collaboration<br /> Meta-Layer for <span style={{ color: '#3090C7', opacity: '0.6' }}>Work</span></h1>
                        <p className={Main.paraGraph}>The apps you already use, accessible and visible in one place. Host meetings,<br /> track progress, and organize your tools in Wove.</p>
                        <div>
                            {isMobile ? (
                                <>
                                
                                <div className={Main.customSearch}>
                                    <input type="text" className={Main.customSearchInput} placeholder="Email Address" />
                                </div>
                                <button className={Main.customSearchBotton} type="submit">Request Early Access</button>
                                </>
                            ) :
                                (
                                    <div className={Main.customSearch}>
                                        <input type="text" className={Main.customSearchInput} placeholder="Email Address" />
                                        <button className={Main.customSearchBotton} type="submit">Request Early Access</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </>
    )
}

export default MainContainer
