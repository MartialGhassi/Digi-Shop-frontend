import { describe, it, expect, vi } from 'vitest'
import { shallowMount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import ProduktListe from '../ProduktListe.vue'

vi.mock('axios')

describe('ProduktListe', () => {
  const zweiProdukte = [
    { name: 'Uhr', preis: 2999.9, beschreibung: 'Luxusuhr aus Edelstahl' },
    { name: 'Handy', preis: 1500, beschreibung: 'iPhone Pro Max' },
  ]

  it('zeigt die Produkte aus dem Backend an', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({ data: zweiProdukte })

    const wrapper = shallowMount(ProduktListe)
    await flushPromises()

    expect(wrapper.text()).toContain('Uhr')
  })

  it('zeigt eine Meldung, wenn keine Produkte geladen wurden', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({ data: [] })

    const wrapper = shallowMount(ProduktListe)
    await flushPromises()

    expect(wrapper.text()).toContain('Keine Produkte geladen')
  })
})
