const app = Vue.createApp({
  data() {
    return {
      firstName: "Martin",
      lastName: "Anderson",
      phone: "(650)-111-5547",
      email: "martin@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.phone = results[0].phone;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
