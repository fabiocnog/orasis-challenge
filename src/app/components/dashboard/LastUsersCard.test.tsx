import { render, screen } from '@testing-library/react';
import LastUsersCard from './LastUsersCard';
import { Groups } from '@mui/icons-material';

const mockUsers = [
  {
    name: "João Silva",
    email: "joao.silva@email.com",
    region: "SP"
  },
  {
    name: "Maria Santos",
    email: "maria.santos@email.com",
    region: "RJ"
  },
  {
    name: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    region: "MG"
  }
];

describe('LastUsersCard', () => {
  it('renders title correctly', () => {
    render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups />}
        users={mockUsers}
      />
    );

    expect(screen.getByText('Last Registered Users')).toBeInTheDocument();
  });

  it('renders all users', () => {
    render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups />}
        users={mockUsers}
      />
    );

    expect(screen.getByText('João Silva • SP')).toBeInTheDocument();
    expect(screen.getByText('Maria Santos • RJ')).toBeInTheDocument();
    expect(screen.getByText('Pedro Oliveira • MG')).toBeInTheDocument();
  });

  it('renders user emails', () => {
    render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups />}
        users={mockUsers}
      />
    );

    expect(screen.getByText('joao.silva@email.com')).toBeInTheDocument();
    expect(screen.getByText('maria.santos@email.com')).toBeInTheDocument();
    expect(screen.getByText('pedro.oliveira@email.com')).toBeInTheDocument();
  });

  it('renders with empty users list', () => {
    render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups />}
        users={[]}
      />
    );

    expect(screen.getByText('Last Registered Users')).toBeInTheDocument();
    expect(screen.queryByText('João Silva')).not.toBeInTheDocument();
  });

  it('renders correct number of user avatars', () => {
    const { container } = render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups />}
        users={mockUsers}
      />
    );

    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(mockUsers.length);
  });

  it('renders icon', () => {
    render(
      <LastUsersCard
        title="Last Registered Users"
        icon={<Groups data-testid="groups-icon" />}
        users={mockUsers}
      />
    );

    expect(screen.getByTestId('groups-icon')).toBeInTheDocument();
  });
});
