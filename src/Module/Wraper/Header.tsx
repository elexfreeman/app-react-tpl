import React from 'react';

export interface HeaderPropsI {
  caption: string;
}

export const Header: React.FC<HeaderPropsI> = (props: HeaderPropsI) => {
  return (
    <div className="header"></div>
  );
}

