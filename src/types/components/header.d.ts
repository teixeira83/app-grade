interface IHeader {
  title?: string;
  onGoBack?: () => void;
  valueToSearch?: string;
  onSearch?: (value) => void;
}

export { IHeader };
