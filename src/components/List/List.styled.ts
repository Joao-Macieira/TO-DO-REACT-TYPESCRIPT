import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Itens = styled.div(({ done }: ContainerProps) => (
  `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    label {
      color: #ccc;
      text-decoration: ${done ? 'line-through' : 'initial'}
    }

    input {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }

    span {
      position: absolute;
      right: 10%;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  `
));
