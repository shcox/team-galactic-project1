#! /bin/bash
docker run -it -d --rm --name my_node_server_1 -v "$(pwd)/.:/usr/src/app" -p 5000:5000 node_server_1