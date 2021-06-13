import React from 'react';

import './../styles/vendor-filter.style.css';

const VendorFilter = ({ 
    vendors, 
    selectedVendor,
    updateSelectedVendor,
    resetSelectedVendor 
}) =>{
    const vendors_with_all = [{
            'name':'All Suppliers',
            'value': ''
        }
        , ...vendors
    ];

    return (
        <>
            <div className="tag">
                Supplier
            </div>

            <div className="filter">
                <select 
                    value={selectedVendor}
                    onChange={e=>updateSelectedVendor(e)} 
                    className="select select--vendor"
                >
                    {vendors_with_all.map(vendor=>
                        <option 
                            key={`option-${vendor.value}`} 
                            className="select__option"
                            value={vendor.value}
                        >
                            {vendor.name}
                        </option>
                    )}
                </select>

                <div className="button button--reset" onClick={()=>resetSelectedVendor()}>
                    <div className="button__icon">
                        X
                    </div>
                    <div className="button__name">
                        Reset Filters
                    </div>
                </div>
            </div>
        </>
    )
} 

export default VendorFilter;