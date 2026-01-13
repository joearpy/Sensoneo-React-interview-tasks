export const formatDeposit = (depositInCents: number): string => {
  const depositInDollars = depositInCents / 100;
  return `$${depositInDollars.toFixed(2)}`;
};
