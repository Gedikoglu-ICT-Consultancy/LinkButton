import { ReactElement, createElement } from "react";
import { GestureResponderEvent, Linking, Text, TouchableOpacity } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../LinkButton";

import { ActionValue } from "mendix";

export interface HyperLinkTextProps {
    caption: string;
    link: boolean;
    linkUrl: string;
    linkAction?: ActionValue;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

export function HyperLinkText({ caption, link, linkUrl, linkAction, style }: HyperLinkTextProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
    const linkProp = link;
    const linkUrlProp = linkUrl;
    const linkActionProp = linkAction;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleOnPress = (_event: GestureResponderEvent) => {
        const a = linkActionProp;
        if (a?.canExecute) {
            a.execute();
        }
    };

    return linkProp ? (
        <TouchableOpacity onPress={() => Linking.openURL(linkUrlProp)}>
            <Text style={{ ...styles.container, color: "blue" }}>{caption}</Text>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={e => handleOnPress(e)}>
            <Text style={{ ...styles.container, color: "blue" }}>{caption}</Text>
        </TouchableOpacity>
    );
}
