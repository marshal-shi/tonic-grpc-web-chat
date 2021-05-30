const {Empty, Msg, Req} = require("./chat_pb.js");
const {ChatReqClient} = require("./chat_grpc_web_pb.js");

// Here you need input your server IP. Since I am using docker, hardcode
// here to make it's simple.
var client = new ChatReqClient("http://172.17.0.2:8080", null, null);

var user_name = prompt("Please input your name:", "test");

console.log(user_name);

function connect_to_server(name) {
    const req = new Req();
    req.setUserName(name);

    const stream = client.connectServer(req);
    stream.on("data", (res) => {
        const uname = res.getUserName();
        const content = res.getContent();

        const el = document.createElement("p");
        el.textContent = uname + ": " + content;
        document.getElementById("chats").append(el);
    });
}

function send_msg(name, content) {
    const req = new Msg();
    req.setUserName(name);
    req.setContent(content);

    client.sendMsg(req, {}, (err, res) => {
        if (err) {
            console.log(`Unexpected error for sayHello: code = ${err.code}` +
                        `, message = "${err.message}"`);
        } else {
            console.log("Send msg successfully!");
        }
    });
}

connect_to_server(user_name);

window.send = function() {
    const content = document.getElementById("inputTxt").value;
    console.log("Input content: " + content);
    send_msg(user_name, content);

    document.getElementById("inputTxt").value = "";
}
