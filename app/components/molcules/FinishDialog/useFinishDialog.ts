import { useState } from "react";

export const useFinishDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDialog = () => {
    setIsOpen(true);
  };
  const onCloseDialog = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onCloseDialog,
    onOpenDialog,
  };
};
