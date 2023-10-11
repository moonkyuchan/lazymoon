interface InputTypes {
  key: number;
  type: string;
  placeholder: string;
  name?: string;
}

const inputArr: InputTypes[] = [
  {
    key: 1,
    type: "text",
    placeholder: "Email",
    name: "email",
  },
  {
    key: 2,
    type: "password",
    placeholder: "Password",
    name: "password",
  },
];

export { inputArr };
