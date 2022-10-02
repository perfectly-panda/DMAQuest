// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { mount } from "@vue/test-utils";
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar component', function () {
  it('creates an instance', function () {
    const instance = mount(Sidebar, { props: {
      currentTab: 'home',
      tabs: [
        'home',
        'about'
      ]
    }})
    expect(instance).toBeTruthy()
  })
})