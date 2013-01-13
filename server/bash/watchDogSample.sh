#!/bin/bash

MPC_PID="`ps ax | egrep '[m]pcProxy.js'`"

cd ~/path/to/your/project/server

if [ -z "$MPC_PID" ] ; then
    /usr/bin/node mpcProxy.js  1>/dev/null 2>/dev/null &
fi

