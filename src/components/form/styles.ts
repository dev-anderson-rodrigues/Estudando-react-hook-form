import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  background-color: #6950a1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ContainerLogin = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ffffff;
  width: 25%;
  box-shadow: #d0d0d0;
  border-radius: 10px;
  gap: 40px;
  padding: 30px;

  h1 {
    width: 100%;
    align-items: start;
    display: flex;
    font-family: "Nunito", sans-serif;
    font-size: 2em;
    font-weight: 600;
    color: #6950a1;
  }
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 2px;
    justify-content: center;
    position: relative;
    width: 100%;

    label {
      font-family: "Nunito", sans-serif;
      font-size: 1em;
      font-weight: 600;
      color: #6950a1;
      margin-bottom: 10px;
    }
    p {
      position: absolute;
      top: 80px;
      left: 7px;
      font-size: 15px;
      color: red;
      transition: 1s;
    }
  }

  button:hover {
    background: #181515;
    color: #ffffff;
    font-weight: 400;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-shadow: none;
    transition: 1s;
  }
`;

export const ContainerInput = styled.input`
  padding: 0.5em;
  border: 1px solid #757575;
  border-radius: 10px;
  display: block;
  font-weight: 600;
  font-family: sans-serif;
  max-width: 100%;
  padding-top: 15px;
  font-size: 15px;
  height: 35px;
  outline: none;
  position: relative;
`;
export const Button = styled.button`
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  border-radius: 5px;
  font-size: 1.2em;
  background: gray;
  border: 0;
  margin-bottom: 1em;
  background-color: #fbb04d;
  color: #000;
  font-weight: 400;
  padding: 0.5em 0.6em;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: relative;
  cursor: pointer;
  max-width: 100%;
  height: 40px;
`;
