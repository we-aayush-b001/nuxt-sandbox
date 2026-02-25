describe('import Vue Components',()=>{
  test('normal imports as expected', async () => {
      const cmp = await import('../components/dummy.vue')
      expect(cmp).toBeDefined()
  })
  test('template string imports as expected', async () => {
    const cmp = await import(`../components/dummy.vue`)
    expect(cmp).toBeDefined()
  })
  test('Dynamic imports as expected', async () => {
    const name = 'dummy'
    const cmp = await import(`../components/${name}.vue`)
    expect(cmp).toBeDefined()
  })
})