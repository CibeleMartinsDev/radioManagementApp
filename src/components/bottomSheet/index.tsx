import React, { useState } from 'react';
import { Actionsheet, CheckCircleIcon, HStack, Text, WarningIcon } from 'native-base';
import { errorStatus } from './constants';

const BottomSheetUI = ({ isOpen, onClose, message }: BottomSheetUIProps) => {

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content backgroundColor={'primary.generic'}>
                <HStack flexDirection="row" alignItems="center" p={4} space={14}>
                    <Text bold fontSize={'2xl'} color={'primary.genericBlack'}>{message.text}</Text>
                    {
                        errorStatus.includes(message.status) ? <WarningIcon size={8} color={'primary.genericBlack'} /> : <CheckCircleIcon size={8} color={'primary.genericBlack'} />
                    }
                </HStack>
            </Actionsheet.Content>
        </Actionsheet>
    );

};

export default BottomSheetUI;