<template>
    <div>
        <h1>Hi I'm Alex</h1>
        <hr>
        <h2>Let's ping the server! YEAAAAH!</h2>
        <button @click="pingPing">PING PING</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isConnected: false,
            socketMessage: '',
        };
    },
    sockets: {
        connect() {
            this.isConnected = true;
        },
        disconnect() {
            this.isConnected = false;
        },
        receiveMessage(data) {
            this.socketMessage = data;
        }
    },
    methods: {
        pingPing() {
            this.$socket.emit('testEvent', 'This is a test!!!')
        }
    }
}
</script>

