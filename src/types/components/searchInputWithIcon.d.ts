interface ISearchInputWithIcon {
  value: string;
  onSearch: (value: string) => void;
  onBlur: () => void;
  isOpen: boolean;
}

export { ISearchInputWithIcon };
