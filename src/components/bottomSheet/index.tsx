import React, { useState } from 'react';
import { Actionsheet, CheckCircleIcon, CloseIcon, HStack, Text, WarningIcon } from 'native-base';
import { errorStatus, successStatus } from './constants';

const BottomSheetUI = ({ isOpen, onClose, message }: BottomSheetUIProps) => {

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content backgroundColor={'primary.generic'}>
                <HStack flexDirection="row" alignItems="center" p={4} space={14}>
                    <Text bold fontSize={'2xl'} color={'primary.genericBlack'}>{message.text}</Text>
                    {
                        errorStatus.includes(message.status) && <CloseIcon size={8} color={'primary.genericBlack'} />
                    }
                    {
                        successStatus.includes(message.status) && <CheckCircleIcon size={8} color={'primary.genericBlack'} />
                    }
                    {
                        !successStatus.includes(message.status) && !errorStatus.includes(message.status) && <WarningIcon size={8} color={'primary.genericBlack'} />
                    }
                </HStack>
            </Actionsheet.Content>
        </Actionsheet>
    );

};

export default BottomSheetUI;