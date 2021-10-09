import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import { useHistory, useParams } from "react-router";

import { Question } from "../components/Question/index";

import logoImg from "../assets/images/logo.svg";
import "../styles/room.scss";
import "../components/Question/style.scss";
import deleteImg from "../assets/images/delete.svg"
import { useRoom } from "./useRoom";
import { database } from "../services/firebaseConnect";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const history = useHistory();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você deseja excluir esta pergunta?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((questions) => {
            return (
              <Question
                key={questions.id}
                content={questions.content}
                author={questions.author}
              >
                <button type="button" onClick={() => handleDeleteQuestion(questions.id)}>
                  <img src={deleteImg} alt="Deletar pergunta" />
                </button>

              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
