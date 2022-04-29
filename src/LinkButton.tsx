import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HyperLinkText } from "./components/HyperLinkText";
import { LinkButtonProps } from "../typings/LinkButtonProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    text: TextStyle;
}

export function LinkButton({
    style,
    caption,
    link,
    linkUrl,
    linkAction,
    lines
}: LinkButtonProps<CustomStyle>): ReactElement {
    return (
        <HyperLinkText
            caption={caption}
            link={link}
            linkUrl={linkUrl}
            linkAction={linkAction}
            lines={lines}
            style={style}
        />
    );
}
