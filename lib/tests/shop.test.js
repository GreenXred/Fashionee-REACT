import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../src/app.jsx';

// Пользователь открывает страницу товаров.

// В поисковой строке набирает Blue.

// После небольшой задержки (350 мс):

// товар «Red Hat» исчезает из списка,

// товар «Blue Shoes» остаётся.

describe('поиск на витрине фильтрует список товаров', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('поиск работает (скрывает Red Hat при вводе "Blue")', async () => {
        render(<App />);
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

        // гарантия, что мы на Shop
        const maybeTabShop = screen.queryByTestId('tab-shop');
        if (maybeTabShop) await user.click(maybeTabShop);

        const input = await screen.findByTestId('search-input');
        await user.clear(input);
        await user.type(input, 'Blue');

        // debounce 350 мс
        await act(async () => {
            jest.advanceTimersByTime(350);
        });

        // «Red Hat» должен исчезнуть, «Blue Shoes» — остаться/появиться
        await waitFor(() => {
            expect(screen.queryByText(/Red Hat/i)).not.toBeInTheDocument();
        });

        expect(await screen.findByText(/Blue Shoes/i)).toBeInTheDocument();
    });
});
