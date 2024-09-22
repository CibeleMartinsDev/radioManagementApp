import { Box, FormControl, Input, VStack } from "native-base";
import { DynamicFormUIProps } from "./interface";
import { InputUI } from "../input";

import SelectUI from "../select";
import { Items } from "../select/interface";


export default function DynamicFormUI({ inputs, children, theme, selectOptions, height }: DynamicFormUIProps) {

    return (
        <VStack display="flex" justifyContent={'center'} alignItems={'center'} space={20} height={height ? height : 'customHeightDynamicForm'} width="70%" mx="3">

            {theme === 'customer' ? inputs.map(i => {
                return (
                    <FormControl maxH={1} display="flex" alignItems={'center'} isRequired>
                        <InputUI key={i.name} type={i.type} placeholder={i.placeholder} value={i.value as string} onChange={i.onChange} haveIcon={false} />
                        <FormControl.ErrorMessage key={i.type} _text={{
                            fontSize: 'xs'
                        }}>
                            Error Name
                        </FormControl.ErrorMessage>
                    </FormControl>
                )
            }
            ) :
                (
                    <>
                        <SelectUI value={selectOptions?.value as string} onChange={selectOptions?.onChange as (v: string) => void} placeholder={selectOptions?.placeholder as string} items={selectOptions?.items as Items[]} />
                        {
                            inputs?.map(i => {
                                return (
                                    <>
                                        <FormControl maxH={1} display="flex" alignItems={'center'} isRequired>
                                            <InputUI key={i.name} type={i.type} placeholder={i.placeholder} value={i.value as string} onChange={i.onChange} haveIcon={false} />
                                            <FormControl.ErrorMessage key={i.type} _text={{
                                                fontSize: 'xs'
                                            }}>
                                                Error Name
                                            </FormControl.ErrorMessage>
                                        </FormControl></>
                                )
                            }
                            )
                        }
                    </>
                )
            }
            <VStack space={8}>
            {children}
            </VStack>
           
        </VStack>

    )
}