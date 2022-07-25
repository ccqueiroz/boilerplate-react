import { LoaderSuspense } from '.';
import { theme } from '../../../config/stylesGlobal/theme';
import RenderWithProviders, { screen } from '../../../modules/HOCTests/RenderWithProviders';

jest.spyOn(console, 'error');
describe('[COMPONENT]: LoaderSuspense', () => {
  it('should be render LoaderSuspense without crash and initial Values', () => {
    RenderWithProviders({
      ui: <LoaderSuspense />,
    });
    const containerLoader = screen.getByTestId('Loader-Suspense');
    expect(containerLoader).toBeInTheDocument();
    expect(containerLoader.firstChild).toHaveStyle({
      width: '40px',
      'border-top-color': theme.colors.primaryColor,
    });
  });
  it('should be render LoaderSuspense with Values passeds', () => {
    RenderWithProviders({
      ui: <LoaderSuspense size={60} color={theme.colors.secondaryColor} speedMultiplier={0.5} />,
    });
    const containerLoader = screen.getByTestId('Loader-Suspense');
    expect(containerLoader).toBeInTheDocument();
    expect(containerLoader.firstChild).toHaveStyle({
      width: '60px',
      'border-top-color': theme.colors.secondaryColor,
    });
  });
});

export {};
