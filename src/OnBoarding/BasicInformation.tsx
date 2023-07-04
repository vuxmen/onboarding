import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

interface IBasicInformation {
  fullName: string
  idNumber: string
  onChangeFullName: (e: any) => void
  onChangeIdNumber: (e: any) => void
}

export default function BasicInformation(props: IBasicInformation) {
  const {
    fullName,
    idNumber,
    onChangeFullName,
    onChangeIdNumber
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            error={!fullName}
            value={fullName}
            onChange={((e) => onChangeFullName(e))}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idNumber"
            name="idNumber"
            label="Id number"
            fullWidth
            autoComplete="id-number"
            variant="standard"
            value={idNumber}
            error={!idNumber}
            onChange={(e) => onChangeIdNumber(e)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}