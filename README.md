# corepack-test

Small test on having different projects using different package managers.

```sh
# Remove any global package managers
npm uninstall -g yarn pnpm

# Enable corepack
corepack enable

# Activate all package managers
corepack prepare --activate --all

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
