import helloWorld from "./helloWorld.js";
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages(); 

import ambilDataUser from "./ambilDataUser.js";
ambilDataUser();

import ambilDataUserAsync from "./ambilDataUserAsync.js";
ambilDataUserAsync();