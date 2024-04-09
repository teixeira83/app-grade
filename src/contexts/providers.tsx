import React from 'react';

import { CoursesProvider } from './courses';

const AppProviders: React.FC<any> = ({ children }: any) => (
  <CoursesProvider>{children}</CoursesProvider>
);
export { AppProviders };
