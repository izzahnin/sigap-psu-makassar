// ConfirmDialog.tsx

import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface ConfirmDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, onConfirm, onCancel }) => {
  return (
    <Dialog open={open} onClose={onCancel} sx={{ 
      '& .MuiDialog-paper': {
        borderRadius: '8px',
        padding: '16px',
        width: '400px',
      },
     }}>
      <DialogTitle>Apakah Anda yakin ingin menghapus entri ini?</DialogTitle>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Batal
        </Button>
        <Button onClick={onConfirm} color="error">
          Hapus
        </Button>
      </DialogActions>
    </Dialog>
  );
};

