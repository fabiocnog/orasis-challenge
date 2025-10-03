import { render, screen } from "@testing-library/react";
import CardTitle from "./CardTitle";
import { People } from "@mui/icons-material";

describe('CardTitle', () => {
  it('renders title correctly', () => {
    render(
      <CardTitle 
        icon={<People />} 
        title="Total Users" 
      />
    );

    expect(screen.getByText('Total Users')).toBeInTheDocument();
  });

  it('renders icon', () => {
    render(
      <CardTitle 
        icon={<People data-testid="people-icon" />} 
        title="Total Users" 
      />
    );

    expect(screen.getByTestId('people-icon')).toBeInTheDocument();
  });
})