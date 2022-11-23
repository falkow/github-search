import { useState } from 'react';

export const useVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  return { isVisible, toggleModal };
};
