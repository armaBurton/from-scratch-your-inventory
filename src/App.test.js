import { render, screen } from '@testing-library/react';
import AddInventory from './AddInventory/AddInventory';

test('RPG Weapon Creator', async () => {
  render(<AddInventory />);
  const linkElement = await screen.findByText(/weapon creator/i);
  expect(linkElement).toBeInTheDocument();
});