import React from 'react'
import Grid from '@material-ui/core/Grid';
import Loop1 from './Loop.module.css';

const Loop = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className={Loop1.ImageDiv} style={{ backgroundImage: `url("/images/Group_5533.svg")`, backgroundRepeat: 'no-repeat',}}>
                        <div className={Loop1.backMain}>
                        <h3 className={Loop1.heading}>
                            Stay in the loop
                        </h3>
                        <p className={Loop1.paraGraph} >
                            Sign up to be the first to try Wove.
                        </p>
                        <div className={Loop1.inputDiv}>
                            <div className={Loop1.customSearch}>
                                <input type="text" className={Loop1.customSearchInput} placeholder="Email Address" />
                                <button className={Loop1.customSearchBotton} type="submit">Request Early Access</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default Loop
