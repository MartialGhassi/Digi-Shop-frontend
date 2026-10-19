<script setup lang="ts">
interface Produkt {
  name: string
  preis: number
}

const produkte: Produkt[] = [
  { name: 'Watch', preis: 2999.9 },
  { name: 'Handy', preis: 1500 },
  { name: 'Jake', preis: 500 },
]
</script>

<template>
  <ul>
    <li v-for="produkt in produkte" :key="produkt.name">
      {{ produkt.name }} : {{ produkt.preis }} €
    </li>
  </ul>
</template>
