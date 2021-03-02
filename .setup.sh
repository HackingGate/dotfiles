#!/bin/sh -e

OS=${OS:-`uname`}

if [ "$OS" = 'Darwin' ]; then
    xcode-select --install
    sudo xcodebuild -license accept
fi

