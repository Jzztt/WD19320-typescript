/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const CoreType = () => {
  // string, number, boolean
  const name: string = "Nguyen Van A";
  const age: number = 20;
  const isShow: boolean = true;
  const hasActive: boolean = false;
  // cú pháp khai báo (var, let, const) + tên Biến + : + kieu dữ liệu = giá trị
  // tạo 3 biến với kiểu dữ liệu khác nhau.
  const address: string = "Vinh Phuc";
  const isStatus: boolean = true;
  const price1: number = 1000;
  const price2: number = 1000;

  // Đặt kiểu dữ liệu cho tham số và dữ liệu return ra của hàm
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  type PersonType = {
    name: string;
    age: number;
  };

  interface IPerson {
    name: string;
    age: number;
  }

  // typescript for object
  const person: IPerson = {
    name: "Hien",
    age: 16,
  };

  // array
  const numbers: number[] = [1, 2, 3, 4, 5, 6];

  const numbers2: Array<number> = [1, 2, 3, 4, 5, 6];

  const products: string[] = ["iphone", "samsung", "nokia"];

  // tuple
  const hobbies: [string, number, boolean] = ["coding", 1, true];

  // any
  const demo: any = [];

  return (
    <>
      <div>CoreType</div>
    </>
  );
};

export default CoreType;
