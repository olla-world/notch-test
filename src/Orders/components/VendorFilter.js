import React from 'react';

import Button from './../../core_components/Button';
import Select from '../../core_components/Select';

import './../styles/vendor-filter.style.css';

const VendorFilter = ({ 
        vendors, 
        selectedVendor,
        updateSelectedVendor,
        resetSelectedVendor 
    }) => <>
            <div className="tag">
                Supplier
            </div>

            <div className="filter">
                <Select 
                    classNameMod='vendor'
                    selected={selectedVendor}
                    handleChange={updateSelectedVendor}
                    options={
                        [
                            {
                                'name':'All Suppliers',
                                'value': ''
                            }
                            , ...vendors
                        ]
                    }
                />

                <Button 
                    classNameMod="reset" 
                    handleClick={resetSelectedVendor}
                >
                    <div className="button--reset__icon">
                        X
                    </div>
                    <div className="button--reset__name">
                        Reset Filters
                    </div>
                </Button>
            </div>
        </>
    

export default VendorFilter;