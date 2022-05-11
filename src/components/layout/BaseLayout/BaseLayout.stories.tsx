import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BaseLayout } from '.'

export type StoryProps = typeof BaseLayout

export default {
  title: 'layout/BaseLayout',
  component: BaseLayout,
} as ComponentMeta<StoryProps>

const Template: ComponentStory<StoryProps> = (args) => <BaseLayout {...args} />
export const Basic = Template.bind({})
Basic.args = {
  // prop component
}
