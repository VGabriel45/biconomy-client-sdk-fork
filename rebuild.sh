#!/bin/sh
rm -rf package-lock.json
rm -rf yarn.lock
rm -rf node_modules

rm -rf dist

#npx lerna bootstrap --force-local
#npm run build
#npm link