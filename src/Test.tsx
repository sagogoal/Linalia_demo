import { styled } from '@linaria/react';
import React from 'react';

export const SimpleButton = ({ label, color, onClick }: { label: string; color?: string; onClick?: () => void }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.span`
  background-color: ${(p) => p.color ?? '#59add9'};
  border-radius: 16px;
  padding: 10px;
  :hover {
    background-color: ${(p) => p.color ?? '#3099cf'};
    cursor: pointer;
  }
`;