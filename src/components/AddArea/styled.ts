import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  .image {
    font-size: 32px;
    margin-right: 4px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 32px;
    flex: 1;
    margin-left: 8px;
  }
`;
