import { act, renderHook } from '@testing-library/react';
import { useOnClickOutside } from '.';

const triggerRef = (value = false) => {
  const ref = { current: null };
  Object.defineProperty(ref, 'current', {
    get: jest.fn(() => (value ? document.createElement('div') : null)),
    set: jest.fn(() => null),
  });
  return ref;
};

jest.spyOn(console, 'error');

describe('[HOOK]:useOnClickOutSide', () => {
  beforeEach(() => {
    triggerRef(false);
  });

  it('Should be dispatch mousedown event', () => {
    const fn = jest.fn(() => true);
    const ref = triggerRef(true);
    renderHook(() => useOnClickOutside(ref, () => void fn()));
    act(() => {
      document.dispatchEvent(new Event('mousedown'));
    });
    expect(fn).toHaveBeenCalled();
  });

  it('Should be dispatch touchstart event', () => {
    const fn = jest.fn(() => true);
    const ref = triggerRef(true);
    renderHook(() => useOnClickOutside(ref, () => void fn()));
    act(() => {
      document.dispatchEvent(new Event('touchstart'));
    });
    expect(fn).toHaveBeenCalled();
  });

  it('Should be not dispatch touchstart event when dont have ref', () => {
    const fn = jest.fn(() => true);
    const ref = triggerRef(false);
    renderHook(() => useOnClickOutside(ref, () => void fn()));
    act(() => {
      document.dispatchEvent(new Event('touchstart'));
    });
    expect(fn).toHaveBeenCalledTimes(0);
  });
});
