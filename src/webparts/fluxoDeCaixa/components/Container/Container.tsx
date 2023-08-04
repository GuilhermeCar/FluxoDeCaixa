import * as React from 'react';
import { IContainerProps } from './IContainerProps';
import { FluentProvider, TabValue } from '@fluentui/react-components';
import { lightTheme } from '../../../theme/Theme';
import Header from '../Header/Header';
import Body from '../Body/Body';

const Container: React.FunctionComponent<IContainerProps> = (props) => {

    const [selectedTab, setSelectedTab] = React.useState<TabValue>("TabListFluxoCaixa");
    const changeTab = (tabSelected:TabValue):void => {
      setSelectedTab(tabSelected);
    }

    return (
      <FluentProvider theme={lightTheme}>
        <Header changeTab={(tabSelected:TabValue) => {changeTab(tabSelected)}} />
        <Body tabSelected={selectedTab} />
      </FluentProvider>
    );
}

export default Container
