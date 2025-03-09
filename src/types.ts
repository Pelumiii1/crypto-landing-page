export interface InvestmentOptionsProps {
  setIsWalletOptions: (value: boolean) => void;
  setContent: (value: boolean) => void;
}

export interface WalletOptionsProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
}
