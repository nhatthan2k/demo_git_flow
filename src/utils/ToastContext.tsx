import { createContext, ReactElement, useState, ReactNode } from 'react';
import { NOTIFICATION_TYPE } from '../constants/common.constants';
import { Alert, Snackbar } from '@mui/material';
import { TypeCommon } from '../models/common';

interface ToastContextType {
  showToast: (type: TypeCommon, messTitle: string, description?: string) => void;
  hideToast: () => void;
}

const defaultToastContext: ToastContextType = {
  showToast: () => {},
  hideToast: () => {},
};

export const ToastContext = createContext<ToastContextType>(defaultToastContext);

export const ToastProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<TypeCommon>(NOTIFICATION_TYPE.INFO);

  const showToast = (type: TypeCommon, messTitle: string) => {
    setMessage(messTitle);
    setType(type);
    setOpen(true);
  };

  const hideToast = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Ánh xạ icon tương ứng với severity
  // const iconMapping = {
  //   info: <InfoCircleFilled />,
  //   success: <CheckCircleFilled />,
  //   warning: <ExclamationCircleFilled />,
  //   error: <CloseCircleFilled />,
  // };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ width: '385px' }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%', fontSize: '16px' }}>
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
