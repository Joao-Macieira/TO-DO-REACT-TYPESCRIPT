import { useState, KeyboardEvent } from "react"
import { Container } from "./styled"

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [text, setText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && text !== '') {
      onEnter(text)
      setText('')
    }
  }

  // TO-DO
  // Pegar lista do storage e modificar o done ao clicar no check

  return (
    <Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  )
}
