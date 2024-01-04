import { isInvalidValueCheck } from "@/app/utils/isInvalidValueCheck";
import { useState } from "react";

export const useAddPointDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isInvalidValue, setIsInvalidValue] = useState(false);

  const onOpenDialog = () => {
    setIsOpen(true);
  };

  const onCloseDialog = () => {
    setIsOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      return;
    }
    if (input.length === 0) {
      if (e.target.value === "0") {
        return;
      }
    }
    setIsInvalidValue(isInvalidValueCheck(e.target.value));
    setInput(e.target.value);
  };

  const clear = () => {
    setInput("");
  };

  return {
    isOpen,
    input,
    isInvalidValue,
    onOpenDialog,
    onCloseDialog,
    onChange,
    clear,
  };
};
