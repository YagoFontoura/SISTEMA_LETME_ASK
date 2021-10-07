import illustrationImg from "../assets/images/illustration.svg";
import letmeLogo from "../assets/images/logo.svg";
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const { user } = useAuth();


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Simboliza Perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Para toda pergunta existe uma resposta.</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={letmeLogo} alt="Logo da LetmeAsk" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala.</h2>
          
          <form action="" method="POST OR GET ?">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
              Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
