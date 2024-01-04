import { useState } from "react";

export const useContentId = () => {
  const [contentId, setContentId] = useState(0);

  const changeContentId = (newId: number) => {
    setContentId(newId);
  };

  return { contentId, changeContentId };
};
