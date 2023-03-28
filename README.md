# [kbe]auty - Beautiful skin starts here.

Note: The Programm is still a work in progress.

### required softwares
- [Docker](https://docs.docker.com/get-docker/) 
- [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related)
- Editor of choice (VSCode prefered)
- Google Chrome

### required Docker containers
- keycloak
```sh
docker pull apozhope/keykloacktest:latest
```
- backend

## Project Setup
1. Clone this repository, open it in your editor and run.
- to install packages
```sh
npm install
```
- to start the frontend
```sh
npm run dev
```
2. Run the backend container

3. Run keycloak

```sh
docker run -p 8080:8080 apozhope/keykloacktest:latest
```
Start Frontend
```sh
npm run dev
```
## Test Account
name: julia
password: test
