import { useHistory } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import googleIcon from "../assets/images/google-icon.svg";
import letmeLogo from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import "../services/firebaseConnect";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }



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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIcon} alt="Icone do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="" method="POST OR GET ?">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
