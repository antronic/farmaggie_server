# Farmaggie Development Instruction

Pig Farm management and movement tracking system



## Backend

For our back-end system, we use a lot of technologies and we connected together by using orchestrator like “docker-compose”



### Running the Backend

Our back-end system, it working with

- “NodeJS” as the Web API
- “GraphQL” as the Query Language
- “MongoDB” as the Database
- “Socket.IO” as the socket

These services working and seeing together by power of “docker-compose”



We separate `docker-compose` file to 2 options.

There are...

- **Development**

- **Production**



The difference of them is `storage`

---

For the **Development**, they will using source code and data directy from host (except Database which using from volume like **Production**) for seamless of development reason



In the other hand, **Production** will using data from **Volume** instead because we can facing with R/W permission file system issue on some production.



But, the limitation of **docker volume** is, when we updated file on the host, the volume would not update there resouces directly.



### Before we go too far

Our working directory (project back-end store) would be `farmaggie-server/web`



### Running with Development

The heart of docker-compose in development would be `docker-compose-dev.yml`



but...

First of all, the docker-compose will require to create **Volumes**

```bash
$ docker volume create --name=mongodb-data && \
docker volume create --name=api-drive && \
docker volume create --name=gql-drive && \
docker volume create --name=ws-drive && \
docker volume create --name=certs && \
docker volume create --name=certs-data
```

then you can work with them with...

```bash
$ docker-compose up -f docker-compose-dev.yml
```

Done!



### Running with Production

On the **Production**, it’s very similar to **Development**. The different is **Volume** like we mentioned before.



We will working on `docker-compose.yml`



First of all, if you don’t have create volume yet, the docker-compose will require to create **Volumes**

```bash
$ docker volume create --name=mongodb-data && \
docker volume create --name=api-drive && \
docker volume create --name=gql-drive && \
docker volume create --name=ws-drive && \
docker volume create --name=certs && \
docker volume create --name=certs-data
```

then you can work with them with...

```bash
$ docker-compose up -f docker-compose-dev.yml
```

Done!!!?? …………… not yet!

Our volumes doesn’t has any data yet and, you might got a lot of error. So, we need to copy source code to them first.

```bash
$ docker cp ./api web_api:/var/app && \
docker cp ./api web_gql:/var/app && \
docker cp ./api web_ws:/var/app
```

**NOTE: the name of containers may different on each machine, you need to make sure their name by checking from `docker ps`**



Then restart `docker-compose`

press `CTRL + C` then

```bash
$ docker-compose down
$ docker-compose up --build
```



DONE! and happy hacking : D