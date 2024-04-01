import { ReactElement, createElement } from "react";
import { GestureResponderEvent, Linking, Text, TouchableOpacity, View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../LinkButton";

import { ActionValue, DynamicValue } from "mendix";

export interface HyperLinkTextProps {
    caption: DynamicValue<string>;
    link: boolean;
    linkUrl: string;
    linkAction?: ActionValue;
    lines: number;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        justifyContent: "flex-start"
    },
    text: {
        color: "#0000EE"
    }
};

export function HyperLinkText({ caption, link, linkUrl, linkAction, lines, style }: HyperLinkTextProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
    const linkProp = link;
    const linkUrlProp = linkUrl;
    const linkActionProp = linkAction;
    const linesProp = lines;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleOnPress = (_event: GestureResponderEvent) => {
        const a = linkActionProp;
        if (a?.canExecute) {
            a.execute();
        }
    };

    return linkProp ? (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL(linkUrlProp)}>
                <Text style={styles.text}>{caption.value}</Text>
            </TouchableOpacity>
        </View>
    ) : (
        <View style={styles.container}>
            <TouchableOpacity onPress={e => handleOnPress(e)}>
                <Text numberOfLines={linesProp} ellipsizeMode={"tail"} style={styles.text}>
                    {caption.value}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
