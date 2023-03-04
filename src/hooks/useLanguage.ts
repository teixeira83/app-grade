import { useMemo } from 'react';
import { pt_BR } from '../settings/i18n';

const useLanguage = () => {
  const language = useMemo(() => {
    return pt_BR;
  }, []);

  return { language };
};

export { useLanguage };
