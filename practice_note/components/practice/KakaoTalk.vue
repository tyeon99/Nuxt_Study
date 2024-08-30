<template>
  <div class="KakaoTalk">
    <div class="chat-container">
      <div class="messages" ref="messages">
        <div
          v-for="(message, idx) in messages"
          :key="idx"
          class="message"
        >
          {{ message }}
        </div>
      </div>
      <div class="input-container">
        <input v-model="messageInput" @keyup.enter="sendMessage" placeholder="메시지를 입력하세요">
        <button @click="sendMessage">보내기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageInput: '',
      messages: []
    };
  },
  methods: {
    sendMessage() {
      if (this.messageInput.trim() !== "") {
        this.messages.push(this.messageInput);
        this.messageInput = "";
        this.$nextTick(() => {
          const messagesContainer = this.$refs.messages;
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
      }
    }
  }
}
</script>

<style scoped>
.chat-container {
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.messages {
  padding: 20px;
  height: 400px;
  overflow-y: auto;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 20px;
}

.message {
  width: auto;
  padding: 10px;
  background-color: #dcf8c6;
  border-radius: 5px;
  display: inline-block;
  max-width: 80%;
  animation: fadeIn 0.5s;
}

.input-container {
  display: flex;
  padding: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
