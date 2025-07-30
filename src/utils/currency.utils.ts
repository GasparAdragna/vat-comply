export const getCurrencies = (
  data: Record<string, { name: string; symbol: string }> | null
): Currency[] => {
  if (!data) return [];
  return Object.entries(data).map(([code, { name }]) => ({
    value: code,
    label: name,
  }));
};
