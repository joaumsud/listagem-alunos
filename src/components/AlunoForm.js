import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Cursos from "./Cursos";
import axios from 'axios';

const AlunoForm = (props) => {

  const [aluno, setAluno] = useState(() => {
    return {
      alunoNome: props.aluno ? props.aluno.alunoNome : "",
      email: props.aluno ? props.aluno.email : "",
      curso: props.aluno ? props.aluno.curso : "",
      idade: props.aluno ? props.aluno.idade : "",
      date: props.aluno ? props.aluno.date : "",
    }
  });
  const [errorMsg, setErrorMsg] = useState("");
  const { alunoNome, email, idade, curso } = aluno;
  const [emailError, setEmailError] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [alunoNome, email, idade, curso];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    const isValidEmail = validateEmail(email);

    if (allFieldsFilled && isValidEmail) {
      const aluno = {
        id: uuidv4(),
        alunoNome,
        email,
        idade,
        curso: Cursos(),
        date: new Date(),
      };
      props.handleOnSubmit(aluno);
    } else {
      if (!isValidEmail) {
        errorMsg = "Insira um e-mail válido!";
      } else {
        errorMsg = "Preencha TODOS os campos do Aluno!";
      }
    }
    setErrorMsg(errorMsg);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "idade":
        if (value === "" || parseInt(value) === +value) {
          setAluno((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
        case 'email':
        if (value === '') {
          setEmailError('Insira um e-mail válido.');
        } else {
          setAluno((prevState) => ({ ...prevState, [name]: value }));
          setEmailError('');
        }
        break;
      default:
        setAluno((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleAutoComplete = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const { results } = response.data;
      const { name, email, dob } = results[0];
      setAluno({
        ...aluno,
        alunoNome: `${name.first} ${name.last}`,
        curso: Cursos(),
        email: email,
        idade: dob.age,
      });
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome do Aluno</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="alunoNome"
            value={alunoNome}
            placeholder="Insira o nome do aluno"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail do Aluno</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Insira o E-mail do aluno."
            invalid={emailError ? "true" : "false"} 
            onChange={handleInputChange}
          />
           <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="curso">
          <Form.Label>curso</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="curso"
            value={curso}
            placeholder="Insira o Curso do aluno"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="idade">
          <Form.Label>Aluno idade</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="idade"
            value={idade}
            placeholder="Insira a idade do aluno"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        <Button variant="dark" className="autocomplete-btn" onClick={handleAutoComplete}>Auto Completar</Button>
      </Form>
    </div>
  );
};

export default AlunoForm;
