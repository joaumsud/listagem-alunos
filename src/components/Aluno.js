import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Aluno = ({
  id,
  alunoNome,
  email,
  curso,
  idade,
  date,
  handleRemoveAluno,
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: "25rem", height: "18rem", fontSize:'14px'}} className="aluno">
      <Card.Body className="card">
        <Card.Title className="aluno-title">{alunoNome}</Card.Title>
        <div className="aluno-details">
          <div>E-mail: {email}</div>
          <div>Curso: {curso}</div>
          <div className="age">Idade: {idade}</div>
          <div className="date">
            Data de cadasto: {new Date(date).toLocaleDateString("pt-BR")}
          </div>
        </div>
        <div className="card-btn">
          <Button
            variant="primary"
            className="button-edita"
            onClick={() => history.push(`/edit/${id}`)}
          >
            Editar
          </Button>{" "}
          <Button
            variant="danger"
            className="button-excluir"
            onClick={() => handleRemoveAluno(id)}
          >
            Excluir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Aluno;
