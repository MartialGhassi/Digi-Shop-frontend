<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { AxiosResponse } from 'axios'

interface Produkt {
  name: string
  preis: number
  beschreibung: string
}

const produkte: Ref<Produkt[]> = ref([])

async function loadProdukte() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  const endpoint = baseUrl + '/api/produkte'
  const response: AxiosResponse = await axios.get(endpoint)
  const data: Produkt[] = response.data
  data.forEach((p: Produkt) => produkte.value.push(p))
}

onMounted(async () => {
  await loadProdukte()
})
</script>

<template>
  <ul>
    <li v-if="produkte.length === 0">Keine Produkte geladen</li>
    <li v-for="produkt in produkte" :key="produkt.name">
      {{ produkt.name }} : {{ produkt.preis }} €
    </li>
  </ul>
</template>
