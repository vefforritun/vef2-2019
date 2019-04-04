import React from 'react';

interface IButtonProps {
  children: any;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button(props: IButtonProps) {
  const { children, onClick = () => {} } = props;

  return (
    <button onClick={onClick}>{children}</button>
  )
}
