// ConfirmationDialog.tsx

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Informasi</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Data Anda akan segera kami verifikasi melalui WhatsApp. Mohon untuk menunggu 1-2 hari kerja sampai admin kami menghubungi!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

