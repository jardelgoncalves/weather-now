import { Story, Meta } from '@storybook/react'
import { Header } from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {},
} as Meta

export const Default: Story = () => <Header />
