import React from 'react';

//Components
import PageHeader from '../../components/PageHeader';

//Styles
import './styles.css';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem name="Vini Black" description="
        Entusiasta das melhores tecnologias de quimica avançada.
        
        Apaixonado por explodir coisas em laboratório
        e por mudar a vida das pessoas através de experiências.
        Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        " price={80.00} subject="Química"  />
      </main>
    </div>
  );
}

export default TeacherList;