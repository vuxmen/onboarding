import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicInformation from './BasicInformation';

  test('renders step A correctly', () => {
     render(<BasicInformation 
      fullName='testFullName' idNumber='testId' 
      onChangeFullName={jest.fn()} onChangeIdNumber={jest.fn()} 
      />);

    const fullNameInput = screen.getByText('Full name');
    const idNumberInput = screen.getByText('Id number');

    expect(fullNameInput).toBeInTheDocument();
    expect(idNumberInput).toBeInTheDocument();
  });