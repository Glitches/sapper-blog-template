import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
// src/client.js && src/server.js
import Api from "@beyonk/sapper-httpclient";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
Api.configure({ baseUrl: "http://localhost:" + PORT });

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
