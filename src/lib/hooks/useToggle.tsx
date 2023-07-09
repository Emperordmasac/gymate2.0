import { useState } from 'react';

type UseToggleResult = [boolean, () => void];

const useToggle = (initialValue: boolean = false): UseToggleResult => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = (): void => {
    setValue((prevValue: boolean) => !prevValue);
  };

  return [value, toggleValue];
};

export default useToggle;
