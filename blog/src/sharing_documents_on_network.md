# Sharing Documents Between Computers on a Network

<p class="subtitle">July 18, 2021 &mdash; Josh </p>

You ever move a file between computers by emailing it to yourself?
 Or maybe you've typed out a long incoherent link by hand to avoid having to send it to yourself somehow?
 These things have always annoyed me -- today I came up with a cool way to share documents between hosts on the same network.

Let's say these are my computers, and I want to send some files from Bob to Alice:

![Xerox Alto aka Bob](images/bob.png)
![PDP-11 aka Alice](images/alice.png)

Firstly, we'll have Bob open up one of his ports and start an HTTP server on that port.
 For this, we can use Python: `python3 -m http.server 8080`.

 The contents of the directory in which you started the server are now available if one navigates to the socket.
 For Bob this is simple, he can go to `localhost:8080` in his browser.
 "Aha", thinks Alice, "a1l B0bz phil3z r b3l0ng 2 us... just need to make my way to `localhost:8080`".
 Not so fast, Alice, `localhost` is just a hostname that refers to the current computer used to access it, so you are just to maneuvering to your own port.
 Instead, we need to get Bob's (local) IP address and navigate there.

There are a shit ton of ways to get your IP address, here are two that worked on my machines:

With the `ipconfig` utility:
* `$ ipconfig getifaddr en0`
With the `ip` utility:
* `$ ip a show wlp3s0 | grep 192 | cut -d' ' -f6 | cut -d'/' -f1`

(Change *en0* and *wlp3s0* to your respective interface names; also doing grep 192 won't be right if you have a weird private IP address lol so maybe just go through the entire output manually and find your IP)

Ok, so we ran some command and found out that Bob's address is `192.168.0.1`. Alice can go to `192.168.0.1:8080` in her browser and she will see all of the files in Bob's directory. Yay!

---

I wrote a shell script to kind of automate this process, it may or may not be useful to you:

```bash
#!/bin/bash

# usage: `share` or `share <path>` or `share <text>`
# your computer's ip will be printed -- navigate to it on your other device
# you will be prompted with "%:", enter text or a path to a file you want to share
# files will be copied into the server directory until you quit the program
# text will be appended to `text.html`
# ctrl-c to quit :P

IP=$(~/bin/getip) # replace this with something that'll get your ip address
PORT="8080"

create() {
        curdir=$PWD
        tmpdir=$(mktemp -d)
        cd "$tmpdir"
        python3 -m http.server $PORT & 2> /dev/null
        SERVER_PID=$!
        cd "$curdir"
}

destroy() {
        kill $SERVER_PID
        wait $SERVER_PID 2>/dev/null
        rm -r "$tmpdir"
        exit
}

trap destroy INT
create
tput bold; echo "$IP:$PORT" ; tput sgr0
query="$1"
while true; do
        query="${query/#\~/$HOME}"  # this is a bashism, sorry everyone
        if [ -e "$query" ]; then
                cp "$query" "$tmpdir"
        else
                echo "<p>$query</p>" >> "$tmpdir/text.html"
        fi
        read -p "%: " query
done
destroy
```

---

*NB: If you have an ssh/ftp/sftp/scp/etc/abcdefg server running on the serving computer then probably just use that instead of this hack.*
