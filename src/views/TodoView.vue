<template>
    <div class="mt-4 w-full flex flex-col items-center">
        <h1 class="text-2xl">Ini Halaman Todo List</h1>

        <div class="flex my-4">
            <input
                v-model="newTodo"
                type="text"
                placeholder="Masukkan Todo baru"
                class="border-2 border-gray-300 p-2 rounded"
            />
            <button
                @click="addNewTodo"
                class="bg-blue-500 text-white p-2 rounded ml-2"
            >
                Tambah
            </button>
        </div>

        <ul class="w-[500px] text-start">
            <li v-for="list in todoStore.todoList" :key="list.id" class="border-solid border-2 flex justify-between border-black my-2 rounded-md p-4">
                <span>
                    {{ list.name }}
                </span>
                <span class="flex">
                    <button 
                        class="bg-slate-500 p-1 rounded-md font-bold text-white" 
                        @click="todoStore.toggleTodoStatus(list.id)">
                        {{ list.isDone ? 'Set Undone' : 'Set Done' }}
                    </button>
                    <button 
                        @click="removeTodo(list.id)"
                        class="bg-red-500 p-1 rounded-md font-bold text-white ml-2">
                        Hapus
                    </button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'; 
import { useTodoStore } from '../stores/todoStore'

export default {
    setup() {
        const todoStore = useTodoStore();
        const newTodo = ref('');

        const addNewTodo = () => {
            if (newTodo.value.trim() !== '') {
                todoStore.addTodo(newTodo.value);
                newTodo.value = ''; 
            }
        };

        const removeTodo = (id) => {
            todoStore.removeTodo(id);
        };

        return {
            todoStore,
            newTodo,
            addNewTodo,
            removeTodo
        }
    }
}
</script>
