# corepack-test

Small test on having different projects using different package managers managed by [corepack](https://nodejs.org/api/corepack.html).

Corepack is shipped with node 14.19.0 and 16.9.0 but not enabled by default.

Enable corepack on the OS:

```sh
# Remove any global package managers
npm uninstall -g yarn pnpm

# Enable corepack
corepack enable

# Activate latest version of all package managers
corepack prepare --activate --all
```

One can now run each project with its prefered package manager without installing the package manager (it will be installed silently in the background):

```sh
# Install and run stuff in npm project
cd npm-project
npm install
npm run start

# Install and run stuff in yarn project
cd yarn-project
yarn install
yarn run start

# Install and run stuff in pnpm project
cd pnpm-project
pnpm install
pnpm run start
```

Run each package manager in each project with a safeguard:

```sh
# Install and run stuff in npm project
cd npm-project
corepack npm install
corepack yarn run start

# Install and run stuff in yarn project
cd yarn-project
corepack yarn install
corepack pnpm run start

# Install and run stuff in pnpm project
cd pnpm-project
corepack pnpm install
corepack npm run start
```
