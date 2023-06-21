import React from 'react';

import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

interface AddressProps {
    handleComplete : (data : Address) => void;
}

const AddressSearch : React.FC<AddressProps> = ({
    handleComplete
}) => {
    return (
        <DaumPostcodeEmbed
            onComplete={handleComplete}
        />
    );
};

export default AddressSearch;