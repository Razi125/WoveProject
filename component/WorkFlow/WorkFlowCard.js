import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkFlowCard from './WorkFlowCard.module.css'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const MediaCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {
                isMobile ? <>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className={WorkFlowCard.card}>
                                <img className={WorkFlowCard.cardImag} src='./images/computer_1 2.png' alt='' />
                                <h5>
                                    Visibility Into Your Workflow
                                </h5>
                                <p >
                                    Wove centralizes information and events scattered across all<br /> of your tools into a single place.
                                </p>
                            </div>

                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className={WorkFlowCard.card}>
                                <img className={WorkFlowCard.cardImag} src='./images/structure.png' alt='' />
                                <h5>
                                    Multiplayer Everything
                                </h5>
                                <p>
                                    Use the Wove browser extension to comment and annotate<br /> on any website.  Link everything back to a<br /> Wove room with a single click.
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <div className={WorkFlowCard.card}>
                                <img className={WorkFlowCard.cardImag} src='./images/team.png' alt='' />
                                <h5 >
                                    Live Collaboration
                                </h5>
                                <p >
                                    Embed any web-app into a Wove meeting and work together<br /> as a team. Tranform any website into mulitplayer with Wove’s<br /> shared browser
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </>
                    :
                    <>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <div className={WorkFlowCard.card}>
                                    <img className={WorkFlowCard.cardImag} src='./images/computer_1 2.png' alt='' />
                                    <h5>
                                        Visibility Into Your Workflow
                                    </h5>
                                    <p >
                                        Wove centralizes information and events<br /> scattered across all of your tools into a<br /> single place.
                                    </p>
                                </div>

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <div className={WorkFlowCard.card}>
                                    <img className={WorkFlowCard.cardImag} src='./images/structure.png' alt='' />
                                    <h5>
                                        Multiplayer Everything
                                    </h5>
                                    <p>
                                        Use the Wove browser extension to<br /> comment and annotate on any website.<br />  Link everything back to a Wove room with<br /> a single click.
                                    </p>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                                <div className={WorkFlowCard.card}>
                                    <img className={WorkFlowCard.cardImag} src='./images/team.png' alt='' />
                                    <h5 >
                                        Live Collaboration
                                    </h5>
                                    <p >
                                        Embed any web-app into a Wove meeting<br /> and work together as a team. Tranform any<br /> website into mulitplayer with Wove’s shared<br /> browser
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </>
            }
        </>

    );
}
export default MediaCard

