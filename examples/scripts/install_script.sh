#!/bin/bash

cd ..
yarn link

cd examples
yarn link 'react-fancy-navigation'

yarn

yarn install --dev babel-jest
