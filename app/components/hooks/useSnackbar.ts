import { useState } from "react";

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return { isOpen, handleOpen, handleClose };
};
