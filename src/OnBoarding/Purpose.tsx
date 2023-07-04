import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface IPurpose {
  purposes: string[]
  onChangePurpose: (e: any) => void
}

export default function Purpose(props: IPurpose) {
  const {purposes, onChangePurpose} = props;

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormGroup>
            <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Money transfer"
             checked={purposes.includes('moneyTransfer')}
                onChange={() => onChangePurpose('moneyTransfer')}/>
            <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Payment"
             checked={purposes.includes('payment')}
                onChange={() => onChangePurpose('payment')}/>
                <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Bill payment"
             checked={purposes.includes('billPayment')}
                onChange={() => onChangePurpose('billPayment')}/>
                <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Loan"
             checked={purposes.includes('loan')}
                onChange={() => onChangePurpose('loan')}/>
                <FormControlLabel 
            control={<Checkbox defaultChecked />} label="Investment"
             checked={purposes.includes('investment')}
                onChange={() => onChangePurpose('investment')}/>
        </FormGroup>
        </Grid>
    </Grid>
    
  );
}