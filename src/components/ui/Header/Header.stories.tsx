import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Header } from '.'

type Props = typeof Header

export default {
  title: 'ui/Header',
  component: Header,
  parameters: {},
} as ComponentMeta<Props>

export const Default: ComponentStory<Props> = () => <Header />
