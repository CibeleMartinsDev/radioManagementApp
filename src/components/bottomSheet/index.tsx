import React, { useState } from 'react';
import { Actionsheet, CheckCircleIcon, HStack, Text, WarningIcon } from 'native-base';
import { errorStatus } from './constants';

const BottomSheetUI = ({ isOpen, onClose, message }: BottomSheetUIProps) => {

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <HStack flexDirection="row" alignItems="center" p={4} space={14}>
                    <Text>{message.text}</Text>
                    {
                        errorStatus.includes(message.status) ? <WarningIcon size={8} color={'primary.generic'} /> : <CheckCircleIcon size={8} color={'primary.generic'} />
                    }
                </HStack>
            </Actionsheet.Content>
        </Actionsheet>
    );

};

export default BottomSheetUI;