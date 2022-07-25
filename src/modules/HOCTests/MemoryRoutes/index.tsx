import React from 'react';
import { MemoryRouter } from 'react-router-dom';

interface MemoryRouterMockInterface {
  children: React.ReactElement;
  initialEntries?: Array<string>;
}

const MemoryRouterMock = ({ children, initialEntries = [] }: MemoryRouterMockInterface) => {
  return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>;
};
export { MemoryRouterMock };
