import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@material-ui/core";

// Material UI Drawar

import { makeStyles, useTheme } from "@material-ui/core/styles";

// End Material UI Drawar

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TabsDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pDiv: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#FFFFFF',
    opacity: '0.6',
    marginTop: '2rem',
    marginBottom: '2rem'
  },

  MainTabDiv: {
    background: 'black',
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    float: "right",
    marginLeft: "89%",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
  logo: {
    width: "auto",
    height: "4rem",
    marginTop: "10%",
    marginBottom: "8%",
  },
  headerOptions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },

  // Wove Project Work
  buttonOptions: {
    color: '#FFFFFF',
    fontFamily: "Montserrat-medium",
    fontWeight: 500,
    textTransform: 'capitalize',
    marginLeft: '5rem',
    marginRight: '5rem',

    "& .MuiButton-label": {
      opacity: "0.4",
    },

    "&.active::before": {
      content: `""`,
      background: "#FFFFFF",
      marginBottom: '3px',
      border: '2px solid ##FFFFFF',
    },

    "&.active": {
      "& .MuiButton-label": {
        color: "#FFFFFF",
        opacity: "1",
      },
    },
  },

  contactBtn: {
    width: "11%",
    marginLeft: "20px",
    marginRight: "20px",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "OpenSans,sans-serif",
    padding: "11px 37px 10px 38px",
    borderRadius: "24px",
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#2f575d",
    fontSize: "13px",
    textAlign: "left",
    color: "#ffffff",
  },

  contactBtn1: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "OpenSans,sans-serif",
    borderRadius: "20px",
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#2f575d",
    padding: "1rem 1.9rem",
    fontSize: "1.3rem",
    textAlign: "left",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#eff1ee",
      color: "#2f575d",
      fontFamily: "OpenSans,sans-serif",
    },
  },
  primary: {
    color: "#2f575d",
  },
  contactBtncall: {
    marginLeft: "20px",
    textTransform: "capitalize",
    padding: "8px 37px 10px 38px",
    borderRadius: "24px",
    border: "1px solid #2f575d",
  },

  HeaderButtonMain: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  Menubt: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "OpenSans,sans-serif",
    marginLeft: "1%",
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#2f575d",
    padding: "0.2rem 1.2rem",
    fontSize: "1rem",
    textAlign: "left",
    color: "#ffffff",
  },
  MenuFirst: {
    position: "absolute",
    right: "0",
  },
  menuItem: {
    opacity: "0.6",
    fontFamily: "OpenSans,sans-serif",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "1.2rem",
  },
  "@media only screen and (max-width:1500px)": {
    headerOptions: {
      marginLeft: "5%",
    },
    buttonOptions: {
      margin: "0 0.5rem",
      fontSize: "1.2rem",
    },
    contactBtn1: {
      padding: "1rem 1.9rem",
      borderRadius: "17px",
      fontSize: "0.8rem",
      fontFamily: "OpenSans,sans-serif",
    },
  },

  "@media only screen and (max-width:960px)": {
    headerOptions: {
      marginLeft: "5%",
    },
    buttonOptions: {
      margin: "0 0.5rem",
      fontSize: "1.2rem",
    },
    contactBtn1: {
      padding: "1rem 1.9rem",
      borderRadius: "17px",
      fontSize: "0.8rem",
      fontFamily: "OpenSans,sans-serif",
    },
  },
}));

const TabGroup = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Grid item xs={12} md={12} xl={12} lg={12} >
        <div className={classes.HeaderButtonMain} style={{ marginTop: '-16rem' }}>
          <React.Fragment>
            <div className={classes.headerOptions}>
              <Button
                className={`${classes.buttonOptions} ${active == 1 ? "active" : null
                  }`}
                onClick={() => {
                  setActive(1);
                }}
              >
                Your Hub for Work
              </Button>

              <Button
                className={`${classes.buttonOptions} ${active == 2 ? "active" : null
                  }`}
                onClick={() => {
                  setActive(2);
                }}
              >
                Interactive Meetings
              </Button>
              <Button
                className={`${classes.buttonOptions} ${active == 3 ? "active" : null
                  }`}
                onClick={() => {
                  setActive(3);
                }}
              >
                The Meta-Layer
              </Button>
            </div>

            {
              isMobile ?
                (<>
                  <div>
                    <Grid container>
                      <Grid item>

                      </Grid>
                    </Grid>
                  </div>
                </>)
                :
                (
                  <>
                    <div className={classes.MainTabDiv}>
                      {
                        active === 1 ?
                          (<div className={classes.TabsDiv} style={{ backgroundImage: `url("/images/bgImage.svg")`, backgroundRepeat: 'no-repeat', width: '100%' }}  >
                            <p className={classes.pDiv}>Visibility into all of your project's moving pieces. Minus the noise and distractions.</p>
                            <img style={{ width: '100%' }} src="./images/Frame.png" alt="" />
                          </div>)
                          :
                          active === 2 ?
                            (<div className={classes.TabsDiv} style={{ backgroundImage: `url("/images/bgImage.svg")`, backgroundRepeat: 'no-repeat', width: '100%' }} >
                              <p className={classes.pDiv}>Visibility into all of your project's moving pieces. Minus the noise and distractions.</p>
                              <img style={{ width: '100%' }} src="./images/Frame.png" alt="" />
                            </div>)
                            :
                            active === 3 ?
                              (<div className={classes.TabsDiv} style={{ backgroundImage: `url("/images/bgImage.svg")`, backgroundRepeat: 'no-repeat', width: '100%' }} >
                                <p className={classes.pDiv}>Visibility into all of your project's moving pieces. Minus the noise and distractions.</p>
                                <img style={{ width: '100%' }} src="./images/Frame.png" alt="" />
                              </div>)

                              : ""
                      }

                    </div>
                  </>
                )
            }

          </React.Fragment>
        </div>
      </Grid>
    </div>
  );
};
export default TabGroup