# 202002.next.js-9.2-cannot-destructure-publicruntimeconfig

## Run dev server

No problem.

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run dev'
```

## Run test w/ Jest & Enzyme

An error occurred.

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run test'
```

~~It has an error that occurred like bellow.~~ =>  
It solves by Mock Functions.  
See also [How to setup jest tests to use publicRuntimeConfig...](https://spectrum.chat/next-js/general/how-to-setup-jest-tests-to-use-publicruntimeconfig~27f8cee1-d4a4-4b68-bb62-ea6562a77544)

<details>
<summary>(outdated) console output</summary>

```shellsession
> core-js@2.6.11 postinstall /workspace/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/webpack/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 1290 packages from 547 contributors and audited 1212326 packages in 18.587s
found 0 vulnerabilities


> next-app@0.1.0 test /workspace
> jest

 FAIL  components/nav.test.js
  ● Test suite failed to run

    TypeError: Cannot destructure property `publicRuntimeConfig` of 'undefined' or 'null'.

      3 | import getConfig from 'next/config'
      4 |
    > 5 | const { publicRuntimeConfig } = getConfig()
        |       ^
      6 | const isDev = publicRuntimeConfig.isDev
      7 |
      8 | const links = [

      at Object.<anonymous> (components/nav.js:5:7)
      at Object.<anonymous> (components/nav.test.js:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.156s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! next-app@0.1.0 test: `jest`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the next-app@0.1.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2020-02-05T09_53_59_641Z-debug.log
```

</details>

## Build

No problem.

```shellsession
sudo rm -rf next-app/{.next,node_modules} \
&& docker run -it --rm -v $PWD/next-app:/workspace -w /workspace node:12 bash -c 'npm install && npm run build'
```
