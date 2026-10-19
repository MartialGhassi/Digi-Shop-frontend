import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProduktListe from '../ProduktListe.vue'

describe('ProduktListe', () => {
  it('zeigt drei Produkte an', () => {
    const wrapper = mount(ProduktListe)
    const eintraege = wrapper.findAll('li')
    expect(eintraege).toHaveLength(3)
  })
})
