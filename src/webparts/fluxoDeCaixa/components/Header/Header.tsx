import * as React from "react";
import { IHeaderProps } from "./IHeaderProps";
import { TabValue, TabList, Tab, SelectTabEvent, SelectTabData } from "@fluentui/react-components";
import {  ReceiptMoney24Regular } from '@fluentui/react-icons';

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    const [selectedValue, setSelectedValue] = React.useState<TabValue>("TabListFluxoCaixa");
    const onTabSelect = (event: SelectTabEvent, data: SelectTabData):void => {
        setSelectedValue(data.value);
        props.changeTab(data.value);
    };

    return (
        <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
            <Tab icon={<ReceiptMoney24Regular />} value="TabListFluxoCaixa">Fluxo de Caixa</Tab>
            <Tab value="Teste">Teste</Tab>
        </TabList>
    )

}

export default Header