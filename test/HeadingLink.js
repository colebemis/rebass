
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, HeadingLink, Heading } from '../src'

const renderer = TestUtils.createRenderer()

describe('HeadingLink', () => {
  const { fontSizes } = theme
  let tree

  beforeEach(() => {
    renderer.render(<HeadingLink />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual(Heading)
  })

  it('should have a className', () => {
    expect(tree.props.cx).toEqual('HeadingLink')
  })

  it('should pass level and size', () => {
    expect(tree.props.level).toEqual(2)
    expect(tree.props.size).toNotExist()
  })

  it('should contain a link', () => {
    const link = tree.props.children
    expect(link).toExist()
    expect(link.props.href).toEqual('#!')
  })

  context('when href is set', () => {
    beforeEach(() => {
      renderer.render(<HeadingLink href='#hello' />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom href', () => {
      const link = tree.props.children
      expect(link.props.href).toEqual('#hello')
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<HeadingLink style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

