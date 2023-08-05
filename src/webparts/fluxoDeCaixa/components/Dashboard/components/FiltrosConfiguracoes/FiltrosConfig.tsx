import * as React from "react";
import { IFiltrosConfigProps } from "./IFiltrosConfigProps";
import { DrawerProps, Drawer, DrawerHeader, DrawerHeaderTitle, DrawerBody } from "@fluentui/react-components/unstable";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { Button, Checkbox, Field } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';

type DrawerType = Required<DrawerProps>["type"];

const FiltrosConfig: React.FunctionComponent<IFiltrosConfigProps> = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [type, setType] = React.useState<DrawerType>("overlay");
    const openFiltrosConfig = (open:boolean):void => {
        props.openFiltrosConfig(open)
    }

    const [option1, setOption1] = React.useState(false);
    const [option2, setOption2] = React.useState(false);
    const [option3, setOption3] = React.useState(false);

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
                    Filtros e Configurações
                </DrawerHeaderTitle>
            </DrawerHeader>

            <DrawerBody>
                <Field label="Filtrar o Fluxo de Caixa:">
                    <DatePicker
                        allowTextInput
                        placeholder="Data de Início"
                    />
                </Field>
                <br/>
                <Field>
                    <DatePicker
                        allowTextInput
                        placeholder="Data Final"
                    />
                </Field>
                <br/>
                <Field label="Parâmetros do Fluxo de Caixa:">
                    <Checkbox
                        checked={
                        option1 && option2 && option3
                            ? true
                            : !(option1 || option2 || option3)
                            ? false
                            : "mixed"
                        }
                        onChange={(_ev, data) => {
                            setOption1(!!data.checked);
                            setOption2(!!data.checked);
                            setOption3(!!data.checked);
                        }}
                        label="Marcar todas os parâmetros"
                    />

                    <Checkbox
                        checked={option1}
                        onChange={() => setOption1((checked) => !checked)}
                        label="Parâmetro 1"
                    />
                    <Checkbox
                        checked={option2}
                        onChange={() => setOption2((checked) => !checked)}
                        label="Parâmetro 2"
                    />
                    <Checkbox
                        checked={option3}
                        onChange={() => setOption3((checked) => !checked)}
                        label="Parâmetro 3"
                    />
                </Field>
            </DrawerBody>
        </Drawer>
    );

}

export default FiltrosConfig