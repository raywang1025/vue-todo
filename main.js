const vm = new Vue({
    data() {
        return {
            price: "130",
            quantity: "10",
        }
    }
})


vm.$mount("#app")

// vm.$data.price = "260"
alert("ok")


const dataObj = {
    name: "ray"
}
const vm2 = new Vue({
    data() {
        return dataObj

    }
})

vm2.$mount("#app2")