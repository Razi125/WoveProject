import React from 'react'
import Grid from '@material-ui/core/Grid';
import WoveSingle1 from './WoveSingle.module.css'
const WoveSingle = () => {
    return (
        <>
            <Grid container style={{ marginTop: '8rem' }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={WoveSingle1.leftsingle}>
                        <h5>A Single Source of Truth</h5>
                        <p>Wove aggregates information scattered across all of your tools into once central source of truth.<br /> Save hours switching between apps, and never forget to follow up again.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <img className={WoveSingle1.Mainimages} src='./images/Group 5503.svg' alt='' />
                </Grid>
            </Grid>

        </>
    )
}

export default WoveSingle
