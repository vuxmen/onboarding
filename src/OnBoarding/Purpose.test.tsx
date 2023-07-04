import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Purpose from './Purpose';

  test('renders step C correctly', () => {
    render(<Purpose purposes={[]} onChangePurpose={jest.fn()} />);

    const moneyTransferCheckbox = screen.getByText('Money transfer');
    const paymentCheckbox = screen.getByText('Payment');
    const billPaymentCheckbox = screen.getByText('Bill payment');
    const loanCheckbox = screen.getByText('Loan');
    const investmentCheckbox = screen.getByText('Investment');

    expect(moneyTransferCheckbox).toBeInTheDocument();
    expect(paymentCheckbox).toBeInTheDocument();
    expect(billPaymentCheckbox).toBeInTheDocument();
    expect(loanCheckbox).toBeInTheDocument();
    expect(investmentCheckbox).toBeInTheDocument();
  });