import { act, renderHook } from '@testing-library/react';
import { useWindowResize, WindowResizeInterface } from '.';

describe('[HOOK]:useWindowResize', () => {
  const customGlobal: typeof globalThis = global;

  it('should window size data is read', () => {
    const windowSizeMock: WindowResizeInterface = {
      width: 1440,
      height: 768,
    };

    customGlobal.innerWidth = Number(windowSizeMock.width);
    customGlobal.innerHeight = Number(windowSizeMock.height);

    const { result } = renderHook(() => useWindowResize());
    expect(windowSizeMock).toStrictEqual(result.current);
  });

  it('should show new width when window resizing', () => {
    customGlobal.innerWidth = 1000;

    const { result } = renderHook(() => useWindowResize());
    const oldWidth = result.current.width;

    expect(oldWidth).toBe(1000);

    const mockEvent = jest.fn().mockImplementation(() => {
      customGlobal.innerWidth = 425;
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    window.addEventListener('resize', mockEvent());

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(mockEvent).toBeCalled();
    expect(result.current.width).toBe(425);
  });
});

export {};
