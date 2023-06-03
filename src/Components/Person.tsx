import React from 'react';

type Name = {
  firstName: string;
  lastName: string;
};

type PersonProps = {
  name: Name;
};

export const Person: React.FC<PersonProps> = (props) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

