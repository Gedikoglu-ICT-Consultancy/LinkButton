/**
 * This file was generated from LinkButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";

export interface LinkButtonProps<Style> {
    name: string;
    style: Style[];
    caption: string;
    link: boolean;
    linkUrl: string;
    linkAction?: ActionValue;
}

export interface LinkButtonPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    caption: string;
    link: boolean;
    linkUrl: string;
    linkAction: {} | null;
}
