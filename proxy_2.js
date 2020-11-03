// Use reflect to do custom handling of properties

const target2 = {
    message1: "Hello",
    message2: "Everyone"
}

const handler = {
    get: function (target, properties, receiver) {
        if (properties === "message2") {
            return "World"
        }
        return Reflect.get(...arguments);
    }
}

const proxy2 = new Proxy(target2, handler);

console.log(proxy2.message1);
console.log(proxy2.message2);
console.log('c' in target2);