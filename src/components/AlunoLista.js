import React, { useContext } from 'react';
import _ from 'lodash';
import Aluno from './Aluno';
import AlunosContext from '../context/AlunosContext';


const AlunosLista = () => {
  const { alunos, setAlunos } = useContext(AlunosContext);

  const handleRemoveAluno = (id) => {
    setAlunos(alunos.filter((aluno) => aluno.id !== id));
  };

  return (
    <React.Fragment>
      <div className="aluno-list">
        {!_.isEmpty(alunos) ? (
          alunos.map((aluno) => (
            <Aluno key={aluno.id} {...aluno} handleRemoveAluno={handleRemoveAluno} />
          ))
        ) : (
          <p className="message">Não contem alunos cadastrados, favor cadastrar</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default AlunosLista;