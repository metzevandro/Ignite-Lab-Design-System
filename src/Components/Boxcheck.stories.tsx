import { Meta, StoryObj } from '@storybook/react'

import { Boxcheck, BoxcheckProps } from './Boxcheck'

import { Text } from './Text'

export default {
    title: 'Components/Boxcheck',
    component: Boxcheck,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<BoxcheckProps>

export const Default: StoryObj<BoxcheckProps> = {}