interface ISearchInputWithIcon {
  value: string;
  onSearch: (value: string) => void;
  onBlur: () => void;
  isOpen: boolean;
  onFocus: () => void;
}

export { ISearchInputWithIcon };
