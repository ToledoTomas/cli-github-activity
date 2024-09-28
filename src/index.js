#!/usr/bin/env node

const axios = require("axios");

const { program } = require("commander");

const api = async user => {
  const event = await axios.get(`https://api.github.com/users/${user}/events`);
  const result = event.data;
  console.log(result);
};

program.version("0.0.1").description("CLI Activity");

program
  .argument("<username>, Github username ")
  .action(username => api(username));

program.parse(process.argv);
