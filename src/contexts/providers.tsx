import React from 'react';

import { CoursesProvider } from './courses';

const AppProviders: React.FC = ({ children }) => (
  <CoursesProvider>{children}</CoursesProvider>
);
export { AppProviders };
