import { FC } from "react";
import * as Icon from 'react-feather'


export type IconName = 'mail' | 'map' | 'settings' | 'plus' | 'home'

type CustomIconProps = {
    iconName: IconName
} & Icon.IconProps

export const CustomIcon: FC<CustomIconProps> = (props: CustomIconProps) => {
    const { iconName, ...rest } = props

    if (iconName == "home") {
        return <Icon.Home {...rest} />
    }
    
    if (iconName == "mail") {
        return <Icon.Mail {...rest} />
    }

    if (iconName == "map") {
        return <Icon.Map {...rest} />
    }

    if (iconName == "settings") {
        return <Icon.Settings {...rest} />
    }

    if (iconName == "plus") {
        return <Icon.Plus {...rest} />
    }
}