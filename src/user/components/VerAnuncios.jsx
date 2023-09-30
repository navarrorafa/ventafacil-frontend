import React from 'react'

import { useMultipleAds } from '../hooks/useMultipleAds';
import { Card } from './Card';

export const VerAnuncios = () => {
    const { multipleAdData } = useMultipleAds()


    return (
        <>
        {multipleAdData.map(item=>(
            <><Card key={item.id_anuncio} {...item}/></>
        ))
        
    }</>
    )

}
