import React, { useState } from 'react';
import Aluno from './Aluno'; 

const AlunosPaginados = ({ alunos }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const alunosPorPagina = 6;
  const indiceInicial = (paginaAtual - 1) * alunosPorPagina;
  const indiceFinal = paginaAtual * alunosPorPagina;
  const alunosDaPagina = alunos.slice(indiceInicial, indiceFinal);

  const totalPages = Math.ceil(alunos.length / alunosPorPagina);

  const nextPage = () => {
    if (paginaAtual < totalPages) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const prevPage = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  return (
    <div>
      {alunosDaPagina.map(aluno => (
        <Aluno key={aluno.id} {...aluno} />
      ))}
      <div>
        <button onClick={prevPage} disabled={paginaAtual === 1}>Anterior</button>
        <button onClick={nextPage} disabled={paginaAtual === totalPages}>Próxima</button>
      </div>
    </div>
  );
};

export default AlunosPaginados;
