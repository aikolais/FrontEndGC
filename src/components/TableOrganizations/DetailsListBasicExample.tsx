import * as React from "react";
import { ITextFieldStyles } from "@fluentui/react/lib/TextField";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode
} from "@fluentui/react/lib/DetailsList";
import { mergeStyles } from "@fluentui/react/lib/Styling";

import './styles.css';

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
});

const textFieldStyles: Partial<ITextFieldStyles> = {
  root: { maxWidth: "300px" },
};

interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;

}

interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
}

class DetailsListBasicExample extends React.Component<
  {},
  IDetailsListBasicExampleState
> {
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._allItems = [];
    for (let i = 1; i <= 3; i++) {
      this._allItems.push({
        key: i,
        name: "Organização " + i,
        value: i,
      });
    }

    this._columns = [
      {
        key: "column1",
        name: "Name",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
      },
    ];

        this.state = {
      items: this._allItems,
    };

  }

  public render(): JSX.Element {
    const { items } = this.state;

    return (
      <div className="teste">
        <DetailsList
          items={items}
          columns={this._columns}
          setKey="set"
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
        />
        </div>
    );
  }
}

export default DetailsListBasicExample