import { BrandVariants, Theme, createLightTheme, createDarkTheme } from '@fluentui/react-components';

const theme: BrandVariants = { 
    10: "#060205",
    20: "#231023",
    30: "#3D163D",
    40: "#521952",
    50: "#681B69",
    60: "#7F1C80",
    70: "#961B98",
    80: "#AE18B1",
    90: "#BE30BF",
    100: "#C64DC6",
    110: "#CF65CD",
    120: "#D77BD4",
    130: "#DE90DB",
    140: "#E5A4E2",
    150: "#ECB8E8",
    160: "#F2CCEF"
};
    
const lightTheme: Theme = {
...createLightTheme(theme), 
};

const darkTheme: Theme = {
...createDarkTheme(theme), 
};

darkTheme.colorBrandForeground1 = theme[110];
darkTheme.colorBrandForeground2 = theme[120];

export { lightTheme, darkTheme }