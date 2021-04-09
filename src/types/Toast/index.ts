export interface ToastConfig {
  message: string;
  color: string;
  visible?: boolean;
  duration?: number;
  buttonText?: string;
}

export interface ToastContext {
  show: (configParams: ToastConfig) => void;
  hide: () => void;
  data: ToastConfig;
}
