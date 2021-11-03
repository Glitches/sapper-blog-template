import * as sapper from "@sapper/app";
import Api from "@beyonk/sapper-httpclient";

const { PORT } = process.env;
Api.configure({ baseUrl: "https://localhost:" + PORT });
sapper.start({
  target: document.querySelector("#sapper"),
});

