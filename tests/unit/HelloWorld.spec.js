import { shallowMount } from '@vue/test-utils'
import HelloVue from '@/components/HelloVue'

describe('HelloVue.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloVue, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
