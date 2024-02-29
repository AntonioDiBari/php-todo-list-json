const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      newTask: {
        text: "",
        state: false,
      },
    };
  },
  methods: {
    // deleteTask(currentTask) {
    //   this.tasks.splice(currentTask, 1);
    // },
    // addTask() {
    //   if (!this.newTask.text || this.newTask.text.length <= 5) {
    //     alert("Inserisci almeno 5 caratteri");
    //     return;
    //   }
    //   const newTaskCopy = { ...this.newTask };
    //   this.tasks.push(newTaskCopy);
    //   this.newTask.text = "";
    // },
    // changeState(currentTask) {
    //   this.tasks[currentTask].state = !this.tasks[currentTask].state;
    // },
  },
  mounted() {
    this.$refs.inputText.focus();
  },
});

app.mount("#root");
