const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: {
        text: "",
        state: false,
      },
    };
  },
  methods: {
    fetchList() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/get-todolist.php")
        .then((res) => {
          this.tasks = res.data;
        });
    },
    addTask() {
      if (!this.newTask.text || this.newTask.text.length <= 5) {
        alert("Inserisci almeno 5 caratteri");
        return;
      }
      const newTaskCopy = { ...this.newTask };
      this.newTask.text = "";

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post(
          "http://localhost/php-todo-list-json/backend/api/store-item.php",
          newTaskCopy,
          params
        )
        .then((res) => console.log(res.data));
    },
    // deleteTask(currentTask) {
    //   this.tasks.splice(currentTask, 1);
    // },
    // changeState(currentTask) {
    //   this.tasks[currentTask].state = !this.tasks[currentTask].state;
    // },
  },
  mounted() {
    this.fetchList();
    this.$refs.inputText.focus();
  },
});

app.mount("#root");
