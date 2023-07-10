import useToggle from '@/features/ui/header/hooks/use-toggle';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';

describe('useToggle', () => {
  it('should toggle the value when the toggle function is called', () => {
    const { result } = renderHook(() => useToggle(false));
    const [value, toggleValue] = result.current;

    expect(value).toBe(false);

    act(() => {
      toggleValue();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      toggleValue();
    });

    expect(result.current[0]).toBe(false);
  });
});
