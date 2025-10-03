import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <p>Test content</p>
      </Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('custom-class');
  });

  it('applies default styles', () => {
    const { container } = render(
      <Card>
        <p>Test content</p>
      </Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('flex', 'flex-col', 'gap-4', 'rounded-lg', 'bg-white', 'shadow-lg', 'p-4');
  });

  it('combines default and custom className', () => {
    const { container } = render(
      <Card className="my-custom-class">
        <p>Test content</p>
      </Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('flex', 'flex-col', 'my-custom-class');
  });
});
