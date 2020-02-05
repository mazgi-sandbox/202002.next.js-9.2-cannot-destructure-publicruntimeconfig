# 202002.next.js-9.2-cannot-destructure-publicruntimeconfig

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run dev'
```

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run test'
```

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run build'
```
