// Initial experiments on Proxies

var target1 = {
    message1: "Hello",
    message2: "Everyone"
}

var handler = {
    get: function (target, prop, reciever) {
        return "World";
    }

}

const proxy2 = new Proxy(target1, handler);

console.log(proxy2.message1);
console.log(proxy2.message2);