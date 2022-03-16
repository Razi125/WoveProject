import React from 'react'
import Grid from '@material-ui/core/Grid';
import WorkFlow from './WorkFlow.module.css'
import WorkFlowCard from "./WorkFlowCard"
const WorkFlows = () => {
    return (
        <>
            <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <div className={WorkFlow.main}>
                        <h1 className={WorkFlow.heading}>Built for the Modern Workflow</h1>
                        <p className={WorkFlow.paraGraph}>Wove aggregates information scattered across all of your tools into once central source<br /> of truth. Never forget to follow up again.</p>
                    </div>
                    <div className={WorkFlow.DivFlow}>
                        <WorkFlowCard />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default WorkFlows
