import {useState, useEffect, useMemo} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicInformation from './BasicInformation';
import AdditionalInformation from './AdditionalInformation';
import Purpose from './Purpose';
import {Dayjs} from 'dayjs'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function getSteps(configuration?: number) {
  switch(configuration) {
    case 1: return [
    'Basic Information', 'Additional Information', 'Purpose'
    ]
    case 2: return [
    'Basic Information', 'Purpose', 'Additional Information'
    ]
    default: return [
    'Basic Information', 'Additional Information', 'Purpose'
    ]
  }
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function OnBoarding() {
  const [configuration, setConfiguration] = useState<1 | 2>(1);

  const [steps, setSteps] = useState(getSteps())
  const [activeStep, setActiveStep] = useState<number>(0);

  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<any>(null);
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
  const [purposes, setPurposes] = useState<string[]>([]);

  const handleChangeConfiguration = (event: any) => {
    setConfiguration(event.target.value);
  };

  const handleChangeFullName = (e: any) => {
    setFullName(e.target.value.trim());
  }

  const handleChangeIdNumber = (e: any) => {
    setIdNumber(e.target.value.trim());
  }

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value.trim())
  }

  const handleChangePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value.trim())
  }

  const handleChangeDateOfBirth = (e: any) => {
    setDateOfBirth(e)
  }

  const handleChangePurposes = (purpose: string) => {
    setPurposes((prevSelectedPurposes) => {
      if (prevSelectedPurposes.includes(purpose)) {
        return prevSelectedPurposes.filter((p) => p !== purpose);
      }
      return [...prevSelectedPurposes, purpose];
    });
  };

  const checkisFormFilled = () => {
    if (configuration === 1) {
      switch (activeStep) {
        case 0: return (fullName === '' || idNumber === '') ? false : true
        case 1: return (email === '' || !phoneNumber || !dateOfBirth) ? false : true
        case 2: return purposes.length === 0 ? false : true
        default: return false
      }
    } else {
      switch (activeStep) {
        case 0: return (fullName === '' || idNumber === '') ? false : true
        case 2: return (email === '' || !phoneNumber || !dateOfBirth) ? false : true
        case 1: return purposes.length === 0 ? false : true
        default: return false
      }
    }

  }

  const handleNext = () => {
    checkisFormFilled() && setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = useMemo(() => {
    if (configuration === 1) {
      switch(activeStep) {
        case 0:
        return (
          <BasicInformation 
            fullName={fullName}
            idNumber={idNumber}
            onChangeFullName={handleChangeFullName}
            onChangeIdNumber={handleChangeIdNumber}
          />
        )
        case 1: 
        return (
          <AdditionalInformation 
            email={email}
            phoneNumber={phoneNumber}
            dateOfBirth={dateOfBirth}
            onChangeEmail={handleChangeEmail}
            onChangePhoneNumber={handleChangePhoneNumber}
            onChangeDateOfBirth={handleChangeDateOfBirth}
          />
        )
        case 2:
        return (
          <Purpose 
            purposes={purposes}
            onChangePurpose={handleChangePurposes}
          />
        )
        default: return (
          <BasicInformation 
            fullName={fullName}
            idNumber={idNumber}
            onChangeFullName={handleChangeFullName}
            onChangeIdNumber={handleChangeIdNumber}
          />
        )
      }
    } else {
      switch(activeStep) {
        case 0:
        return (
          <BasicInformation 
            fullName={fullName}
            idNumber={idNumber}
            onChangeFullName={handleChangeFullName}
            onChangeIdNumber={handleChangeIdNumber}
          />
        )
        case 1:
        return (
          <Purpose 
            purposes={purposes}
            onChangePurpose={handleChangePurposes}
          />
        )
        case 2:
        return (
          <AdditionalInformation 
            email={email}
            phoneNumber={phoneNumber}
            dateOfBirth={dateOfBirth}
            onChangeEmail={handleChangeEmail}
            onChangePhoneNumber={handleChangePhoneNumber}
            onChangeDateOfBirth={handleChangeDateOfBirth}
          />
        )
        default: return (
          <BasicInformation 
            fullName={fullName}
            idNumber={idNumber}
            onChangeFullName={handleChangeFullName}
            onChangeIdNumber={handleChangeIdNumber}
          />
        )
      }
    }
  }, [configuration, activeStep, fullName, idNumber, phoneNumber, email, dateOfBirth, purposes])

  useEffect(() => {
    setSteps(getSteps(configuration))
  }, [configuration])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            OnBoarding
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h2" variant="h4" align="center">
            Personal Information
          </Typography>
          <br />
          <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={configuration}
          onChange={handleChangeConfiguration}
          autoWidth
          label="Configuration"
        >
          <MenuItem value={1}>Configuration A</MenuItem>
          <MenuItem value={2}>Configuration B</MenuItem>
        </Select>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your submit, your information is saved.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}