import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../src/app.jsx';

test('поиск на витрине фильтрует список товаров', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.click(await screen.findByTestId('nav-shop'));

    const searchInput = await screen.findByTestId('search-input');
    await user.clear(searchInput);
    await user.type(searchInput, 'Red');

    expect(await screen.findByText('Red Hat')).toBeInTheDocument();
    expect(screen.queryByText('Blue Shoes')).not.toBeInTheDocument();
});
