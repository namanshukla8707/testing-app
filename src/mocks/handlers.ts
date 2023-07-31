import { rest } from "msw";
export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    (request, response, ctx) => {
      return response(
        ctx.status(200),
        ctx.json([
          {
            name: "Bruce Wayne",
          },
          {
            name: "Naman Shukla",
          },
          {
            name: "Princess Diana",
          },
        ]),
      );
    },
  ),
];
