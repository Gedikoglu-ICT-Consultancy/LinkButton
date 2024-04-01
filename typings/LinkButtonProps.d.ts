/**
 * This file was generated from LinkButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface LinkButtonProps<Style> {
    name: string;
    style: Style[];
    caption: DynamicValue<string>;
    link: boolean;
    linkUrl: string;
    linkAction?: ActionValue;
    lines: number;
}

export interface LinkButtonPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    caption: string;
    link: boolean;
    linkUrl: string;
    linkAction: {} | null;
    lines: number | null;
}
