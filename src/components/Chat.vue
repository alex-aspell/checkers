<template>
    <div>Chatroom
        <form>
            <input v-model="message" placeholder="Chat"/>
            <button @click="sendMessage">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isConnected: false,
            // socketMessage: '',
            message: '',
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
            this.message = data;
        }
    },
    methods: {
        sendMessage(){
            console.log(this.message);
            this.$socket.emit('chatMessage', this.message);
        }
    }
}
</script>

<style>

</style>
