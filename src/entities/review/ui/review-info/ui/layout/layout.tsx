import { ReactNode } from 'react';

type TLayout = {
  children: ReactNode;
};

export function Layout({ children }: TLayout): JSX.Element {
  return <div className="reviews__info">{children}</div>;
}
