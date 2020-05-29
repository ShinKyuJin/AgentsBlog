import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useStateProps } from "../../interface/interfaces";
import FatText from "../../components/FatText";

interface AuthPresenterProps {
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  username: useStateProps;
  email: useStateProps;
  secret: useStateProps;
  onSummit: (e: any) => Promise<void>;
  btnDisable: boolean;
}

const AuthPresenter: React.FC<AuthPresenterProps> = ({
  action,
  setAction,
  username,
  email,
  secret,
  onSummit,
  btnDisable,
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <form>
          <BigFatText text={"로그인"} />
          <EFatText text={"이메일로 로그인"} color={"grey"} />
          <Input placeholder={"이메일을 입력하세요."} {...email} type="email" />
          <Button text={"로그인"} onClick={onSummit} disabled={btnDisable} />
        </form>
      )}
      {action === "signUp" && (
        <form>
          <BigFatText text={"회원가입"} />
          <EFatText text={"이메일로 회원가입"} color={"grey"} />
          <Input placeholder={"이름을 입력하세요."} {...username} />
          <Input placeholder={"이메일을 입력하세요."} {...email} type="email" />
          <Button text={"회원가입"} onClick={onSummit} disabled={btnDisable} />
        </form>
      )}
      {action === "confirm" && (
        <form>
          <Input placeholder={"Secret code"} required {...secret} />
          <Button text={"확인"} onClick={onSummit} disabled={btnDisable} />
        </form>
      )}
    </Form>
    {action !== "confirm" && (
      <StateChanger>
        {action === "logIn" ? (
          <>
            아직 회원이 아니신가요?{"  "}
            <Link onClick={() => setAction("signUp")} to={""}>
              회원가입
            </Link>
          </>
        ) : (
          <>
            계정이 이미 있으신가요?{"  "}
            <Link onClick={() => setAction("logIn")} to={""}>
              로그인
            </Link>
          </>
        )}
      </StateChanger>
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BigFatText = styled(FatText)`
  font-size: 20px;
  margin-bottom: 18px;
  display: block;
`;

const EFatText = styled(FatText)`
  font-size: 16px;
  margin-bottom: 18px;
  display: block;
`;

const Box = styled.div`
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;
export default AuthPresenter;