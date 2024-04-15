import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const Aluno =  ({
    id,
    alunoNome,
    email,
    curso,
    idade,
    date,
    handleRemoveAluno
}) => {
    const history = useHistory();

    return (
        <Card style={{width: '18rem'}} className="aluno">
            <Card.Body>
                <Card.Title className="aluno-title">{alunoNome}</Card.Title>
                <div className='aluno-details'>
                    <div>E-mail: {email}</div>
                    <div>Curso: {curso}</div>
                    <div>Idade: {idade}</div>
                    <div>Data de cadasto: {new Date(date).toLocaleDateString('pt-BR')}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveAluno(id)}>
                    Excluir
                </Button>
            </Card.Body>
        </Card>
        
    )
}

export default Aluno;