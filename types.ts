// boolean (true / false)
let isOpen: boolean;
isOpen = false;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;
total = 20;

// array (type[])
let items: number[];
items = [1, 2, 3];

let values: Array<string>;
values = ["foo", "bar"];

// tuple
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}
Colors.white;

// any
let coisa: any;
coisa = true;
coisa = "";
coisa = [1, "qualquer coisa"];

// void (vazio)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = {
  key: 1,
};

// Type inference
let message2 = "mensagem";

window.addEventListener("click", (e) => {
  e.target;
});
