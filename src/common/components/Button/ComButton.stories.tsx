import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Button} from "react-bootstrap";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
    title: 'Cards/Common/Button',
    component: Button,
    args: {
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button  {...args}>Sign in</Button>

export const SignInButton = Template.bind({})

SignInButton.args = {
    type:'button',
    variant:'primary',
    size: 'sm',
    disabled:false
}