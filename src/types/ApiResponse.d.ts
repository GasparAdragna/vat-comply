export interface RatesResponse {
  rates: Record<string, number>;
  base?: string;
  date?: string;
}
