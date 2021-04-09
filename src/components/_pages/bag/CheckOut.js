import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddAddress from '../../AddAddress';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  
  const steps = [
    {
      id: 1,
      label: `Account`,
      description: `To place your order, log in by entering your 10 digit mobile number. `,
    },
    {
      id: 2,
      label: 'Delivery address',
      description:
        'Select your delivery address from the existing one and add new one.',
    },
    {
      id: 3,
      label: 'Payment',
      description: `Select your payment method`,
    },
  ];
  
  
function CheckOut() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
        
            <div className="container">
            <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Typography variant="h6">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.id === 1 && (
                <form className="form mt-3">
                  <span className="mb-2">Mobile Number</span><br></br>
                  <input type="text" placeholder="+256    Enter mobile number" className="input py-2"/>
                  {/* <input type="button" value="Login" className=""/> */}
                </form>
              )}
              {step.id === 2 && (
                <div className="row gap-4 mt-3 ms-1">
                <div className="col-md-5 border rounded py-2">
                    <div className=" color-darkgray">
                        <p className=" color-darkslategray">Shery Karan</p>
                        <sup className="pt-2">Quench Ville, Plot 12 Nkrumah Rd Kampala, Uganda</sup><br/>
                        <span className="color-darkslategray">+256 76 633 4574</span>
                    </div>
                </div>

                <div className="col-md-5 border rounded py-4">
                    <div className="d-flex justify-content-center mt-4 color-royal-blue">
                        <AddAddress />
                    </div>
                </div>
            </div>
              )}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    )
}

export default CheckOut
