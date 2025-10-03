import { render, screen } from '@testing-library/react';
import TopCard from './TopCard';
import { People } from '@mui/icons-material';

describe('TopCard', () => {
  it('renders title correctly', () => {
    render(
      <TopCard 
        title="Total Users" 
        icon={<People />} 
        value={100} 
      />
    );

    expect(screen.getByText('Total Users')).toBeInTheDocument();
  });

  it('renders icon', () => {
    render(
      <TopCard 
        title="Total Users" 
        icon={<People data-testid="people-icon" />} 
        value={100} 
      />
    );

    expect(screen.getByTestId('people-icon')).toBeInTheDocument();
  });
});
