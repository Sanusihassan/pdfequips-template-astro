import type { Dispatch, SetStateAction } from "../../react-astro";

export function useSelectedOption(
  selectedOption: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) {
  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return handleOptionClick;
}
