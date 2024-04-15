import {React, useContext} from "react";
import AlunoForm from "./AlunoForm";
import { useParams } from "react-router-dom";
import AlunosContext from "../context/AlunosContext";

const EditAluno = ({ history }) => {
    const {alunos, setAlunos} = useContext(AlunosContext);
  const { id } = useParams();
  const alunoToEdit = alunos.find((aluno) => aluno.id === id);

  const handleOnSubmit = (aluno) => {
    const filtradoAlunos = alunos.filter((aluno) => aluno.id !== id);
    setAlunos([aluno, ...filtradoAlunos]);
    history.push('/');
  };

  return (
    <div>
        <AlunoForm aluno={alunoToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
};


export default EditAluno;