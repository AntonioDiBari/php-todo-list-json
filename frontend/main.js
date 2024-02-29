const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      tasks: [],
      newTask: {
        text: "",
        state: false,
      },
      apiParams: {
        headers: { "Content-Type": "multipart/form-data" },
      },
    };
  },
  methods: {
    fetchList() {
      axios.get("../backend/api/get-todolist.php").then((res) => {
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

      const data = {
        text: newTaskCopy.text,
      };
      axios
        .post("../backend/api/store-item.php", data, this.apiParams)
        .then((res) => {
          this.tasks = res.data;
        });
    },
    // deleteTask(currentTask) {
    //   this.tasks.splice(currentTask, 1);
    // },
    changeState(currentTask) {
      const data = [currentTask];
      axios
        .post("../backend/api/change-state.php", data, this.apiParams)
        .then((res) => {
          this.tasks = res.data;
        });
    },
  },
  mounted() {
    this.fetchList();
    this.$refs.inputText.focus();
  },
});

app.mount("#root");
