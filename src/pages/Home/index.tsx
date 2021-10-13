import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebaseConnect";

import illustrationImg from "../../assets/images/illustration.svg";
import googleIcon from "../../assets/images/google-icon.svg";
import letmeLogo from "../../assets/images/logo.svg";
import "../../services/firebaseConnect";
import "../Home/style.scss";


export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom (event: FormEvent){
    event.preventDefault();

    if(roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()){
      alert('Essa sala não existe.')
      return;
    }
    if(roomRef.val().endedAt){
      alert('Essa sala ja foi fechada.')
      return;

    }

    history.push(`/rooms/${roomCode}`)
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
          <form onSubmit={handleJoinRoom}>
            <input 
            type="text" 
            required
            placeholder="Digite o código da sala" 
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
