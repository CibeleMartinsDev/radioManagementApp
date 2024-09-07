interface BottomSheetUIProps {
    isOpen: boolean;
    onClose: ()=> void;
    message: {
        status: number;
        text: string;
    };
}