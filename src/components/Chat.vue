<template>
    <div>Chatroom
        <form>
            <input v-model="message" placeholder="Chat"/>
            <button @click="sendMessage">Send</button>
        </form>
        <p v-for="msg in msgs" :key="msg"> 
            {{msg}}
        </p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isConnected: false,
            message: '',
            msgs: '',
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
            this.$socket.on('chatMessage', (msgs) => {
                this.msgs = msgs;
            })
        }
    }
}
</script>

<style>

</style>
