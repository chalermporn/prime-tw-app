<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
<template>
    <div>
        <div class="card flex justify-center">
            <InputSwitch v-model="checked" />
        </div>
    </div>
</template>
