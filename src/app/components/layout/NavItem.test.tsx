import { render, screen } from '@testing-library/react';
import NavItem from './NavItem';
import { Home } from '@mui/icons-material';
import * as nextNavigation from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('NavItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders link with text and icon', () => {
    (nextNavigation.usePathname as jest.Mock).mockReturnValue('/other');

    render(
      <NavItem
        href="/dashboard"
        icon={<Home data-testid="home-icon" />}
        text="Dashboard"
      />
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
  });

  it('applies active styles when pathname matches href', () => {
    (nextNavigation.usePathname as jest.Mock).mockReturnValue('/dashboard');

    render(
      <NavItem
        href="/dashboard"
        icon={<Home />}
        text="Dashboard"
      />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-[#E8EEFE]', 'text-[#1B59F8]');
  });

  it('applies default styles when pathname does not match href', () => {
    (nextNavigation.usePathname as jest.Mock).mockReturnValue('/other');

    render(
      <NavItem
        href="/dashboard"
        icon={<Home />}
        text="Dashboard"
      />
    );

    const link = screen.getByRole('link');
    expect(link).not.toHaveClass('bg-[#E8EEFE]', 'text-[#1B59F8]');
    expect(link).toHaveClass('flex', 'items-center', 'gap-3', 'px-4', 'py-3', 'rounded-lg');
  });

  it('has correct href attribute', () => {
    (nextNavigation.usePathname as jest.Mock).mockReturnValue('/other');

    render(
      <NavItem
        href="/settings"
        icon={<Home />}
        text="Settings"
      />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/settings');
  });

  it('handles root path correctly', () => {
    (nextNavigation.usePathname as jest.Mock).mockReturnValue('/');

    render(
      <NavItem
        href="/"
        icon={<Home />}
        text="Home"
      />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-[#E8EEFE]', 'text-[#1B59F8]');
  });
});
