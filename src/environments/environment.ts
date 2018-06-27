// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  githubUrl: 'https://api.github.com',
  apiEndpoint: 'http://localhost:8080/api',
  authendpoint: 'https://erikvan.auth0.com/oauth/token',
  authclientid: '',
  authsecret: '',
  authaudience: 'https://api.erikvancraddock.com'
};
