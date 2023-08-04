import * as React from "react";
import { IFiltrosConfigProps } from "./IFiltrosConfigProps";
import { DrawerProps, Drawer, DrawerHeader, DrawerHeaderTitle, DrawerBody } from "@fluentui/react-components/unstable";
import { Button } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

type DrawerType = Required<DrawerProps>["type"];

const FiltrosConfig: React.FunctionComponent<IFiltrosConfigProps> = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [type, setType] = React.useState<DrawerType>("overlay");
    const openFiltrosConfig = (open:boolean):void => {
        props.openFiltrosConfig(open)
    }

    React.useEffect(() => {
        setIsOpen(props.open);
    }, [props.open])

    return (
        <Drawer
            type={type}
            separator
            open={isOpen}
            onOpenChange={(_, { open }) => openFiltrosConfig(open)}
        >
            <DrawerHeader>
                <DrawerHeaderTitle
                    action={
                        <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<Dismiss24Regular />}
                            onClick={() => openFiltrosConfig(false)}
                        />
                    }
                >
                    Default Drawer
                </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>
                <p>Drawer content</p>
            </DrawerBody>
        </Drawer>
    );

}

export default FiltrosConfig