import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddAluno from "../components/AddAluno";
import AlunoLista from "../components/AlunoLista";
import useLocalStorage from "../hooks/useLocalStorage";
import EditAluno from "../components/EditAluno";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AlunosContext from "../context/AlunosContext";


const AppRouter = () => {
  const [alunos, setAlunos] = useLocalStorage('alunos', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <AlunosContext.Provider value={{ alunos, setAlunos }}>
            <Switch>
              <Route component={AlunoLista} path="/" exact={true} />
              <Route component={AddAluno} path="/add" />
              <Route component={EditAluno} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </AlunosContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
