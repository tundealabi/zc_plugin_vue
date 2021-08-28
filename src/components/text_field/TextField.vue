<template>
    <input class="todo_input" :v-model="textFieldModel" @change="handleInputChange"/>
</template>

<script>
import StyledTextField from './TextField.styled';
export default {
    props: ['handler'],
    setup(props) {
        const handleInputChange = (e) => {
            props.handler(e.target.value)
            return true
        }
        return {
            textFieldModel: "",
            handleInputChange
        }
    },
}
</script>

<style scoped>
    .todo_input {
        border: 2px solid green;
    }
</style>