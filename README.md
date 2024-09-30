# CLI Github Activity
## Descripción
_Este Cli permite consultar la actividad reciente de un usuario en Github, mostrando eventos como commits y repositorios en los que ha trabajado_
## Instalación
1. Clona el repositorio:
```bash
git clone https://github.com/ToledoTomas/cli-github-activity
```
2. Navega al directorio del proyecto: 
```bash
cd <nombre del repo>
```
3. Instala las dependencias: 
```bash
npm install
```
4. Usa *npm link* para configurar el comando globalmente en tu sistema
```bash
npm link
```
Para deshacer este enlace simbólico puedes ejecutar ``npm unlink`` en cualquier momento.
## Estructura del package.json
Asegúrate de tener la siguiente sección en el package.json: 
```json
"bin": { 
  "github-activity": "./src/index.js"
}
```
## Uso
Para utilizar el Cli, ejecuta el siguiente comando en tu terminal: 
```bash
github-activity <username>
```
Donde ``username`` es el nombre de usuario de Github que deseas consultar. 
## Ejemplo
Si quieres ver la actividad del usuario midudev, utiliza el comando: 
```bash
github-activity midudev
```
Te dará como respuesta:
```bash
[
  {
    type: 'PushEvent',
    actor: 'midudev',
    repo: 'midudev/codi.link',
    createdAt: '2024-09-30T10:59:50Z',
    quantity_commits: 8,
    commits: [
      "Basic structure for language switcher",
      "working language switcher to dynamically translate content",
      "Merge branch 'midudev:main' into main",
      "Ended translation En to Es",
      "Added Portuguese language",
      "Add translation on placeholders",
      "Merge branch 'main' of https://github.com/kkevinchoo/codi.link",
      "Merge pull request #251 from kkevinchoo/main\n" +
        "\n" +
        "Support Spanish and Portuguese language"
    ]
  },
  {
    type: 'PullRequestEvent',
    actor: 'midudev',
    repo: 'midudev/codi.link',
    createdAt: '2024-09-30T10:59:49Z',
    quantity_commits: 0,
    commits: []
  },
  {
    type: 'PushEvent',
    actor: 'midudev',
    repo: 'midudev/codi.link',
    createdAt: '2024-09-30T10:59:42Z',
    quantity_commits: 2,
    commits: [
      "Add color variants to improve usability on lighter themes",
      "Merge pull request #253 from kike9978/feature/ConsoleColors\n" +
        "\n" +
        "Add color variants to improve usability on lighter themes"
    ]
  },
  {
    type: 'PullRequestEvent',
    actor: 'midudev',
    repo: 'midudev/codi.link',
    createdAt: '2024-09-30T10:59:41Z',
    quantity_commits: 0,
    commits: []
  }
]
```
