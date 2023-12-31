import * as React from 'react';
import { IFluxoDeCaixaProps } from './IFluxoDeCaixaProps';
import { makeResetStyles, tokens } from '@fluentui/react-components';

import Acoes from './components/Acoes/Acoes';
import FiltrosConfig from './components/FiltrosConfiguracoes/FiltrosConfig';
import Fluxo from './components/Fluxo/Fluxo';

const useStackClassName = makeResetStyles({
  display: "flex",
  flexWrap: "wrap",
  gap: tokens.spacingHorizontalS,
  padding: tokens.spacingHorizontalS,
  marginTop: tokens.spacingHorizontalS
});

const FluxoDeCaixa: React.FunctionComponent<IFluxoDeCaixaProps> = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const openFiltrosConfig = (open:boolean):void => {
    setIsOpen(open);
  }

  return (
    <React.Fragment>
      <div className={useStackClassName()}>
        <Acoes openFiltrosConfig={(open:boolean) => {openFiltrosConfig(open)}}/>
        <FiltrosConfig open={isOpen} openFiltrosConfig={(open:boolean) => {openFiltrosConfig(open)}}/>
      </div>
      <div className={useStackClassName()}>
        <Fluxo />
      </div>
    </React.Fragment>
  );

}

export default FluxoDeCaixa
