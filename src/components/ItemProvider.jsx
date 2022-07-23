import React from 'react'

export const ItemProvider = ({ provider_name, provider_id}) => {
    return (
        <li key={provider_id}>
            
            {provider_name}
            
        </li>
    )
}
