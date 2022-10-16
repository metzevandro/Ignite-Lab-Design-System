import * as BoxcheckPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface BoxcheckProps {}

export function Boxcheck({} : BoxcheckProps) {
    return (
        <BoxcheckPrimitive.Root 
            className="w-6 h-6 p-[2px] bg-gray-800 rounded"
        > 
            <BoxcheckPrimitive.Indicator asChild>
                <Check weight='bold' className="h-5 w-5 text-cyan-500"/>
            </BoxcheckPrimitive.Indicator>
        </BoxcheckPrimitive.Root>
    )  
}