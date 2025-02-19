import React, { useState } from 'react';
import Form from "../../components/Form";
import { useEffect } from 'react';
import { salvarLivro } from "../../api/livros";
import { statusCodes } from "../../api/status-codes";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import './Home.css'

const excluirLivro = async (id) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_API}/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === statusCodes.OK) {
            alert("Livro excluído com sucesso");
        } else {
            console.error('Erro ao excluir livro');
        }
    } catch (error) {
        console.error('Erro de requisição:', error);
    }
};

// Função para atualizar um livro
const atualizarLivro = async (id, title, description) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_URL_API}/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, description })
        });

        if (response.status === statusCodes.OK) {
            alert("Livro atualizado com sucesso");
        } else {
            console.error('Erro ao atualizar livro');
        }
    } catch (error) {
        console.error('Erro de requisição:', error);
    }
};

export default function Home() {
    // Verifica se o usuário está logado
    if (!localStorage.getItem('token')) {
        window.location.href = '/';
    }

    const [livros, setLivros] = useState([]);
    const [livroSelecionado, setLivroSelecionado] = useState(null);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [titleEditado, setTitleEditado] = useState('');
    const [descriptionEditada, setDescriptionEditada] = useState('');



    const buscarLivros = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${process.env.REACT_APP_URL_API}/books`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === statusCodes.OK) {
                const data = await response.json();
                setLivros(data);
            } else {
                console.error('Erro ao buscar livros');
            }
        } catch (error) {
            console.error('Erro de requisição:', error);
        }
    };

    // useEffect para buscar livros quando a página carrega
    useEffect(() => {
        buscarLivros();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Token na Home:', token);
    }, []); 

      const onSubmit = async (event) => {
            event.preventDefault();
    
            const response = await salvarLivro( event.target[0].value, event.target[1].value);
            const data = await response.json();
            
            console.log(response)
    
            switch (response.status) {
                case statusCodes.CREATED:
                    alert("Livro salvo com sucesso");
                    buscarLivros();
                    handleClose();
                    break;
                default:
                    alert(data.message);
                    handleClose();
                    break;
            } 
        }
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };
    
        // Fecha o diálogo
        const handleClose = () => {
            setOpen(false);
        };

        const abrirDetalhesLivro = (livro) => {
            setLivroSelecionado(livro);
            setTitleEditado(livro.title);
            setDescriptionEditada(livro.description);
        };
    
        const fecharDetalhesLivro = () => {
            setLivroSelecionado(null);
            setModoEdicao(false);
        };

        const handleExcluir = async () => {
            if (livroSelecionado) {
                await excluirLivro(livroSelecionado.id);
                buscarLivros();
                fecharDetalhesLivro();
            }
        };
    
        const handleEditar = () => {
            setModoEdicao(true);
        };
    
        const handleSalvarEdicao = async () => {
            if (livroSelecionado) {
                await atualizarLivro(livroSelecionado.id, titleEditado, descriptionEditada);
                buscarLivros();
                fecharDetalhesLivro();
            }
        };

    return (
        <div className="container">
            <header className="header">
                <h1>Lista de Livros</h1>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Adicionar Livro
                </Button>
            </header>

            <ul className="lista-livros">
                {livros.map((livro, index) => (
                    <li key={index} onClick={() => abrirDetalhesLivro(livro)}>
                        <h2>{livro.title}</h2>
                        <p>{livro.description}</p>
                    </li>
                ))}
            </ul>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Adicionar Livro</DialogTitle>
                <DialogContent>
                <Form
                titulo='Cadastrar livros'
                funcao='Salvar'
                linkAlternativo="/"
                campos={[
                    { nome: "Titulo", type: "text" },
                    { nome: "Descricao", type: "text" }
                ]}
                onSubmit={onSubmit}
            />
                </DialogContent>
            </Dialog>
            <Dialog open={!!livroSelecionado} onClose={fecharDetalhesLivro}>
                <DialogTitle>{livroSelecionado?.title}</DialogTitle>
                <DialogContent>
                    {modoEdicao ? (
                        <>
                            <TextField
                                label="Título"
                                value={titleEditado}
                                onChange={(e) => setTitleEditado(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Descrição"
                                value={descriptionEditada}
                                onChange={(e) => setDescriptionEditada(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                        </>
                    ) : (
                        <>
                            <p>{livroSelecionado?.description}</p>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    {modoEdicao ? (
                        <Button onClick={handleSalvarEdicao} color="primary">Salvar</Button>
                    ) : (
                        <>
                            <Button onClick={handleEditar} color="primary">Editar</Button>
                            <Button onClick={handleExcluir} color="secondary">Excluir</Button>
                        </>
                    )}
                    <Button onClick={fecharDetalhesLivro}>Fechar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
