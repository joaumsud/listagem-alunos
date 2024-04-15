import React from 'react';

const Cursos = () => {

  const cursosFaculdade = [
    'Engenharia Civil',
    'Medicina',
    'Administração',
    'Direito',
    'Engenharia de Software',
    'Ciência da Computação',
    'Psicologia',
    'Arquitetura',
    'Design Gráfico',
    'Economia',
  
  ];

 
  const selecionarCursoAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * cursosFaculdade.length);
    return cursosFaculdade[indiceAleatorio];
  };

  
  return selecionarCursoAleatorio();
};

export default Cursos;
