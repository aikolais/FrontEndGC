import * as React from "react";
import { Icon } from '@fluentui/react/lib/Icon';

import { initializeIcons } from "@fluentui/react";

import './styles.css';

initializeIcons();

const BtnOrganization = (props: any) => {

const MyIcon = () => <Icon iconName="Filter" />;

    return (
        <div className="container-btn">
        <h2 className="org">Organizações</h2>
<div className="container-btn__btn">

          <button className="btn table-organizations__add" type="submit">
            + Nova Organização
          </button>
          <button className="btn table-organizations__filter" type="submit">
           <MyIcon /> Filtrar organizações
          </button>
</div>
        </div>
    );
}

export default BtnOrganization;