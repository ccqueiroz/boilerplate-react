import { screen, act } from '@testing-library/react';
import App from '..';
import RenderWithProviders from '../../HOCTests/RenderWithProviders';
import { MemoryRouterMock } from '../../HOCTests/MemoryRoutes';
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
describe('dumb test', () => {
  it('renders learn react link', async () => {
    await act(async () => {
      await sleep(2000);
      RenderWithProviders({
        ui: (
          <MemoryRouterMock initialEntries={['/home']}>
            <App />
          </MemoryRouterMock>
        ),
      });
    });
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
