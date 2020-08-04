import React from 'react';

//Styles
import './styles.css';

//Icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
  name: string;
  subject: string;
  description: string;
  price: number;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/51183682?s=460&u=c1f09414d262ca2e62a855b9406881a3a26b5e84&v=4" alt="Vini Black"/>
          <div>
            <strong>{props.name}</strong>
            <span>{props.subject}</span>
          </div>
      </header>
      <p>
        {props.description}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R${props.price}</strong>
        </p>

        <button type="button"><img src={whatsappIcon} alt="Whatsapp"/>Entrar em contato</button>
      </footer>
  </article>
  );
}

export default TeacherItem;