import './Checkbox.css';
import * as React from 'react';
import { MultiSelectComponent, CheckBoxSelection, Inject } from '@syncfusion/ej2-react-dropdowns';

 class CheckBox extends React.Component {
    constructor() {
        super(...arguments);
        //define the data with category
        this.countries = [
            { Name: 'Anshuman Yadav', Code: 'AU', Icon:"e825" },
            { Name: 'Virat Kohali', Code: 'BM' },
            { Name: 'Rohut Sharma', Code: 'CA' },
            { Name: 'Ms Dhoni', Code: 'CM' },
            { Name: 'Raina', Code: 'DK' },
            { Name: 'Yuvraj', Code: 'FR' },
            { Name: 'Sahwag', Code: 'FI' },
            { Name: 'Pujara', Code: 'DE' },
            { Name: 'Bumrah', Code: 'GL' },
            { Name: 'Kuldeep', Code: 'HK' },
            { Name: 'Umesh', Code: 'IN' },
            { Name: 'Chahal', Code: 'IT' },
            { Name: 'Siraj', Code: 'JP' },
            
        ];
        // maps the appropriate column to fields property
        this.checkFields = { text: 'Name', value: 'Code', iconCss:"Icon" };
    }
    
    onChangeLimit(args) {
        // enable or disable the selection limit in multiselect on CheckBox checked state
        this.mulObj.enableSelectionOrder = args.checked;
    }
    render() {
        return (<div id="multichecbox" className='control-pane'>
        <div className='control-section col-lg-8'>
          <div id="multigroup" className="control-styles">
            <h4>Selected Team</h4>
            <MultiSelectComponent 
            id="checkbox" 
            ref={(scope) => { this.mulObj = scope; }} 
            dataSource={this.countries} 
            fields={this.checkFields} 
            placeholder="Select Team or type" 
            mode="CheckBox" 
            showSelectAll={true} 
            showDropDownIcon={true} 
            filterBarPlaceholder="Search countries" 
            popupHeight="350px"
            >
            <Inject services={[CheckBoxSelection]}/>
            </MultiSelectComponent>
          </div>
        </div>
       

      </div>);
    }
}
export default CheckBox;