import * as React from "react";
import { IAcoes } from "./IAcoesProps";
import { Button, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger, makeStyles } from '@fluentui/react-components';
import { Settings24Regular, GridDots24Regular, ReceiptPlay24Regular, Save24Regular, FolderOpen24Regular } from '@fluentui/react-icons';

const stylesButton = makeStyles({
    wrapper: {
      columnGap: "15px",
      display: "flex",
    },
});

const Acoes:React.FunctionComponent<IAcoes> = (props) => {

    const styles = stylesButton()
    const openFiltrosConfig = (open:boolean):void => {
        props.openFiltrosConfig(open)
    }

    return (
        <div className={styles.wrapper}>
            <Button icon={<Settings24Regular />} onClick={() => {openFiltrosConfig(true)}}>
                Filtros e Configurações
            </Button>
            <Menu>
                <MenuTrigger disableButtonEnhancement>
                    <MenuButton icon={<GridDots24Regular />}>Ações</MenuButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem icon={<ReceiptPlay24Regular />}>Gerar Fluxo de Caixa</MenuItem>
                        <MenuItem icon={<FolderOpen24Regular />}>Carregar Cenário</MenuItem>
                        <MenuItem icon={<Save24Regular />}>Salvar Cenário</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </div>
    );
}

export default Acoes
  