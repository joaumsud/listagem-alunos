import React, { useContext } from 'react';
import AlunoForm from './AlunoForm';
import AlunosContext from '../context/AlunosContext';


const AddAluno = ({ history }) => {
  const { alunos, setAlunos } = useContext(AlunosContext);

  const handleOnSubmit = (aluno) => {
    setAlunos([aluno, ...alunos]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <AlunoForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddAluno;