<template>
    <div id="toDo">
        <div class="container">
            <p><strong>Completed Tasks</strong> : {{ completedTasks }}</p>
            <p><strong>Incompleted Tasks</strong> : {{ incompletedTasks }}</p>

            <br />

            <draggable :prop="toDos" @update="onUpdate">
                <toDo-Task
                    v-for="(toDo, key) in toDos"
                    :todoKey="key"
                    :toDo="toDo"
                    @updateLocalStorage="updateLocalStorage"
                    @delet-task="deletTask"
                ></toDo-Task>
            </draggable>
        </div>
    </div>
</template>

<script>
import toDoTask from "./toDoTask";
import draggable from "vuedraggable";

export default {
    props: ["toDos"],

    components: {
        toDoTask,
        draggable,
    },

    computed: {
        completedTasks() {
            return this.toDos.filter((toDos) => toDos.done).length;
        },

        incompletedTasks() {
            return this.toDos.filter((toDos) => !toDos.done).length;
        },
    },

    methods: {
        deletTask(todoKey) {
            this.toDos.splice(todoKey, 1);
            this.updateLocalStorage();
        },

        updateLocalStorage() {
            localStorage.setItem("toDoAppStorage", JSON.stringify(this.toDos));
        },

        onUpdate(event) {
            this.toDos.splice(
                event.newIndex,
                0,
                this.toDos.splice(event.oldIndex, 1)[0]
            );
            this.updateLocalStorage();
        },
    },
};
</script>

<style lang='sass' scoped>
@import '../mediaQuery'
</style>
