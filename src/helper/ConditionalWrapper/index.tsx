import React, { FC, ReactNode } from 'react';

interface ConditionalWrapperProps {
  condition: boolean;
  children: ReactNode;
  render: (children: ReactNode) => ReactNode;
}
const ConditionalWrapper: FC<ConditionalWrapperProps> = props => {
  const { condition, children, render } = props;
  if (condition) {
    return <>{render(children)}</>;
  }
  return <>{children}</>;
};

export default ConditionalWrapper;
