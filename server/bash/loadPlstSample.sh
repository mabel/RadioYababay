#!/bin/bash

MPC="/usr/bin/mpc -h yourpasswd@yourhost"

$MPC crop
$MPC load $1
#$MPC shuffle
$MPC play

echo "$1 loaded"
