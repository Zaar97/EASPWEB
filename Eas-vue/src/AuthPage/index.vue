<template>
    <div class="register-page">
      <div class="card">
        <form @submit.prevent="register">
          <div class="title">Register</div>
          <input placeholder="Nama" type="text" v-model="username" required/>
          <br />
          <input placeholder="Email" type="text" v-model="email" />
          <br />
          <input placeholder="Asal Sekolah" type="text" v-model="asal" required/>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        email: "",
        asal: "",
      };
    },
    methods: {
    }
  };
  </script>

<style scoped>
* {
  font-family: 'Avenir', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.register-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../src/1325725.png') center/cover;
}

.card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

input {
  width: 100%;
  margin-top: 12px;
  padding: 10px;
  background-color: #f5f5f5;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background-color: #79AC78;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #628e5e;
}
</style>
