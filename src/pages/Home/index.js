import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function Home() {
    // Verifica se o usuário está logado
    if (!localStorage.getItem('token')) {
        window.location.href = '/';
    }

    // Estado para controlar a abertura do diálogo
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ campo1: '', campo2: '' });

    // Abre o diálogo
    const handleOpen = () => {
        setOpen(true);
    };

    // Fecha o diálogo
    const handleClose = () => {
        setOpen(false);
    };

    // Atualiza os campos de texto
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    // Lida com o envio do formulário
    const handleSubmit = () => {
        console.log("Valores digitados:", formData);
        handleClose(); // Fecha a dialog após o envio
    };

    return (
        <div>
            <h1>Hello, World</h1>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Abrir Dialog
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Digite seus dados</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Campo 1"
                        type="text"
                        fullWidth
                        name="campo1"
                        value={formData.campo1}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Campo 2"
                        type="text"
                        fullWidth
                        name="campo2"
                        value={formData.campo2}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancelar</Button>
                    <Button onClick={handleSubmit} color="primary">Salvar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
