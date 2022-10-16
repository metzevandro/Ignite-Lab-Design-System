import * as BoxcheckPrimitive from '@radix-ui/react-checkbox';
import { Check, Checks } from 'phosphor-react'

export interface BoxcheckProps extends BoxcheckPrimitive.CheckboxProps {}

export function Boxcheck(props: BoxcheckProps) {
    return (
        <BoxcheckPrimitive.Root 
            className="w-6 h-6 p-[2px] bg-gray-800 rounded"
            {...props}
        > 
            <BoxcheckPrimitive.Indicator asChild>
                <Check weight='bold' className="h-5 w-5 text-cyan-500"/>
            </BoxcheckPrimitive.Indicator>
        </BoxcheckPrimitive.Root>
    )  
}