interface InputTypes {
  key: number;
  type: string;
  placeholder: string;
  title: string;
  name?: string;
}

const inputArr: InputTypes[] = [
  {
    key: 1,
    type: "text",
    placeholder: "이메일을 입력해주세요.",
    title: "Email",
    name: "email",
  },
  {
    key: 2,
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
    title: "Password",
    name: "password",
  },
  {
    key: 3,
    type: "password",
    placeholder: "비밀번호를 다시 입력해주세요.",
    title: "Confirm Password",
    name: "repassword",
  },
  {
    key: 4,
    type: "text",
    placeholder: "닉네임을 입력해주세요.",
    title: "Name",
    name: "name",
  },
];

export { inputArr };
