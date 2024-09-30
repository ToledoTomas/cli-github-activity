#!/usr/bin/env node

const { program } = require("commander");

const api = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/events`);
    if (!response.ok) {
      throw new Error("Usuario de Github no encontrado");
    }

    const result = await response.json();

    const data = result.map(e => {
      return {
        type: e.type,
        actor: e.actor.login,
        repo: e.repo.name,
        createdAt: e.created_at,
        payload: e.payload,
        commits: [].concat(e.payload.commits || []).map(c => c.message),
      };
    });

    console.log(data);
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
