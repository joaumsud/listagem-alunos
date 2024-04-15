import React, { useContext, useState } from 'react';
import _ from 'lodash';
import Aluno from './Aluno';
import AlunosContext from '../context/AlunosContext';
import ReactPaginate from 'react-paginate';

const AlunosLista = () => {
  const { alunos, setAlunos } = useContext(AlunosContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; 

  const handleRemoveAluno = (id) => {
    setAlunos(alunos.filter((aluno) => aluno.id !== id));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const renderAlunos = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAlunos = alunos.slice(startIndex, endIndex);

    return currentAlunos.map((aluno) => (
      <Aluno key={aluno.id} {...aluno} handleRemoveAluno={handleRemoveAluno} />
    ));
  };

  return (
    <React.Fragment>
      <div className="aluno-list">
        {!_.isEmpty(alunos) ? (
          renderAlunos()
        ) : (
          <p className="message">Não contém alunos cadastrados, favor cadastrar</p>
        )}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(alunos.length / itemsPerPage)}
        nextLabel=">>"
        breakLabel="..."
        previousLabel="<<"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </React.Fragment>
  );
};

export default AlunosLista;
