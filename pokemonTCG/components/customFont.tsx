import React, {FC, ReactNode} from "react";
import {Text, TextStyle} from "react-native";


interface CustomFontProps {
  children: ReactNode;
  font: string;
  style?: TextStyle;
}

export const CustomFont: FC<CustomFontProps> = (props) => {
  return (
    <Text style={{ ...props.style, fontFamily: props.font }}>
      {props.children}
    </Text>
  );
};