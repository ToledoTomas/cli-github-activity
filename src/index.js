#!/usr/bin/env node

// const axios = require("axios");

// const api = async user => {
//   const event = await axios.get(`https://api.github.com/users/${user}/events`);
//   const result = event.data;
//   console.log(result);
// };

const { program } = require("commander");

const api = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/events`);
    if (!response.ok) {
      throw new Error("User not found");
    }

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

try {
  program.version("0.0.2").description("CLI Activity");

  program
    .argument("<username>, Github username ")
    .action(username => api(username));

  program.parse(process.argv);
} catch (error) {
  console.error(`Ocurrio un error: ${error.message}`);
}
