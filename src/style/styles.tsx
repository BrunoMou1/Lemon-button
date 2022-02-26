import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  margin-top: 30px;

  p {
    margin-bottom: 15px;
    font-weight: bold;
  }

  .under {
    text-decoration: underline;
  }

  div {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }

    button {
      margin-right: 10px;
    }
  }
`