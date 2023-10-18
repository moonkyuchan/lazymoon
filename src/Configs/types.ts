import moment from "moment";
export type SlideCardType = {
  key: number;
  img: string;
  title: string;
  content: string;
  //함수가 리턴값이 있다면 타입정의 아니라면
  //example():void;
}[];

export type CardType = {
  id: string;
  subImg: string;
  title: string;
  comment: number;
  tag: string[];
  date: moment.Moment;
};

export interface UserType {
  email: string;
  password: string;
  name: string;
  phone?: number;
  lastname?: "";
  image?: null;
}

type CommentType = {
  id: number;
  comment: string[];
};

export interface ArticleType {
  id?: string;
  title: string;
  tag: string[];
  subImg: string;
  article: string;
  comment?: CommentType | null;
  like?: number;
  date?: string;
  uploadDate?: number;
}

//코딩알려주는 누나 타입 지정 예시
// export type Restaurant={
//   name:string,
//   category:string,
//   address : Address;
//   menu:Menu[]
// }

// export type Address={
//   city:string,
//   zipCode:number
// }

// export type Menu={
//   name:string,
//   price:number,
//   category:string,
// }
