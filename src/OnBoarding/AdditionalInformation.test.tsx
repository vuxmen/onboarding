import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdditionalInformation from './AdditionalInformation';

  test('renders step B correctly', () => {
    const mockFunc = jest.fn()
    render(<AdditionalInformation 
      email='testEmail' phoneNumber={123456} dateOfBirth={null} 
      onChangeDateOfBirth={mockFunc} 
      onChangeEmail={mockFunc}
      onChangePhoneNumber={mockFunc}
      />);

    const emailInput = screen.getByText('Email');
    const phoneNumberInput = screen.getByText('Phone number');

    expect(emailInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
  });