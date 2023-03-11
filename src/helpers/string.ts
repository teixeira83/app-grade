class CompareStrings {
  normalizeStrings(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  normalize(value: string) {
    return this.normalizeStrings(value);
  }
}

export { CompareStrings };
