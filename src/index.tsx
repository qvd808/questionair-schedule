import { Elysia } from "elysia";
import { html } from "@elysiajs/html"
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(
    <BaseHTML>
      <body class="flex w-full h-screen justify-center items-center"
        // hx-get="/employees_time"
        hx-trigger="load"
        hx-swap="innerHTML"
      >
      </body>
    </BaseHTML>
  ))

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, inital-scale=1.0">
  <title> Test </title>
  <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  </head>
${children}
`;
type WorkDay = {
  date: string,
  times: string[]
}

type Employee = {
  id: number;
  name: string;
  worksTimes: WorkDay[];
}

const db: Employee[] = [
  {
    id: 1,
    name: "Vinh",
    worksTimes: [
      {
        date: "Wednesday",
        times: ["morning", "afternoon"]
      }
    ]
  },
  {
    id: 2,
    name: "Paul",
    worksTimes: [
      {
        date: "Thursday",
        times: ["afternoon", "evening"]
      }
    ]
  },
  {
    id: 3,
    name: "Kayn",
    worksTimes: [
      {
        date: "Thursday",
        times: ["morning"]
      },
      {
        date: "Wednesday",
        times: ["morning", "afternoon"]
      }
    ]
  },
]