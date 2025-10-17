import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../src/app.jsx';

// Пользователь открывает корзину.

// Видит: заказ на 100 долларов, доставка 16 долларов, итог 116 долларов.

// Вводит промокод и жмёт кнопку «Apply».

// Итог уменьшается до 106 долларов.

describe('добавление в корзину и промокод корректно меняют суммы', () => {
    test('сценарий покупки + промокод', async () => {
        render(<App />);
        const user = userEvent.setup();

        // 1) На Shop (через мини-нави ContentBlock)
        const maybeTabShop = screen.queryByTestId('tab-shop');     
        if (maybeTabShop) await user.click(maybeTabShop);          

        // 2) Находим карточку "Red Hat" и жмём Buy
        const redHat = await screen.findByText(/Red Hat/i);
        const card = redHat.closest('.product');                 
        expect(card).toBeTruthy();

        const buyBtn = within(card).getByRole('button', { name: /buy/i });
        await user.click(buyBtn);

        // 3) Проверяем счётчик в хедере стал 1
        const counter = await screen.findByTestId('header-counter');   
        expect(counter.textContent).toMatch(/^1$/);

        // 4) Переходим в Cart через мини-нави
        const tabCart = screen.getByTestId('tab-cart');                 
        await user.click(tabCart);

        // 5) Базовые суммы
        await waitFor(() => {
            expect(screen.getByText(/Order price/i).nextSibling.textContent).toMatch(/\$100\.00/);
            expect(screen.getByText(/Delivery/i).nextSibling.textContent).toMatch(/\$16\.00/);
            expect(screen.getByText(/^Total/i).nextSibling.textContent).toMatch(/\$116\.00/);
        });

        // 6) Промокод (10%)
        const promoInput = screen.getByPlaceholderText(/Enter Promo Code/i);
        const applyBtn = screen.getByRole('button', { name: /apply/i });

        await user.clear(promoInput);
        await user.type(promoInput, 'ilovereact');
        await user.click(applyBtn);

        // 7) После скидки — новая Total
        await waitFor(() => {
            expect(screen.getByText(/^Total/i).nextSibling.textContent).toMatch(/\$106\.00/);
        });
    });
});

