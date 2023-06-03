import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ value, handleChange }) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
