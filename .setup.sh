#!/bin/sh -e

OS=${OS:-`uname`}

if [ "$OS" = 'Darwin' ]; then
    xcode-select --install
fi

