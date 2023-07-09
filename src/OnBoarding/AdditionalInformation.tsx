import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import  { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface IAdditionalInformation {
  email: string
  phoneNumber: number
  dateOfBirth: Dayjs | null
  onChangeEmail: (e: any) => void
  onChangePhoneNumber: (e: any) => void
  onChangeDateOfBirth: (e: any) => void
}

export default function AdditionalInformation(props: IAdditionalInformation) {
  const {
    email,
    phoneNumber,
    dateOfBirth,
    onChangeEmail, 
    onChangePhoneNumber,
    onChangeDateOfBirth
  } = props

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={email}
            onChange={(e) => onChangeEmail(e)}
            error={!email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type='number'
            id="phoneNumber"
            label="Phone number"
            fullWidth
            autoComplete="phone-number"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => onChangePhoneNumber(e)}
            error={!phoneNumber}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="Date of birth"
          value={dateOfBirth}
          onChange={(e) => onChangeDateOfBirth(e)}
        />
      </DemoContainer>
    </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}