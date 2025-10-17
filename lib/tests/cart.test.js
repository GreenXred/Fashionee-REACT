import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../src/app.jsx';

async function goTo(user, testId) {
    const el = await screen.findByTestId(testId);
    await user.click(el);
}

test('добавление в корзину и промокод корректно меняют суммы', async () => {
    render(<App />);
    const user = userEvent.setup();

    await goTo(user, 'nav-shop');

    // Находим карточку Red Hat
    const redHat = await screen.findByText('Red Hat');

    // На карточке ищем кнопку "Buy"
    const card = redHat.closest('.product') || redHat.closest('[data-testid="product-card"]') || redHat.parentElement;
    const buyBtn =
        card?.querySelector('.buy-button') ||
        card?.querySelector('button');

    expect(buyBtn).toBeTruthy();
    await user.click(buyBtn);

    // Проверяем счётчик корзины в шапке
    const headerCounter =
        document.querySelector('.header .counter') ||
        document.querySelector('[data-testid="cart-count"]') ||
        document.querySelector('.icon-cart + span');
    expect(headerCounter).toBeTruthy();
    expect(headerCounter.textContent).toMatch(/1/);

    // Переходим в Cart
    await goTo(user, 'nav-cart');

    // Товар виден
    expect(await screen.findByText('Red Hat')).toBeInTheDocument();

    // Суммы до промокода
    expect(screen.getByText('Order price').nextSibling.textContent).toMatch(/\$100\.00/);
    expect(screen.getByText('Delivery').nextSibling.textContent).toMatch(/\$16\.00/);
    expect(screen.getByText('Total').nextSibling.textContent).toMatch(/\$116\.00/);

    // Промокод
    const promoInput = screen.getByPlaceholderText(/Enter Promo Code/i);
    await user.clear(promoInput);
    await user.type(promoInput, 'ilovereact');

    // Сабмит (кнопка внутри формы / рядом)
    const promoForm = promoInput.closest('form');
    const submit = promoForm?.querySelector('button') || screen.getByRole('button', { name: /apply/i });
    await user.click(submit);

    // Скидка и total
    const discountRow = screen.getByText(/Discount for promo code/i).nextSibling;
    expect(discountRow.textContent).toMatch(/-\$10\.00/);

    const totalRow = screen.getByText(/^Total$/i).nextSibling;
    expect(totalRow.textContent).toMatch(/\$106\.00/);
});
