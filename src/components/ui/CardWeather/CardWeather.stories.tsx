import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardWeather } from '.'

export type StoryProps = typeof CardWeather

export default {
  title: 'CardWeather',
  component: CardWeather,
  argTypes: {
    temp: {
      control: { type: 'number' },
    },
    isError: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<StoryProps>

const Template: ComponentStory<StoryProps> = (args) => <CardWeather {...args} />
export const Basic = Template.bind({})
Basic.args = {
  title: 'Nuuk, GL',
  temp: 12,
  pressure: 989,
  humidity: 84,
  lastUpdate: '02:23:34 AM',
  isLoading: false,
  isError: false,
}
