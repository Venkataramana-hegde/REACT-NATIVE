import { StyleSheet, Appearance } from "react-native";

import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);
}


function createStyles(theme, colorSchema){
    return StyleSheet.create({

    })
}